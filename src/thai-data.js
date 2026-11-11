/* Thai layers shared by the student deck, the tutor deck and print.js (one copy only).
   THAI_Q[id]       1-3 bullets per question: why the answer is right and why the traps are wrong
   THAI_CONCEPT[id] 1-3 key points per concept card
   THAI_SEC[id]     {big: one big-picture sentence, traps: 3-5 common exam traps}
   Thai med-student register: Thai sentences, English medical terms kept in English. No exam facts beyond the slides. */
window.THAI_Q = window.THAI_Q || {};
window.THAI_CONCEPT = window.THAI_CONCEPT || {};
window.THAI_SEC = window.THAI_SEC || {};

/* ---------- H · Head & neck imaging ---------- */
window.THAI_SEC.H = {
  big: "ทุกข้อในส่วนนี้ถามว่า <b>ภาพแบบไหนเห็นอะไรดีที่สุด</b>: plain film ถูกและเร็วแต่เป็น 2 มิติ, CT เด่นเรื่อง <b>กระดูกและอากาศ</b> (orbit, skull base, temporal bone, sinus), MRI เด่นเรื่อง <b>soft tissue และ optic pathway</b> โดยไม่มีรังสี",
  traps: [
    "<b>Caldwell</b> (15°) = frontal sinus + orbital fracture · <b>Towne</b> (30°) = occipital bone + mandible · <b>Waters</b> (45°) = facial fracture + paranasal sinus อย่าสลับกัน",
    "Slide 13 ใส่ visual pathway ไว้กับ CT แต่ slide 20 บอก <b>MRI preferred สำหรับ optic pathway</b> → ถาม optic nerve/pathway ตอบ MRI, ถาม bony orbit ตอบ CT",
    "<b>High radiation</b> เป็นข้อเสียของ CT ส่วน <b>long scanning time</b> และ contraindication (pacemaker, ear implant, claustrophobia) เป็นข้อเสียของ MRI",
    "Windowing และ MPR ใช้ข้อมูลชุดเดิม <b>ไม่ต้องสแกนใหม่</b> ส่วน VRT คือภาพ 3 มิติ",
    "Plain film ไม่เหมาะกับ <b>base of skull fracture</b> และ complex facial fracture"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "H-C1": ["Plain film ถูกและเร็ว แต่ทุกอย่างตามแนวลำแสงซ้อนกันอยู่ในภาพเดียว", "ใช้กับงานดูกระดูกหรืออากาศแบบคร่าวๆ ส่วนงานละเอียดย้ายไป CT/MRI"],
  "H-C2": ["แต่ละ view <b>เปลี่ยนมุม beam หรือท่าศีรษะ</b> เพื่อย้ายกระดูกหนาออกจากบริเวณที่อยากดู", "จำเป็นชุด: ชื่อ view → มุม → เป้าหมาย · ลำดับตัวอักษร C → T → W ตรงกับมุมที่มากขึ้น"],
  "H-C3": ["CT แก้ปัญหาภาพซ้อนของ plain film ได้ทั้งหมด", "งานหลักของ CT ในหัวและคอคือ <b>กระดูกบางที่ติดกับอากาศ</b>"],
  "H-C4": ["CT ชุดเดียวดูได้หลายแบบ: เปลี่ยนการแสดงสีเทา เปลี่ยนระนาบ หรือสร้างภาพพื้นผิว", "ไม่มีขั้นไหนต้องสแกนใหม่หรือเพิ่มรังสี"],
  "H-C5": ["MRI ไม่ได้ใช้ X-ray จึงเหมาะกับคนที่ต้องตรวจซ้ำ", "เลือก MRI เมื่อคำถามเป็นเรื่อง <b>เนื้อเยื่ออ่อนและเส้นประสาท</b> แต่ต้องเช็กข้อห้ามของผู้ป่วยก่อนเสมอ"],
  "H-C6": ["ถามก่อนว่าเป้าหมายเป็น <b>กระดูก/อากาศ</b> หรือ <b>soft tissue</b> แล้วค่อยเลือก", "จากนั้นดูตัวผู้ป่วย: implant, กลัวที่แคบ หรือเด็กที่ต้องตรวจซ้ำ เปลี่ยนคำตอบได้"]
});

/* ---------- S · Skull ---------- */
window.THAI_SEC.S = {
  big: "ส่วนนี้คือการ <b>อ่านชื่อโครงสร้างบนฟิล์ม</b>: แยกกระดูก cranial กับ facial ให้ได้ แล้วไล่ landmark บน AP (แนวกลาง → orbit → ใต้ orbit) และบน lateral (vault → sinus 4 ตัว → sella/clivus → mastoid)",
  traps: [
    "<b>Ethmoid และ sphenoid</b> นับเป็น cranial bone (calvarium ในสไลด์) แม้อยู่ลึกที่ฐานกะโหลก ส่วน <b>vomer, lacrimal, palatine, inferior turbinate</b> เป็น facial bone",
    "บน AP: <b>lesser wing</b> = เส้นเกือบแนวนอนบนสุดของ orbit · <b>greater wing</b> = เส้นเฉียงในวง orbit",
    "บน lateral: <b>sphenoid sinus อยู่ใต้ sella</b> ส่วน ethmoid sinus อยู่หน้ากว่า ระหว่างลูกตา",
    "<b>Tuberculum sellae อยู่หน้า</b>, dorsum sellae อยู่หลัง; clivus ต่อลงไปด้านหลังล่าง",
    "Mastoid air cells อยู่ <b>หลัง</b> condyle ของ mandible"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "S-C1": ["แบ่งกระดูกกะโหลกเป็น 2 กลุ่ม: กลุ่มที่ล้อมสมอง (6 ชิ้นในสไลด์) และกลุ่มใบหน้า (8 ชิ้น)", "ระวังกระดูกที่อยู่ลึกแต่ถูกจัดเข้ากลุ่มที่คนมักเดาผิด"],
  "S-C2": ["อ่าน AP เป็นแถว: แนวกลาง → ใน orbit → ใต้ orbit → ขอบนอก → vault", "เส้นจุดสองเส้นใน orbit มาจากกระดูกชิ้นเดียวกันที่หน้าตาเหมือนค้างคาว"],
  "S-C3": ["อ่าน lateral ทีละชั้น: vault → sinus จากหน้าไปหลัง → ฐานกะโหลกตรงกลาง → ด้านหลังล่าง", "Sinus แต่ละตัวมีจุดอ้างอิง: orbit, sella หรือ hard palate"],
  "S-C4": ["Sella คือหลุมบนตัว sphenoid มีขอบหน้า ขอบหลัง และปุ่มยื่นทั้งสองฝั่งด้านบน", "ใต้หลุมเป็นช่องอากาศ และด้านหลังล่างเป็นกระดูกลาดลงสู่ foramen magnum"]
});

/* ---------- O · Orbit ---------- */
window.THAI_SEC.O = {
  big: "Orbit คือ <b>กรวยกระดูก 7 ชิ้น</b> ที่ติดกับเพื่อนบ้าน 3 ด้าน (anterior cranial fossa, ethmoid/nasal cavity, maxillary sinus) ผนังที่บางที่สุดคือ medial wall และ floor ซึ่งเป็นที่มาของ blow-out fracture ส่วนเนื้อหาข้างในอ่านจาก CT/MRI เป็นวงกล้ามเนื้อรอบ optic nerve",
  traps: [
    "<b>Floor = maxilla</b> (ไม่ใช่ zygomatic) · <b>medial wall = ethmoid</b> (lamina papyracea) · <b>roof = frontal</b>",
    "<b>Lateral wall</b> = zygomatic + <b>greater</b> wing · <b>Apex (optic canal)</b> = <b>lesser</b> wing ของ sphenoid อย่าสลับปีก",
    "Blow-out fracture แตกลง <b>maxillary sinus</b> และมี orbital fat + <b>inferior rectus</b> ไส้เลื่อนลงไป",
    "Orbit วิ่งจาก eyelid <b>anterolateral</b> ไป apex <b>posteromedial</b>; แกนสองข้างกางกัน <b>~45°</b>",
    "Superior oblique อยู่ <b>superomedial</b> · lacrimal gland อยู่ <b>superolateral</b> · nasolacrimal duct อยู่หน้า medial wall ด้านล่าง"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "O-C1": ["Orbit เป็นกรวยที่ปากกรวยอยู่ด้านหน้านอก ยอดกรวยอยู่ด้านหลังใน", "เพื่อนบ้าน 3 ด้านแชร์ผนังบางๆ กับ orbit โรคจึงลามข้ามกันได้"],
  "O-C2": ["จำเป็นตาราง: ผนัง → กระดูกหลัก → กระดูกเสริม", "Sphenoid โผล่หลายที่ ต้องแยกให้ได้ว่าปีกไหนอยู่ตรงไหน"],
  "O-C3": ["ขอบ orbit แข็งแรง แต่ผนังด้านในบางมาก แรงจึงไปแตกที่ผนังแทนขอบ", "ดูว่าอะไรอยู่ใต้ผนังที่แตก และอะไรร่วงลงไปได้"],
  "O-C4": ["ในฟิล์ม occipitofrontal อ่านจากขอบ orbit → ปีก sphenoid ในวง → ผนังด้านใน", "ช่องดำระหว่างสองปีกคือรอยต่อที่ต้องตั้งชื่อให้ได้"],
  "O-C5": ["อ่าน axial CT ทีละระดับ: บน → กลาง (ระดับเส้นประสาทตา) → ล่าง", "แต่ละระดับมีกล้ามเนื้อและช่องทางของตัวเอง"],
  "O-C6": ["ภาพ coronal หลังลูกตา = วงกล้ามเนื้อล้อมเส้นประสาทตาตรงกลาง", "ไล่ตามเข็มนาฬิกา แล้วหา muscle ที่อยู่นอกวงและหลอดเลือดดำสองเส้น"]
});

/* ---------- N · Ear, nose, sinuses ---------- */
window.THAI_SEC.N = {
  big: "ส่วนนี้เป็นเรื่อง <b>ช่องอากาศในกระดูก</b>: หูชั้นกลางและ mastoid ใน petrous bone, nasal cavity และ sinus 4 คู่ ซึ่ง CT bone window เห็นดีที่สุด จุดที่ต้องจำแม่นคือ <b>ostiomeatal unit</b> ที่เป็นทางระบายร่วมของ 3 sinus",
  traps: [
    "OMU ระบาย <b>frontal, anterior ethmoid, maxillary</b> · ไม่ระบาย sphenoid และ posterior ethmoid",
    "บน CT temporal bone: <b>cochlea อยู่หน้า</b>, semicircular canal อยู่หลัง · <b>IAC วิ่งเข้าด้านใน</b>, EAC อยู่ด้านนอก",
    "<b>Mastoid antrum</b> = ช่องอากาศใหญ่ช่องเดียว · mastoid air cells = รังผึ้งเล็กๆ",
    "Nasal cavity ออกด้านหน้าทาง <b>nares</b> ออกด้านหลังทาง <b>choanae</b> เข้า nasopharynx",
    "Maxillary sinus → <b>Waters</b> · frontal/ethmoid → <b>Caldwell</b> · sphenoid → <b>lateral</b>"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "N-C1": ["Petrous pyramid คือกระดูกที่แข็งที่สุดของกะโหลก และเป็นบ้านของหูชั้นกลางกับชั้นใน", "หูชั้นกลางแบ่งเป็น 3 ชั้นตามความสูง หูชั้นในแบ่งเป็นกระดูกด้านนอกกับท่อด้านใน"],
  "N-C2": ["อ่าน CT ตามทางเสียง: จากรูหูด้านนอก → ช่องอากาศตรงกลาง → อวัยวะรับเสียงและการทรงตัว → ช่องเส้นประสาทด้านใน", "ช่องอากาศด้านหลังมีสองแบบ: ช่องใหญ่ช่องเดียว กับรังผึ้งเล็กๆ"],
  "N-C3": ["Nasal cavity เป็นกล่องที่มีพื้น หลังคา ผนังกั้นตรงกลาง และประตูหน้า-หลัง", "ผนังด้านข้างมีหิ้ง 3 ชั้น แต่ละหิ้งคลุมร่องใต้ตัวเอง"],
  "N-C4": ["Sinus แต่ละคู่มีตำแหน่งอ้างอิงบนฟิล์ม: เหนือ orbit, ระหว่าง orbit, ใต้ orbit, ใต้ sella", "เลือก view ที่ดันกระดูกหนาออกจาก sinus ที่อยากดู"],
  "N-C5": ["ทางระบายเล็กๆ จุดเดียวรับน้ำจากหลาย sinus จึงเป็นจุดอุดตันที่สำคัญที่สุด", "ไล่ผนังด้านข้างของจมูกจากบนลงล่างใน coronal CT"],
  "N-C6": ["Axial: sinus เรียงจากบนลงล่างและจากหน้าไปหลัง", "Sagittal: เห็นความสัมพันธ์ของ sinus หลังสุดกับ sella ด้านบนและคอหอยด้านล่าง"]
});

/* ---------- L · Pharynx & larynx ---------- */
window.THAI_SEC.L = {
  big: "Pharynx เป็นท่อเดียวแบ่ง 3 ส่วนด้วย <b>จุดอ้างอิงเฉพาะ</b> (soft palate, vallecula/hyoid, cricoid) ส่วน larynx อยู่ด้านหน้าของ hypopharynx และแบ่งเป็น supraglottis, glottis, subglottis โดยมี <b>vocal fold</b> เป็นตัวแบ่ง",
  traps: [
    "<b>Pyriform sinus เป็นของ hypopharynx</b> ไม่ใช่ larynx",
    "ทั้ง pharynx และ larynx สิ้นสุดที่ <b>ขอบล่างของ cricoid</b>",
    "Nasopharynx ด้านข้าง หน้า → หลัง: <b>ET opening → torus tubarius → Rosenmüller fossa</b>",
    "บน → ล่าง: <b>vestibular (false) fold → ventricle → vocal (true) fold</b>",
    "Vallecula อยู่ระหว่าง <b>base of tongue กับ epiglottis</b> และเป็นขอบล่างของ oropharynx (ระดับ hyoid)"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "L-C1": ["Pharynx เป็นท่อเดียวจากฐานกะโหลกลงไปต่อหลอดอาหาร", "แบ่ง 3 ส่วนตามสิ่งที่อยู่ด้านหน้า: จมูก, ปาก, กล่องเสียง"],
  "L-C2": ["ผนังด้านข้างของ nasopharynx มี 3 จุดเรียงหน้าไปหลัง: รูเปิด, ปุ่มนูน, ซอก", "จุดหลังสุดเป็นซอกลึกที่ต้องหาให้เจอในทุกภาพ"],
  "L-C3": ["Oropharynx จบที่ร่องระหว่างโคนลิ้นกับฝาปิดกล่องเสียง", "Hypopharynx อยู่หลังกล่องเสียงและมีซอกสองข้างที่ยื่นไปด้านหน้านอก"],
  "L-C4": ["Larynx แบ่ง 3 ระดับโดยใช้ fold คู่ล่างเป็นเส้นแบ่ง", "บน CT เห็น fold สองคู่ คั่นด้วยร่องอากาศบางๆ"],
  "L-C5": ["ฟิล์ม lateral neck อ่านทางเดินอากาศจากบนลงล่างเป็นลำดับเดียว", "ใช้กระดูกเล็กด้านหน้าเป็นจุดอ้างอิงระดับ"]
});

/* ---------- C · Chest imaging ---------- */
window.THAI_SEC.C = {
  big: "เริ่มทุกเรื่องในทรวงอกด้วย <b>CXR</b> ที่แยกได้ 5 densities แล้วใช้ <b>CT</b> เมื่อต้องการภาพตัดขวาง (ปรับ window ตามสิ่งที่ดู) และ <b>MRI</b> สำหรับ soft tissue ของหัวใจ mediastinum และผนังทรวงอก ส่วนวิธีถ่ายฟิล์ม (PA, lateral, AP) เปลี่ยนสิ่งที่เห็นได้",
  traps: [
    "ขาว → ดำ: <b>metal → bone → soft tissue → fat → air</b>",
    "Lung window <b>WL −500 / WW 1500</b> · bone <b>500 / 2000</b> · mediastinum <b>50 / 500</b>",
    "MRI <b>limited</b> สำหรับ lung parenchyma แต่ดีสำหรับหัวใจ, mediastinum, hilum, diaphragm, chest wall",
    "<b>AP film ขยายหัวใจ</b> (หัวใจอยู่หน้า ไกลจาก receptor) → ประเมินขนาดหัวใจจาก PA",
    "Lateral: beam <b>right → left</b> และยกแขนขึ้นเหนือศีรษะ"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "C-C1": ["Radiograph แยกสิ่งต่างๆ ได้ด้วยความหนาแน่นเท่านั้น จึงมีสีเทาให้เห็นไม่กี่ระดับ", "ขอบของอวัยวะเกิดจากความต่างของ density ที่อยู่ติดกัน (หลักของ silhouette sign ใน section P)"],
  "C-C2": ["CT ชุดเดียวดูได้หลาย window: เลือก window ตามสิ่งที่อยากดู", "ช่วงที่แสดง = level ± width/2"],
  "C-C3": ["แต่ละเครื่องมีคำถามที่ตอบได้ดีที่สุดในทรวงอก", "เนื้อปอดเป็นอากาศเกือบทั้งหมด ซึ่งเป็นจุดอ่อนของเครื่องมือหนึ่ง"],
  "C-C4": ["ชื่อ view บอกทิศทางของ beam: เข้าทางไหน ออกทางไหน", "ทุกขั้นของการจัดท่ามีเหตุผล: ยกอะไรออกจากปอด และทำให้ปอดขยายเต็มที่"],
  "C-C5": ["Lateral ใช้เห็นสิ่งที่ซ่อนอยู่หลังหัวใจหรือ diaphragm ในภาพ PA", "AP ใช้กับผู้ป่วยที่ยืนไม่ได้ แต่ต้องระวังการขยายของโครงสร้างด้านหน้า"]
});

/* ---------- A · Airways & lobes ---------- */
window.THAI_SEC.A = {
  big: "ทางเดินหายใจแตกแขนงจาก trachea → main bronchi → lobar bronchi และปอดแบ่งเป็น <b>ขวา 3 lobe ซ้าย 2 lobe</b> โดยมี fissure เป็นเส้นแบ่ง สิ่งสำคัญคือ lobe <b>ซ้อนกันบน PA</b> จึงต้องใช้ lateral หรือ CT แยกหน้า-หลัง",
  traps: [
    "<b>Right main bronchus: สั้นกว่าและตั้งชันกว่า</b> · left: ยาวกว่าและแนวนอนกว่า",
    "หลังแยก RUL bronchus แล้ว right main bronchus ต่อเป็น <b>bronchus intermedius</b>",
    "Tracheal ring <b>ไม่ครบวง</b> ครอบหน้า 2/3; หลัง 1/3 เป็น membranous",
    "<b>Minor fissure</b> = RUL/RML (เห็นใน PA) · <b>major fissure</b> = RUL+RML / RLL (เห็นใน lateral)",
    "Segment: <b>ขวา 10 ซ้าย 8</b> · carinal angle ปกติ <b>~60°</b> (50–75°)"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "A-C1": ["Trachea เป็นท่อกลางลำตัวที่มีตัวเลขสำคัญ: จุดเริ่ม ความยาว จำนวนวงกระดูกอ่อน", "วงกระดูกอ่อนไม่ครบรอบ ด้านที่เปิดอยู่เป็นผนังอ่อน"],
  "A-C2": ["สองข้างไม่สมมาตร: ข้างหนึ่งสั้นและชัน อีกข้างยาวและราบ", "ข้างขวามีชื่อพิเศษของช่วงหลังแขนงแรก"],
  "A-C3": ["นับ lobe, fissure และ segment ของแต่ละข้างให้ได้", "บน PA lobe ซ้อนกันหน้า-หลัง เงาเดียวอาจมาจากสอง lobe"],
  "A-C4": ["CT แยก lobe ได้ชัดเพราะไม่ซ้อนกัน", "Lobe ล่างอยู่ค่อนไปด้านหลัง ส่วน middle lobe/lingula อยู่ค่อนไปด้านหน้า"],
  "A-C5": ["Fissure คือแนวที่ visceral pleura ของสอง lobe มาชนกัน เห็นเป็นเส้นเมื่อแนวมันขนานกับลำแสง", "เส้นหนึ่งเห็นใน PA อีกสองเส้นต้องดูใน lateral"]
});

/* ---------- P · Silhouette & pleura ---------- */
window.THAI_SEC.P = {
  big: "ขอบของหัวใจ aorta และ diaphragm เห็นได้เพราะมี <b>ปอดที่มีอากาศ</b> อยู่ติด ถ้า lobe ที่ติดขอบนั้นเต็มไปด้วยของเหลว/เนื้อเยื่อ <b>ขอบจะหาย</b> จึงบอกได้ว่ารอยโรคอยู่ lobe ไหน ส่วน pleura ปกติมองไม่เห็น จะเห็นก็ต่อเมื่อมีน้ำ อากาศ หรือหินปูน",
  traps: [
    "<b>Right heart border = RML</b> (ไม่ใช่ RLL) · <b>right hemidiaphragm = RLL</b>",
    "<b>Left heart border = lingula</b> · <b>left hemidiaphragm และ descending aorta = LLL</b> · aortic knob = LUL",
    "Right paratracheal stripe และ azygos arch = <b>RUL</b>",
    "Effusion: <b>blunted costophrenic angle</b> · pneumothorax: <b>visible visceral pleural line</b> ไม่มี lung marking นอกเส้น",
    "Pleural plaque = thickening + calcification ของ <b>parietal</b> pleura จาก <b>asbestos</b>"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "P-C1": ["ขอบเกิดจากอากาศที่อยู่ติดกับ soft tissue; เอาอากาศออก ขอบก็หาย", "รอยโรคที่แค่ซ้อน (อยู่หน้าหรือหลัง) ไม่ทำให้ขอบหาย"],
  "P-C2": ["ขอบแต่ละเส้นมี lobe เจ้าของ: lobe บนคุมขอบ mediastinum ด้านบน, middle lobe/lingula คุมขอบหัวใจ, lobe ล่างคุม diaphragm", "จำเป็นคู่ซ้าย-ขวา แล้วฝั่งซ้ายมีขอบพิเศษหลังหัวใจอีกหนึ่งเส้น"],
  "P-C3": ["อ่านฟิล์ม pneumonia: หาว่าขอบไหนหาย แล้วขอบไหนยังอยู่", "Fissure ที่ตัดเงาเป็นเส้นตรงช่วยยืนยัน lobe"],
  "P-C4": ["Pleura มีสองชั้นและมีช่องว่างที่ปกติแทบไม่มีอะไรอยู่", "ปกติมองไม่เห็น จะเห็นเมื่อมีอะไรเข้าไปอยู่ในช่องนั้น"],
  "P-C5": ["ของเหลวตกลงล่าง อากาศลอยขึ้นบนเมื่อผู้ป่วยยืน", "แต่ละโรคมีสัญญาณแรกที่ต้องมองหาเฉพาะจุด"],
  "P-C6": ["ผนังด้านไหนของ pleura หนาตัว และสาเหตุจากการสัมผัสอะไร", "เห็นได้ทั้งแบบหันหน้าเข้าหา beam และแบบเห็นด้านข้าง"]
});

/* ---------- M · Mediastinum & chest wall ---------- */
window.THAI_SEC.M = {
  big: "ทุกอย่างที่ไม่ใช่ปอดในทรวงอก: <b>hilum</b> (หลอดเลือด หลอดลม ต่อมน้ำเหลือง), <b>mediastinum</b> ที่แบ่ง compartment เพื่อสร้าง differential diagnosis ของก้อน, <b>diaphragm</b> กับรูเปิด 3 ระดับ และ <b>chest wall</b>",
  traps: [
    "<b>Left hilum สูงกว่า right</b> · <b>right hemidiaphragm สูงกว่า left</b> 1–1.5 cm",
    "Modified scheme: <b>trachea และ aortic arch อยู่ middle</b> · esophagus, descending aorta, azygos อยู่ posterior · thymus อยู่ anterior",
    "<b>T8 caval (IVC) · T10 esophageal (left gastric, vagus) · T12 aortic (thoracic duct, azygos)</b>",
    "ก้อน anterior: thymic lesion, retrosternal goiter, germ cell tumor, lymphadenopathy · ก้อน posterior: <b>neurogenic tumor</b>, hiatal hernia",
    "Neurovascular bundle บน → ล่าง = <b>V-A-N</b> ใต้ซี่โครง"
  ]
};
Object.assign(window.THAI_CONCEPT, {
  "M-C1": ["Hilum คือรากของปอดที่ทุกท่อเข้าออก", "สองข้างอยู่สูงไม่เท่ากัน ต้องจำว่าข้างไหนสูงกว่า"],
  "M-C2": ["Mediastinum มีขอบ 4 ด้าน: หน้า หลัง บน ล่าง", "เส้นแบ่งตามกายวิภาคลากจากมุมของกระดูกหน้าอกไปหลัง"],
  "M-C3": ["Scheme ของรังสีวิทยาแบ่ง 3 ช่องหน้า-กลาง-หลัง โดยใช้ pericardium และผนังหลังของ trachea เป็นเส้นแบ่ง", "รู้ว่าอะไรอยู่ช่องไหน = รู้ว่าก้อนในช่องนั้นมาจากอะไรได้บ้าง"],
  "M-C4": ["บอก compartment ก่อน แล้วไล่รายการของ compartment นั้นเป็น differential", "แต่ละช่องมีโรค signature ที่ควรจำได้ทันที"],
  "M-C5": ["Diaphragm สองซีกสูงไม่เท่ากัน และมีรูเปิดหลัก 3 รูที่ 3 ระดับกระดูกสันหลัง", "ไส้เลื่อนผ่านรูหนึ่งจะเห็นเป็นก้อนหลังหัวใจ"],
  "M-C6": ["ผนังอก = กระดูก + กล้ามเนื้อระหว่างซี่โครง 3 ชั้น + มัดเส้นเลือดเส้นประสาท", "ลำดับของมัดเส้นเลือดเส้นประสาทบอกว่าควรแทงเข็มตรงไหน"]
});

/* ========== Questions: Thai answer bullets (AC79–AC81 past papers), keyed by question ID ========== */

/* ---------- H ---------- */
Object.assign(window.THAI_Q, {
  "H1": [
    "Plain film ยังใช้ใน 4 กรณี: <b>skull fracture, foreign body, screening sinusitis</b> และ bone defect จาก metabolic/endocrine",
    "Optic pathway, soft tissue ของคอ และการดูหลอดเลือดโดยไม่ใช้ contrast เป็นจุดเด่นของ <b>MRI</b>"
  ],
  "H2": [
    "ผิด: base of skull fracture เป็น <b>จุดอ่อน</b> ของ plain film เพราะภาพ 2D ซ้อนกัน",
    "Skull base → <b>CT</b> เป็น primary modality"
  ],
  "H3": [
    "Complex facial fracture เป็น <b>ข้อเสีย</b> ของ plain film ไม่ใช่ข้อดี",
    "อีก 4 ตัวเลือกคือข้อดีตามสไลด์"
  ],
  "H4": [
    "Radiograph = ภาพฉาย 2D ทุกอย่างตามแนวลำแสงซ้อนทับกัน → overlapping lines",
    "CT = ภาพตัดขวาง ไม่ซ้อน และ reformat ได้ทุกระนาบ"
  ],
  "H5": [
    "ภาพมองขึ้นไปที่ <b>ท้ายทอย</b>: occipital bone อยู่กลางภาพ และ mandible กางออกด้านล่าง → <b>Towne (30°)</b>",
    "Caldwell = frontal sinus/orbit, Waters = ใบหน้า/sinus"
  ],
  "H6": [
    "คางเงยขึ้น → petrous bone ลงไปอยู่ต่ำกว่า maxillary sinus → เห็น maxillary sinus และ orbit ชัด = <b>Waters view</b>",
    "ใช้ดู facial fracture และ paranasal sinus"
  ],
  "H7": [
    "<b>Caldwell</b> (15°) = frontal sinus + fracture to orbit",
    "Waters = ใบหน้า + sinus, Towne = ท้ายทอย + mandible"
  ],
  "H8": [
    "Caldwell <b>15°</b> · Towne <b>30°</b> (37° ใน inset) · Waters <b>45°</b> บน diagram"
  ],
  "H9": [
    "ถูก ตรงตามสไลด์: Waters ใช้ดู <b>facial fracture และ paranasal sinus</b>"
  ],
  "H10": [
    "ภาพ frontal ที่คางไม่เงย เห็น orbit และ frontal sinus ชัดในส่วนบนของหน้า → <b>Caldwell</b>",
    "คางเงยและ maxillary sinus เด่น = Waters · เห็นท้ายทอยกลางภาพ = Towne"
  ],
  "H11": [
    "CT = best สำหรับ <b>paranasal sinus & nasal cavity</b> และ primary สำหรับ bony orbit, skull base, temporal bone",
    "Optic pathway, soft tissue ของหน้าและคอ และการดูหลอดเลือดโดยไม่ใช้ contrast เป็นจุดเด่นของ MRI"
  ],
  "H12": [
    "ข้อเสียหลักของ CT คือ <b>radiation สูง</b> (รวมถึงค่าใช้จ่ายและ contrast)",
    "Long scan time และ pacemaker เป็นปัญหาของ MRI"
  ],
  "H13": [
    "ผิด: temporal bone และ skull base ใช้ <b>CT</b> เป็น primary modality เพราะเป็นงานกระดูกละเอียด (ossicles, air cells, fracture line)"
  ],
  "H14": [
    "ต้องการดู <b>ผนังกระดูก</b> ของ orbit → <b>CT bone window</b>",
    "MRI ใช้ดู soft tissue และ optic pathway ไม่ใช่กระดูกบางๆ"
  ],
  "H15": [
    "สมองและกล้ามเนื้อเป็นสีเทาเรียบ แต่ cortex, trabecular bone และ mastoid air cells คมชัด → <b>bone window</b>"
  ],
  "H16": [
    "ผิด: windowing แค่เปลี่ยนการ map ค่า CT number เป็นสีเทาบนจอ <b>ไม่ต้องสแกนใหม่</b>"
  ],
  "H17": [
    "Coronal/sagittal ได้จาก <b>MPR</b> = นำ axial stack มาตัดใหม่",
    "VRT = ภาพ 3D, windowing = เปลี่ยนสีเทา"
  ],
  "H18": [
    "แถวล่างเป็นภาพ 3D ของกะโหลก = <b>VRT</b>",
    "แถวบนคือ soft tissue window, bone window และ coronal MPR"
  ],
  "H19": [
    "เปลี่ยน <b>window</b>: ดูสมองใน soft tissue window และดู fracture ใน bone window จากข้อมูลชุดเดียวกัน"
  ],
  "H20": [
    "Contraindication ของ MRI ในสไลด์: <b>cardiac pacemaker, ear implant, claustrophobia</b>",
    "การดู optic nerve เป็น <b>ข้อบ่งชี้</b> ของ MRI ไม่ใช่ข้อห้าม"
  ],
  "H21": [
    "MRI <b>sensitive to blood flow</b> → เห็นหลอดเลือดใหญ่ได้โดยไม่ต้องฉีด contrast"
  ],
  "H22": [
    "ถูก: MRI preferred สำหรับ <b>optic pathway</b> และ soft tissue ของหน้าและคอ"
  ],
  "H23": [
    "ข้อเสีย MRI: แพง, <b>สแกนนาน</b>, มี contraindication",
    "Radiation เป็นของ CT; MRI แยก soft tissue ได้ดีและทำได้หลายระนาบ"
  ],
  "H24": [
    "Bony orbit → <b>CT</b> และ pacemaker ห้าม MRI อยู่แล้ว"
  ],
  "H25": [
    "Optic pathway → <b>MRI</b> ถูกต้อง",
    "Ossicles/temporal bone → CT, sinus ก่อนผ่าตัด → CT, base of skull → CT, claustrophobia เป็นข้อห้ามของ MRI"
  ],
  "H26": [
    "Plain film: ถูก หาง่าย รังสีน้อย ไม่ต้องให้ผู้ป่วยร่วมมือ",
    "CT: plain film เป็น 2D จึงพลาด base of skull และ complex facial fracture"
  ],
  "H27": [
    "ถูก: MRI <b>ไม่มี ionizing radiation</b> เหมาะกับเด็กที่ต้องตรวจซ้ำ และเห็น soft tissue ดีที่สุด"
  ]
});

/* ---------- S ---------- */
Object.assign(window.THAI_Q, {
  "S1": [
    "<b>Vomer</b> (ส่วนล่างของ nasal septum) เป็น facial bone",
    "Ethmoid, sphenoid, temporal, occipital อยู่ในกลุ่ม calvarium 6 ชิ้น"
  ],
  "S2": [
    "<b>Ethmoid</b> อยู่ในกลุ่ม calvarium แม้ส่วนใหญ่อยู่ระหว่างลูกตา",
    "Lacrimal, palatine, zygomatic, inferior turbinate เป็น facial bone"
  ],
  "S3": [
    "ถูก: inferior turbinate เป็นกระดูกแยกในกลุ่ม facial bone",
    "Middle และ superior concha เป็นส่วนของ ethmoid"
  ],
  "S4": [
    "ผิด: ในภาพ Netter middle nasal concha อยู่ใต้หัวข้อ <b>ethmoidal bone</b>"
  ],
  "S5": [
    "เลข 4 ชี้ปุ่มกระดูกแหลมตรงกลางระหว่าง orbit เหนือ nasal cavity = <b>crista galli</b>"
  ],
  "S6": [
    "เส้นเกือบแนวนอนด้านบนของ orbit = <b>lesser wing of sphenoid</b>",
    "Greater wing เป็นเส้นเฉียงที่ต่ำกว่า (เลข 6)"
  ],
  "S7": [
    "เลข 7 อยู่ขอบนอกของฐานกะโหลก = <b>mastoid process</b>",
    "Maxillary sinus คือเลข 8 อยู่ใกล้แนวกลางใต้ orbit"
  ],
  "S8": [
    "เส้นเฉียงใน orbit = <b>greater wing of sphenoid</b> ซึ่งเป็นผนังด้านข้างของ orbit"
  ],
  "S9": [
    "เลข 2 ชี้หลุมรูปถ้วยบนตัว sphenoid = <b>sella turcica</b>"
  ],
  "S10": [
    "เลข 9 = ช่องอากาศในตัว sphenoid ใต้ sella = <b>sphenoid sinus</b>",
    "Ethmoid sinus (เลข 7) อยู่หน้ากว่า ระหว่างลูกตา"
  ],
  "S11": [
    "กระดูกที่ลาดลงไปด้านหลังจาก sella (เส้นจุด) = <b>clivus</b>"
  ],
  "S12": [
    "แผ่นกระดูกแนวนอนระหว่างจมูกกับปาก = <b>palatine process of maxilla</b> (hard palate)"
  ],
  "S13": [
    "ช่องอากาศเป็นรังผึ้งหลังหู = <b>mastoid air cells</b>",
    "Condyle ของ mandible (เลข 12) อยู่ด้านหน้า"
  ],
  "S14": [
    "ถูก: clivus ต่อจาก dorsum sellae ลงไปด้านหลังล่างถึง foramen magnum"
  ],
  "S15": [
    "<b>Dorsum sellae</b> = ผนังด้านหลัง มี posterior clinoid อยู่บนยอด",
    "Tuberculum sellae = ขอบด้านหน้า"
  ],
  "S16": [
    "Sella ตั้งอยู่บนตัว sphenoid → ใต้พื้น sella คือ <b>sphenoid sinus</b>"
  ],
  "S17": [
    "ผิด: tuberculum sellae อยู่ <b>ด้านหน้า</b>, dorsum sellae อยู่ด้านหลัง"
  ],
  "S18": [
    "หน้า → หลัง: tuberculum → sella → dorsum · บน: anterior/posterior clinoid · ล่าง: sphenoid sinus · หลังล่าง: clivus"
  ]
});

/* ---------- O ---------- */
Object.assign(window.THAI_Q, {
  "O1": [
    "ใต้ orbit = <b>maxillary sinus</b>",
    "บน = anterior cranial fossa · ด้านใน = nasal cavity + ethmoid air sinus"
  ],
  "O2": [
    "แกน orbit สองข้างกางออกจากกันประมาณ <b>45°</b> ส่วน medial wall สองข้างเกือบขนานกัน"
  ],
  "O3": [
    "ผิด: กลับด้าน → จาก eyelid <b>anterolateral</b> ไป apex <b>posteromedial</b>"
  ],
  "O4": [
    "Lamina papyracea = orbital plate ของ <b>ethmoid</b> เป็นหลัก",
    "กระดูกเสริม: frontal process of maxilla, lacrimal, sphenoid"
  ],
  "O5": [
    "Floor = orbital plate ของ <b>maxilla</b> เป็นหลัก (เสริมด้วย zygomatic, palatine)",
    "ใต้ floor คือ maxillary sinus จึงเป็นที่มาของ blow-out fracture"
  ],
  "O6": [
    "Lateral wall = frontal process ของ <b>zygomatic</b> + <b>greater wing</b> of sphenoid"
  ],
  "O7": [
    "Optic canal อยู่ใน <b>lesser wing</b> of sphenoid (apex)",
    "Greater wing = lateral wall"
  ],
  "O8": [
    "7 ชิ้น: frontal, zygomatic, maxilla, ethmoid, lacrimal, sphenoid, palatine",
    "<b>Temporal ไม่อยู่</b> ใน orbit"
  ],
  "O9": [
    "ความดันใน orbit ↑ → <b>floor</b> แตกลง <b>maxillary antrum</b>",
    "Orbital fat + <b>inferior rectus</b> (และ inferior oblique) ไส้เลื่อนหรือติดในรอยแตก"
  ],
  "O10": [
    "ถูก: lamina papyracea (แผ่นกระดาษ) = medial wall บางมาก กั้น orbit กับ ethmoid air cell"
  ],
  "O11": [
    "ลูกบอลใหญ่กว่าขอบ → ขอบไม่แตก แต่ลูกตาถูกดันไปข้างหลัง → <b>ความดันใน orbit ↑</b>",
    "ผนังที่อ่อนที่สุด (floor) แตกลง maxillary sinus → fat และ inferior rectus ร่วงลงไป"
  ],
  "O12": [
    "ช่องดำระหว่าง lesser wing (บน) กับ greater wing (ล่าง) = <b>superior orbital fissure</b>"
  ],
  "O13": [
    "ถูก: ethmoid air cell อยู่ด้านในของ lamina papyracea คั่นระหว่าง orbit กับ nasal cavity"
  ],
  "O14": [
    "ระดับ optic nerve: <b>medial และ lateral rectus</b> วิ่งชิดผนังสองข้าง ล้อม optic nerve sheath complex"
  ],
  "O15": [
    "หน้าบนด้านนอก = <b>lacrimal gland</b>",
    "Superior oblique อยู่บนด้านใน · nasolacrimal duct อยู่ล่างด้านใน"
  ],
  "O16": [
    "ท่อหน้า medial wall ในระดับล่าง = <b>nasolacrimal duct</b> (จาก lacrimal sac ลงจมูก)"
  ],
  "O17": [
    "Optic nerve ออกทาง <b>optic canal</b> ใน lesser wing",
    "SOF/IOF เป็นทางของเส้นประสาทและหลอดเลือดอื่น"
  ],
  "O18": [
    "หลังลูกตา rectus ทั้ง 4 + levator ล้อม <b>optic nerve sheath complex</b> ไว้ตรงกลาง"
  ],
  "O19": [
    "<b>Superior oblique</b> อยู่ superomedial เหนือ medial rectus แยกจาก recti"
  ],
  "O20": [
    "ผิด: superior ophthalmic vein อยู่ใต้ <b>superior rectus</b> · inferior ophthalmic vein อยู่ล่างใน fat"
  ],
  "O21": [
    "<b>Inferior oblique</b> เกาะที่ floor ด้านหน้าแล้วอ้อมใต้ลูกตา ไม่ได้วิ่งไปถึง apex"
  ]
});

/* ---------- N ---------- */
Object.assign(window.THAI_Q, {
  "N1": [
    "Petrous part มี <b>middle ear, inner ear (cochlea) และ IAC</b>",
    "<b>Sphenoid sinus</b> อยู่ในตัว sphenoid ไม่ใช่ temporal bone"
  ],
  "N2": [
    "epi = บน, meso = กลาง, hypo = ล่าง → บนสุดคือ <b>epitympanum</b>",
    "Vestibule เป็นส่วนของหูชั้นใน"
  ],
  "N3": [
    "ถูก: petrosus = เหมือนหิน ตรงกับกระดูกที่แข็งที่สุดซึ่งหุ้มหูชั้นใน"
  ],
  "N4": [
    "โครงสร้างขดเป็นวงด้านหน้าของหูชั้นใน = <b>cochlea</b>",
    "Semicircular canal อยู่ด้านหลัง (เลข 8)"
  ],
  "N5": [
    "ช่องที่วิ่งเข้าด้านในจากหูชั้นในไปทาง posterior fossa = <b>internal auditory canal</b>"
  ],
  "N6": [
    "จุดกระดูกเล็กๆ ในช่องอากาศของหูชั้นกลาง = <b>malleus</b>"
  ],
  "N7": [
    "ช่องอากาศใหญ่ช่องเดียวหลังหูชั้นกลาง = <b>mastoid antrum</b>",
    "รังผึ้งเล็กๆ คือ mastoid air cells (เลข 5)"
  ],
  "N8": [
    "ช่องอากาศด้านนอกสุดที่นำเข้าหูชั้นกลาง = <b>external auditory canal</b>"
  ],
  "N9": [
    "ด้านหน้า = nares · ด้านหลัง = <b>choanae</b> เข้า nasopharynx",
    "OMU/hiatus เป็นทางระบาย sinus; Eustachian tube เปิดเข้า nasopharynx จากด้านข้าง"
  ],
  "N10": [
    "ผิด: ด้านหลังเปิดผ่าน choanae เข้า <b>nasopharynx</b> ไม่ใช่ oropharynx"
  ],
  "N11": [
    "ก้อน soft tissue ยื่นจากผนังด้านข้างใน Caldwell = <b>inferior nasal concha</b> (turbinate ใหญ่สุด)"
  ],
  "N12": [
    "Maxillary sinus ดูดีที่สุดใน <b>Waters</b> เพราะ petrous bone ถูกดันลงต่ำกว่า sinus"
  ],
  "N13": [
    "Caldwell ในสไลด์ label <b>frontal, ethmoid และ maxillary sinus</b>",
    "Waters label maxillary sinus"
  ],
  "N14": [
    "ผิด: sphenoid sinus อยู่ใต้ sella กลางกะโหลก ดูใน <b>lateral film</b> (และ CT)"
  ],
  "N15": [
    "OMU = ทางระบายร่วมของ <b>frontal, anterior ethmoidal และ maxillary sinus</b>",
    "Sphenoid และ posterior ethmoid ระบายทางอื่น"
  ],
  "N16": [
    "ร่องโค้งในวงกลม OMU ใต้ bulla = <b>hiatus semilunaris</b>"
  ],
  "N17": [
    "Air cell กลมๆ เหนือ hiatus = <b>ethmoidal bulla</b>"
  ],
  "N18": [
    "แผ่นกระดูกม้วนที่ห้อยจาก ethmoid เหนือ inferior concha = <b>middle nasal concha</b>"
  ],
  "N19": [
    "OMU อุด → <b>frontal, anterior ethmoid, maxillary</b> ระบายไม่ได้พร้อมกัน",
    "Posterior ethmoid และ sphenoid ระบายทางอื่นจึงไม่ถูกกระทบ"
  ],
  "N20": [
    "ดอกจันอยู่ที่ <b>frontal sinus</b> เหนือ orbit",
    "Frontal sinus ระบายผ่าน OMU เข้า <b>hiatus semilunaris</b> ใน middle meatus → อุดตรงนี้ sinus จึงทึบ"
  ],
  "N21": [
    "ระดับ ethmoid: air space กลางลำตัวด้านหลัง ethmoid cells = <b>sphenoid sinus</b>"
  ],
  "N22": [
    "ระดับต่ำสุด ช่องอากาศใหญ่สองข้างของ nasal cavity = <b>maxillary sinus</b>"
  ],
  "N23": [
    "ถูก: sphenoid sinus อยู่ใน sphenoid body ระหว่าง sella (บน) กับ nasopharynx (ล่าง)"
  ]
});

/* ---------- L ---------- */
Object.assign(window.THAI_Q, {
  "L1": [
    "Pharynx สิ้นสุดที่ <b>ขอบล่างของ cricoid cartilage</b> แล้วต่อเป็น cervical esophagus"
  ],
  "L2": [
    "Oropharynx = <b>soft palate → vallecula/base of tongue</b> (ระดับ hyoid)",
    "Skull base → soft palate = nasopharynx · pharyngoepiglottic fold → cricoid = hypopharynx"
  ],
  "L3": [
    "ถูก: nasopharynx อยู่หลัง nasal cavity จาก skull base ลงมาถึง soft palate"
  ],
  "L4": [
    "ซอกหลังสุดของผนังด้านข้าง หลัง torus = <b>fossa of Rosenmüller</b>"
  ],
  "L5": [
    "ปุ่มนูนระหว่างรูเปิด (4) กับซอก (7) = <b>torus tubarius</b>"
  ],
  "L6": [
    "รูเปิดด้านหน้าของผนังด้านข้าง = <b>Eustachian tube opening</b>"
  ],
  "L7": [
    "หน้า → หลัง: <b>ET opening → torus tubarius → Rosenmüller fossa</b> (รู → ปุ่ม → ซอก)"
  ],
  "L8": [
    "Pyriform sinus = anterolateral recess ของ <b>hypopharynx</b> อยู่สองข้างของ larynx"
  ],
  "L9": [
    "Vallecula = ร่องระหว่าง <b>base of tongue กับ epiglottis</b>"
  ],
  "L10": [
    "ผิด: soft palate → ระดับ hyoid คือ <b>oropharynx</b>",
    "Hypopharynx = pharyngoepiglottic fold → inferior cricoid"
  ],
  "L11": [
    "<b>Glottis</b> = vocal fold + ช่องระหว่างกลาง",
    "Supraglottis อยู่เหนือ, subglottis อยู่ใต้"
  ],
  "L12": [
    "ร่องอากาศบางๆ ระหว่าง fold บน (2) กับ fold ล่าง (6) = <b>laryngeal ventricle</b>"
  ],
  "L13": [
    "Fold คู่บนเหนือ ventricle = <b>vestibular (false) fold</b>"
  ],
  "L14": [
    "วงกระดูกอ่อนหนาด้านหลังทางเดินหายใจใต้ arytenoid = <b>cricoid cartilage</b>"
  ],
  "L15": [
    "ถูก: false fold → ventricle → true fold จากบนลงล่าง"
  ],
  "L16": [
    "Subglottis = <b>ใต้ vocal cord ลงไปถึง trachea</b>",
    "B คือ supraglottis, D คือ hypopharynx"
  ],
  "L17": [
    "แผ่นโค้งของ soft tissue ใต้ vallecula = <b>epiglottis</b>"
  ],
  "L18": [
    "กระดูกเล็กทึบด้านหน้าทางเดินหายใจระดับ vallecula = <b>hyoid</b>"
  ],
  "L19": [
    "ช่องอากาศเล็กระหว่างโคนลิ้นกับ epiglottis = <b>vallecula</b>"
  ],
  "L20": [
    "Nasopharynx → soft palate → oropharynx → vallecula → epiglottis → hypopharynx → larynx → trachea",
    "Hyoid อยู่ด้านหน้าระดับ vallecula"
  ]
});

/* ---------- C ---------- */
Object.assign(window.THAI_Q, {
  "C1": [
    "ยิ่งหนาแน่นยิ่งดูด X-ray มาก ยิ่งขาว: <b>metal → bone → soft tissue → fat → air</b>"
  ],
  "C2": [
    "ถูก: fat อยู่ระหว่าง soft tissue กับ air บนสเกลสีเทา"
  ],
  "C3": [
    "<b>CXR</b> เป็นการตรวจเบื้องต้นของปอด mediastinum และ bony thorax",
    "CT/MRI ใช้ตอบคำถามเฉพาะหลังจากนั้น"
  ],
  "C4": [
    "กระดูก (<b>manubrium</b>) ทึบที่สุด → CT number สูงสุด ขาวที่สุด",
    "ลำดับ: bone &gt; soft tissue (valve, pleura) &gt; fat &gt; lung (อากาศ)"
  ],
  "C5": [
    "อากาศดูด X-ray น้อยสุด → <b>lung parenchyma</b> ดำที่สุด",
    "Fat ดำกว่า soft tissue แต่ยังสว่างกว่าอากาศ"
  ],
  "C6": [
    "<b>Lung window</b> = WL −500, WW 1500",
    "Bone 500/2000 · mediastinum 50/500"
  ],
  "C7": [
    "ช่วง = level ± width/2 = 50 ± 250 = <b>−200 ถึง +300 HU</b> (mediastinum window)"
  ],
  "C8": [
    "ภาพ <b>บนสุด</b> เห็นหลอดเลือดและหลอดลมในปอดสีเทา = lung window",
    "อีกสองภาพปอดดำสนิท เน้น soft tissue และกระดูก"
  ],
  "C9": [
    "CT ไม่ใช่การตรวจแรกของทุกอาการ → <b>CXR</b> ก่อน",
    "CT ใช้กับ consolidation, mass, lung cancer และ ILD"
  ],
  "C10": [
    "ผิด: MRI <b>limited</b> สำหรับ lung parenchyma",
    "MRI ดี heart, mediastinum, hilum, diaphragm, chest wall"
  ],
  "C11": [
    "MRI ใช้กับ <b>soft tissue</b>: heart, mediastinum, hilum, diaphragm, chest wall",
    "Nodule, ILD, staging เป็นงานของ CT"
  ],
  "C12": [
    "PA = <b>ยืน อกแนบ receptor beam จากหลังไปหน้า หายใจเข้าเต็มที่</b>",
    "ท่านอนหงายและฟิล์มข้างเตียงเป็น AP · ท่ายกแขนและ beam ขวา → ซ้ายเป็น lateral"
  ],
  "C13": [
    "หมุนข้อศอกไปข้างหน้าเพื่อดึง <b>scapula ออกด้านข้าง</b> ไม่ให้บังปอด"
  ],
  "C14": [
    "ถูก: lateral = ผนังอกด้านข้างแนบ receptor, beam <b>ขวา → ซ้าย</b>, ยกแขนขึ้น"
  ],
  "C15": [
    "ฟิล์มข้างเตียงเป็น <b>AP</b>: หัวใจอยู่ด้านหน้า ไกลจาก receptor ด้านหลัง → ถูกขยาย",
    "อย่าเพิ่งบอกว่าหัวใจโตจาก AP film"
  ],
  "C16": [
    "AP ใช้ใน <b>ทารก/เด็กเล็ก</b> และผู้ป่วยหนัก ไม่คงที่ หรือติดเตียง"
  ],
  "C17": [
    "PA: ยืน อกแนบ receptor beam หลัง→หน้า หัวใจแทบไม่ขยาย",
    "AP: นอน/นั่ง beam หน้า→หลัง หัวใจไกล receptor จึง <b>ดูโตกว่าจริง</b>"
  ]
});

/* ---------- A ---------- */
Object.assign(window.THAI_Q, {
  "A1": [
    "Trachea เริ่มที่ <b>subglottic larynx (~2 cm ใต้ vocal cord)</b> และสิ้นสุดที่ <b>carina</b>"
  ],
  "A2": [
    "วงกระดูกอ่อน 16–20 วง <b>ไม่ครบรอบ</b> ครอบด้านหน้า 2/3",
    "ด้านหลัง 1/3 เป็น membranous portion"
  ],
  "A3": [
    "ผิด: วงกระดูกอ่อน <b>ไม่ครบรอบ</b>; ด้านหลัง 1/3 เป็น membranous portion"
  ],
  "A4": [
    "ความยาวเฉลี่ย <b>12 cm</b> (10–13 cm)"
  ],
  "A5": [
    "Right main bronchus <b>สั้นกว่าและชันกว่า</b>",
    "Left ยาวกว่าและแนวราบกว่า (ต้องลอดใต้ aortic arch ไปที่ hilum ซ้าย)"
  ],
  "A6": [
    "หลังแยก RUL bronchus → <b>bronchus intermedius</b> ก่อนแตกเป็น RML และ RLL bronchus"
  ],
  "A7": [
    "แขนงสั้นที่ชี้ขึ้นและออกด้านข้างจาก right main bronchus = <b>right upper lobar bronchus</b>"
  ],
  "A8": [
    "จุดที่ trachea แยกเป็นสองข้าง = <b>carina</b>"
  ],
  "A9": [
    "Carinal angle ปกติ <b>~60° (50–75°)</b>"
  ],
  "A10": [
    "ขวา <b>3 lobe 10 segment</b> · ซ้าย <b>2 lobe 8 segment</b>"
  ],
  "A11": [
    "RLL ขึ้นไปสูงทางด้านหลัง → บน PA ซ้อนกับ <b>RML (หน้า) และ RLL (หลัง)</b>",
    "ต้องใช้ lateral แยกหน้า-หลัง"
  ],
  "A12": [
    "ถูก: RML เป็นลิ่มด้านหน้าล่าง ขอบบน = minor fissure ขอบหลัง = major fissure"
  ],
  "A13": [
    "Oblique fissure ลาดจากบนหลังลงล่างหน้า → <b>LLL อยู่หลังและใต้</b> fissure, LUL อยู่หน้าและบน"
  ],
  "A14": [
    "<b>RML</b> อยู่หน้าและด้านใน ชิด right heart border",
    "จึงเป็นเหตุที่โรคใน RML ทำให้ขอบหัวใจขวาหาย"
  ],
  "A15": [
    "Minor fissure = <b>RUL (บน) / RML (ล่าง)</b>",
    "Major fissure = RUL+RML (หน้า) / RLL (หลัง)"
  ],
  "A16": [
    "Right major fissure แยก <b>RUL + RML</b> ด้านหน้า ออกจาก <b>RLL</b> ด้านหลัง"
  ],
  "A17": [
    "บน PA เห็นได้ปกติคือ <b>right minor fissure</b>",
    "Major fissure ทั้งสองข้างดูใน lateral"
  ],
  "A18": [
    "ระหว่าง minor fissure (หน้า) กับ major fissure (หลัง) = <b>RML</b>"
  ]
});

/* ---------- P ---------- */
Object.assign(window.THAI_Q, {
  "P1": [
    "ขอบเกิดจาก <b>อากาศติดกับ soft tissue</b>; ถ้า soft tissue density (consolidation/mass/fluid) มาติด → สอง density เท่ากัน → <b>ขอบหาย</b>"
  ],
  "P2": [
    "ถูก: RML อยู่ <b>หน้า</b> ติดขอบหัวใจขวา; RLL อยู่ <b>หลัง</b> แค่ซ้อนกับขอบ จึงไม่ทำให้ขอบหาย"
  ],
  "P3": [
    "Right heart border หาย → <b>RML</b>",
    "RLL จะทำให้ right hemidiaphragm หายแทน"
  ],
  "P4": [
    "Left hemidiaphragm หายแต่ขอบหัวใจซ้ายชัด → <b>LLL</b> (อยู่หลังหัวใจ บน diaphragm)",
    "Lingula จะทำให้ขอบหัวใจซ้ายหาย"
  ],
  "P5": [
    "Aortic arch (knob) อยู่ติด <b>LUL</b>"
  ],
  "P6": [
    "Lingula อยู่หน้า ติด <b>left heart border</b>"
  ],
  "P7": [
    "Right paratracheal stripe (และ azygos arch) อยู่ติด <b>RUL</b>"
  ],
  "P8": [
    "Descending aorta อยู่ด้านหลัง ติด <b>LLL</b>"
  ],
  "P9": [
    "Lingula ติด <b>left heart border</b> → รอยโรคทำให้ขอบนี้หาย (silhouette sign)",
    "Aortic arch = LUL · descending aorta และ left hemidiaphragm = LLL"
  ],
  "P10": [
    "เส้น A = left heart border หาย, เส้น B = left hemidiaphragm ยังเห็น → <b>lingula</b>",
    "ถ้าเป็น LLL จะทำให้ left hemidiaphragm หาย"
  ],
  "P11": [
    "PA: right heart border หาย · lateral: ลิ่มด้านหน้าล่าง → <b>RML</b>"
  ],
  "P12": [
    "เงาอยู่หลังหัวใจ left hemidiaphragm หาย แต่ขอบหัวใจซ้ายยังชัด → <b>LLL</b>"
  ],
  "P13": [
    "Right upper zone ทึบ paratracheal stripe หาย ขอบล่างตรงตาม minor fissure → <b>RUL</b>"
  ],
  "P14": [
    "Pleural cavity = <b>potential space</b> ระหว่าง parietal และ visceral pleura ปกติมองไม่เห็น"
  ],
  "P15": [
    "ผิด: pleura ปกติ <b>มองไม่เห็น</b> ใน CXR/CT",
    "ถ้าเห็นเส้น pleura ที่ขอบปอด → นึกถึง pneumothorax"
  ],
  "P16": [
    "มุม costophrenic ขวาทื่อจาก meniscus ของน้ำ → <b>pleural effusion</b>"
  ],
  "P17": [
    "เห็นเส้น visceral pleura ด้านขวาและไม่มี lung marking ด้านนอก → <b>pneumothorax</b>"
  ],
  "P18": [
    "Pneumothorax: <b>visible visceral pleural line</b> ที่ขอบปอด",
    "Blunted CP angle เป็นของ effusion"
  ],
  "P19": [
    "ด้านขวาไม่เห็นลายหลอดเลือด/หลอดลมที่ขอบเมื่อเทียบกับด้านซ้าย → <b>pneumothorax</b> ขวา"
  ],
  "P20": [
    "ท่ายืน น้ำไปขังที่มุมต่ำสุดด้านข้างก่อน → <b>costophrenic angle ทื่อ</b> (สไลด์ RS หน้า 40)"
  ],
  "P21": [
    "เลือดใน pleural space ดูเหมือนน้ำ: ทึบที่ฐาน มุม costophrenic ทื่อ → แทง + เลือดออก = <b>hemothorax</b>"
  ],
  "P22": [
    "Calcified pleural thickening ตามผนังอกและ diaphragm = pleural plaque จาก <b>asbestos</b> (คนงานอู่ต่อเรือ)"
  ],
  "P23": [
    "Pleural plaque = thickening + calcification ของ <b>parietal pleura</b>"
  ],
  "P24": [
    "Effusion = น้ำ: ฐานทึบ CP angle ทื่อ diaphragm หาย",
    "Pneumothorax = อากาศ: เห็น pleural line ไม่มี lung marking นอกเส้น"
  ]
});

/* ---------- M ---------- */
Object.assign(window.THAI_Q, {
  "M1": [
    "Hilum = <b>pulmonary artery, pulmonary vein, bronchus, lymph nodes</b>",
    "<b>Thoracic duct</b> อยู่ posterior mediastinum ไม่ใช่ hilum"
  ],
  "M2": [
    "ถูก: <b>left hilum สูงกว่า</b> เพราะ left pulmonary artery พาดข้าม left main bronchus"
  ],
  "M3": [
    "Plane of Ludwig (sternal angle → T4/T5) แบ่ง <b>superior กับ inferior</b> mediastinum"
  ],
  "M4": [
    "หน้า-หลัง: <b>sternum → thoracic spine</b> · บน-ล่าง: thoracic inlet → diaphragm"
  ],
  "M5": [
    "Thymus อยู่ <b>anterior</b> mediastinum (พร้อม lymph node, fat, internal mammary vessels)"
  ],
  "M6": [
    "Middle: heart, great vessels, <b>trachea และ main bronchi</b>, node, phrenic/vagus/left RLN",
    "Esophagus, descending aorta, azygos อยู่ posterior"
  ],
  "M7": [
    "Posterior: esophagus, descending aorta, <b>azygos/hemiazygos</b>, thoracic duct, nerves"
  ],
  "M8": [
    "หลอดเลือดกลมด้านขวาของ ascending aorta (1) = <b>SVC</b>"
  ],
  "M9": [
    "หลอดเลือดที่โค้งข้าม left main bronchus ไปทาง hilum ซ้าย = <b>left pulmonary artery</b>"
  ],
  "M10": [
    "ถูก: ขอบหลังของ middle = pericardium + <b>posterior tracheal wall</b> ถัดไปเป็น posterior"
  ],
  "M11": [
    "<b>Thymoma</b> อยู่ใน anterior list (thymic lesions)",
    "Neurogenic tumor, hiatal hernia, descending aortic aneurysm, paraspinal abscess อยู่ posterior"
  ],
  "M12": [
    "ก้อน paravertebral = posterior → <b>neurogenic tumor</b>",
    "Thymoma, goiter, germ cell = anterior · pericardial cyst = middle"
  ],
  "M13": [
    "Middle list: node, aortic arch aneurysm, <b>enlarged pulmonary artery</b>, foregut duplication cyst, pericardial cyst, tracheal lesion"
  ],
  "M14": [
    "Posterior mediastinum มี <b>descending aorta</b> → aneurysm อยู่ใน posterior list",
    "Aortic arch, pulmonary trunk = middle · goiter = anterior"
  ],
  "M15": [
    "<b>T8 = caval</b> (IVC + right phrenic)",
    "T10 esophageal, T12 aortic"
  ],
  "M16": [
    "Thoracic duct ผ่าน <b>aortic opening (T12)</b> พร้อม aorta และ azygos"
  ],
  "M17": [
    "Esophageal opening (T10): esophagus + <b>left gastric artery/vein + vagus</b>"
  ],
  "M18": [
    "ผิด: <b>right</b> hemidiaphragm สูงกว่า left 1–1.5 cm (ตับอยู่ข้างใต้)"
  ],
  "M19": [
    "ก้อนกลมหลังหัวใจในผู้ป่วยกรดไหลย้อน = <b>hiatal hernia</b> (ผ่าน esophageal hiatus)"
  ],
  "M20": [
    "บน → ล่าง: <b>Vein – Artery – Nerve</b> อยู่ใต้ขอบล่างของซี่โครง"
  ],
  "M21": [
    "Sternum บน → ล่าง: <b>manubrium → body → xiphoid process</b>"
  ],
  "M22": [
    "ผิด: นอก → ใน = external → internal → <b>innermost</b> (ลึกสุด)"
  ]
});
