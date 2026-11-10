import Foundation
import PDFKit
import AppKit
import ImageIO
// relabel <pdf> <page> <pxWidth> <cx0> <cy0> <cx1> <cy1> <out.jpg> <x0,y0,x1,y1,N>...
// Coordinates are pixels on a 1270-wide rendering of the slide (origin top-left).
// Each box (a label on the slide) is covered with a white tag that shows the number N instead of the name,
// so a labelled course figure becomes an "identify structure N" figure. The slide's arrows stay as they are.
let a = CommandLine.arguments
func fail(_ m: String) -> Never { FileHandle.standardError.write((m + "\n").data(using: .utf8)!); exit(1) }
guard a.count >= 9, let doc = PDFDocument(url: URL(fileURLWithPath: a[1])), let page = doc.page(at: Int(a[2])! - 1) else { fail("usage") }
let W = Int(a[3])!, b = page.bounds(for: .mediaBox).size
let H = Int((CGFloat(W) * b.height / b.width).rounded()), s = CGFloat(W) / 1270
let ctx = CGContext(data: nil, width: W, height: H, bitsPerComponent: 8, bytesPerRow: 0, space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
ctx.setFillColor(CGColor(gray: 1, alpha: 1)); ctx.fill(CGRect(x: 0, y: 0, width: W, height: H))
ctx.saveGState(); ctx.scaleBy(x: CGFloat(W) / b.width, y: CGFloat(W) / b.width); page.draw(with: .mediaBox, to: ctx); ctx.restoreGState()
NSGraphicsContext.saveGraphicsState(); NSGraphicsContext.current = NSGraphicsContext(cgContext: ctx, flipped: false)
for box in a[9...] {
    let v = box.split(separator: ","); guard v.count == 5 else { fail("bad box " + box) }
    let x0 = CGFloat(Double(v[0])!) * s, y0 = CGFloat(Double(v[1])!) * s, x1 = CGFloat(Double(v[2])!) * s, y1 = CGFloat(Double(v[3])!) * s
    let r = CGRect(x: x0, y: CGFloat(H) - y1, width: x1 - x0, height: y1 - y0)
    let check = ProcessInfo.processInfo.environment["CHECK"] != nil   // CHECK=1: keep the slide label, put the tag beside it
    if !check { ctx.setFillColor(CGColor(gray: 1, alpha: 1)); ctx.fill(r) }
    let tag = String(v[4]), fs = min(r.height * 0.62, 30 * s)
    let font = NSFont.monospacedDigitSystemFont(ofSize: fs, weight: .heavy)
    let att: [NSAttributedString.Key: Any] = [.font: font, .foregroundColor: NSColor(calibratedRed: 0.68, green: 0.08, blue: 0.19, alpha: 1)]
    let sz = (tag as NSString).size(withAttributes: att)
    let cx = check ? r.minX - sz.width / 2 - fs * 0.6 : r.midX
    let pill = CGRect(x: cx - sz.width / 2 - fs * 0.45, y: r.midY - sz.height / 2 - fs * 0.08, width: sz.width + fs * 0.9, height: sz.height + fs * 0.16)
    ctx.setStrokeColor(CGColor(red: 0.68, green: 0.08, blue: 0.19, alpha: 1)); ctx.setLineWidth(max(1.5, 2 * s))
    ctx.addPath(CGPath(roundedRect: pill, cornerWidth: pill.height / 2, cornerHeight: pill.height / 2, transform: nil)); ctx.strokePath()
    if check { ctx.setFillColor(CGColor(gray: 1, alpha: 1)); ctx.fill(pill) ; ctx.addPath(CGPath(roundedRect: pill, cornerWidth: pill.height / 2, cornerHeight: pill.height / 2, transform: nil)); ctx.strokePath() }
    (tag as NSString).draw(at: CGPoint(x: cx - sz.width / 2, y: r.midY - sz.height / 2), withAttributes: att)
}
NSGraphicsContext.restoreGraphicsState()
let img = ctx.makeImage()!
let c = [4, 5, 6, 7].map { CGFloat(Double(a[$0])!) * s }
guard let out = img.cropping(to: CGRect(x: c[0].rounded(), y: c[1].rounded(), width: (c[2] - c[0]).rounded(), height: (c[3] - c[1]).rounded())) else { fail("crop") }
let dest = CGImageDestinationCreateWithURL(URL(fileURLWithPath: a[8]) as CFURL, "public.jpeg" as CFString, 1, nil)!
CGImageDestinationAddImage(dest, out, [kCGImageDestinationLossyCompressionQuality: 0.86] as CFDictionary)
guard CGImageDestinationFinalize(dest) else { fail("write failed") }
print(a[8], out.width, "x", out.height)
