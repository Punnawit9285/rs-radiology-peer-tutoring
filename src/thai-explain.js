/* Thai explanation of every concept card (4-7 short paragraphs, each with a bold lead).
   Collapsible under the card in the student deck (starts closed: it gives away the blanks), open in the tutor deck, at the back of the PDF. */
window.THAI_EXPLAIN = window.THAI_EXPLAIN || {};

/* ---------- H · Head & neck imaging ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "H-C1": [
    "<b>ทำไมใช้น้อยลง</b> Plain skull film เป็นภาพฉาย 2 มิติ กระดูกทุกชิ้นตามแนวลำแสงจึงซ้อนกันเป็นเส้นหลายเส้น (multiple overlapping lines and interfaces) อ่านยาก งานส่วนใหญ่จึงย้ายไปที่ CT และ MRI",
    "<b>ยังมีที่ใช้</b> สไลด์ให้ 4 กรณี: skull fracture, foreign body, screening paranasal sinusitis และ bone defect จาก metabolic/endocrine disorder ซึ่งล้วนเป็นงานดูกระดูกหรืออากาศแบบคร่าวๆ",
    "<b>ข้อดี</b> ราคาถูก มีทุกที่ ไม่ต้องเตรียมตัวหรือให้ผู้ป่วยร่วมมือมาก และรังสีค่อนข้างต่ำ จึงเป็นด่านแรกที่ทำได้เร็ว",
    "<b>ข้อเสีย</b> เป็น 2 มิติ และไม่ดีกับ fracture ที่ base of skull หรือ complex facial fracture เพราะชิ้นกระดูกซ้อนกันจนมองไม่เห็นแนวแตก",
    "<b>ภาพในสไลด์</b> ผู้ป่วยนอนคว่ำหน้าแนบ detector คู่กับภาพ sinus film แสดงว่าท่าและมุมของ beam เป็นตัวกำหนดว่าจะเห็นอะไร ซึ่งเป็นเรื่องของการ์ดถัดไป"
  ],
  "H-C2": [
    "<b>หลักคิด</b> เปลี่ยนมุม beam หรือท่าศีรษะเพื่อเลื่อนกระดูกหนา (เช่น petrous bone) ออกจากบริเวณที่อยากดู แต่ละ view จึงมีเป้าหมายเฉพาะ",
    "<b>Caldwell (15°)</b> นอนคว่ำ หน้าผากและจมูกแตะ detector beam เอียง 15° ใช้ดู frontal sinus และ fracture ของ orbit",
    "<b>Towne (30°)</b> นอนหงาย beam เอียง 30° (inset เขียน 37°) มองขึ้นไปที่ท้ายทอย ใช้ดู occipital bone และ mandible",
    "<b>Waters (45°)</b> นอนคว่ำเงยคางแตะ detector diagram เขียน 45° ส่วน inset ท่ายืนเขียน 37° ใช้ดู facial fracture และ paranasal sinus โดยเฉพาะ maxillary sinus",
    "<b>AP และ lateral</b> เป็นภาพพื้นฐาน ภาพ lateral เห็น sella turcica และ sinus ด้านข้าง ซึ่งจะใช้ต่อใน section Skull",
    "<b>จำง่าย</b> ตัวอักษรและมุมเรียงกัน C-T-W = 15-30-45 · Caldwell = หน้าผาก+ตา, Towne = ท้ายทอย+ขากรรไกร, Waters = ใบหน้า+sinus"
  ],
  "H-C3": [
    "<b>CT คืออะไร</b> ภาพตัดขวาง (cross-sectional) จึงไม่มีโครงสร้างซ้อนทับ และ spatial resolution ดีกว่า plain film มาก",
    "<b>Contrast media</b> ฉีดเพื่อดู vascularity และหลอดเลือดให้ชัดขึ้น",
    "<b>งานหลักในหัวและคอ</b> เป็น primary modality สำหรับ bony orbit, skull base และ temporal bone และเป็น best assessment สำหรับ paranasal sinus และ nasal cavity เพราะกระดูกบางตัดกับอากาศได้ชัดมาก",
    "<b>ข้อดี</b> มองทะลุโครงสร้างที่ซ้อนกัน, contrast และ spatial resolution ดี, ทำ MPR และ 3D ได้, มีแพร่หลาย และสแกนเร็ว",
    "<b>ข้อเสีย</b> ค่อนข้างแพง, รังสีสูง และอาจต้องใช้ contrast เพื่อแยก soft tissue หรือดูหลอดเลือด",
    "<b>ข้อขัดแย้งในสไลด์</b> slide 13 ใส่ visual pathway ไว้กับ CT แต่ slide 20 บอก MRI preferred สำหรับ optic pathway หลักที่ใช้ตอบ: กระดูก orbit → CT, เส้นประสาทตาและ pathway → MRI"
  ],
  "H-C4": [
    "<b>Windowing</b> CT เก็บค่า CT number ของทุกจุดไว้ แต่จอแสดงสีเทาได้จำกัด จึงต้องเลือกช่วง (window) ที่จะกระจายเป็นสีเทา",
    "<b>Soft tissue window</b> ช่วงแคบรอบค่า soft tissue ทำให้แยกสมอง กล้ามเนื้อ และไขมันได้ แต่กระดูกขาวทั้งก้อน",
    "<b>Bone window</b> ช่วงกว้างและสูง เห็น cortex, trabecular bone, air cells และ fracture line แต่ soft tissue เป็นสีเทาเรียบ",
    "<b>MPR</b> นำ stack ของ axial images มาตัดใหม่เป็น coronal และ sagittal บนสไลด์ เส้นเหลืองบนภาพ transverse ให้ระนาบ coronal และเส้นแดงให้ระนาบ sagittal",
    "<b>VRT</b> สร้างภาพ 3 มิติของทั้ง volume เหมาะกับการดู facial fracture ที่ซับซ้อน",
    "<b>สำคัญ</b> window, MPR และ VRT ทำจากข้อมูลชุดเดิมทั้งหมด ไม่ต้องสแกนซ้ำและไม่เพิ่มรังสี"
  ],
  "H-C5": [
    "<b>หลักการ</b> MRI ใช้ strong magnetic field, magnetic gradient และ radiofrequency wave จึงไม่มี ionizing radiation",
    "<b>จุดเด่น</b> แยก soft tissue ได้ดีมาก จึง preferred สำหรับ optic pathway และ soft tissue ของหน้าและคอ",
    "<b>หลอดเลือด</b> MRI sensitive ต่อ blood flow จึงเห็นหลอดเลือดใหญ่ได้โดยไม่ต้องใช้ contrast agent",
    "<b>Multiplanar</b> เก็บภาพได้หลายระนาบโดยตรง",
    "<b>ข้อเสีย</b> แพง สแกนนาน และมี contraindication 3 ข้อตามสไลด์: cardiac pacemaker, ear implant และ claustrophobia"
  ],
  "H-C6": [
    "<b>ขั้นแรก</b> ถามว่าเป้าหมายคือกระดูก/อากาศ หรือ soft tissue: กระดูกและ sinus → CT, soft tissue และ optic pathway → MRI",
    "<b>Plain film</b> ยังใช้ได้ในงานคร่าวๆ: skull fracture แบบง่าย, foreign body และ screening sinusitis ด้วย Waters view",
    "<b>CT</b> สำหรับ bony orbit, skull base, temporal bone, sinus anatomy และ complex facial fracture โดยใช้ MPR และ VRT ช่วย",
    "<b>MRI</b> สำหรับ optic pathway, soft tissue ของหน้าและคอ และหลอดเลือดโดยไม่ใช้ contrast",
    "<b>ขั้นที่สอง</b> ดูตัวผู้ป่วย: มี pacemaker, ear implant หรือ claustrophobia → เลี่ยง MRI ไปใช้ CT · เด็กที่ต้องตรวจซ้ำ → MRI เพราะไม่มีรังสี"
  ]
});

/* ---------- S · Skull ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "S-C1": [
    "<b>สองกลุ่ม</b> สไลด์แบ่งกระดูกกะโหลกเป็น calvarium (กระดูกที่ล้อมสมอง) 6 ชิ้น และ facial bones 8 ชิ้น",
    "<b>Calvarium ตามสไลด์</b> frontal, parietal, temporal, occipital, ethmoid และ sphenoid สองชิ้นสุดท้ายอยู่ลึกที่ฐานกะโหลก จึงมักถูกเดาผิดว่าเป็นกระดูกหน้า",
    "<b>Facial bones</b> maxilla, mandible, zygomatic, palatine, lacrimal, vomer, nasal และ inferior turbinate",
    "<b>จุดหลอก</b> inferior turbinate (inferior nasal concha) เป็นกระดูกแยก แต่ middle nasal concha เป็นส่วนหนึ่งของ ethmoid ตามภาพ Netter หน้า 7",
    "<b>เรื่องชื่อ</b> สไลด์ใช้คำว่า calvarium กับกลุ่มนี้ ตำรากายวิภาคเรียกว่า cranial bones หรือ neurocranium ส่วน calvaria ในความหมายแคบคือหลังคากะโหลก ในข้อสอบตอบตามสไลด์"
  ],
  "S-C2": [
    "<b>วิธีอ่าน</b> ไล่เป็นแถว: แนวกลาง, ใน orbit, ใต้ orbit, ขอบนอก และ vault ด้านบน",
    "<b>แนวกลาง</b> crista galli เป็นปุ่มกระดูกแหลมระหว่าง orbit ต่อลงมาเป็น nasal septum และ mandible อยู่ล่างสุด",
    "<b>ใน orbit</b> เส้นจุดสีส้มเกือบแนวนอนคือ lesser wing of sphenoid เส้นจุดสีม่วงแดงที่เฉียงลงคือ greater wing of sphenoid",
    "<b>ใต้ orbit และขอบนอก</b> maxillary sinus อยู่ใต้ orbit ทั้งสองข้าง ส่วน mastoid process อยู่ขอบนอกของฐานกะโหลก",
    "<b>Vault</b> frontal bone อยู่กลางภาพ parietal bone อยู่ด้านข้าง",
    "<b>Sphenoid</b> หน้าตาเหมือนค้างคาว: body ตรงกลาง lesser wing ด้านบน greater wing ด้านล่างและออกข้าง ภาพ inset ช่วยให้เข้าใจว่าทำไมเห็นเป็นสองเส้นใน orbit"
  ],
  "S-C3": [
    "<b>Vault</b> frontal ด้านหน้า parietal ด้านบน occipital ด้านหลัง",
    "<b>Sinus จากหน้าไปหลัง</b> frontal sinus อยู่เหนือ orbit, ethmoid sinus อยู่ระหว่างลูกตา, sphenoid sinus อยู่ใต้ sella และ maxillary sinus อยู่เหนือ hard palate",
    "<b>ฐานกะโหลกตรงกลาง</b> sella turcica เป็นหลุมบนตัว sphenoid และ clivus ลาดลงไปด้านหลังจาก sella ส่วน greater wing of sphenoid เป็นเส้นโค้งจุดด้านหน้า",
    "<b>ด้านหลังล่าง</b> mastoid air cells อยู่หลังหู และ condyle ของ mandible อยู่ด้านหน้า mastoid",
    "<b>Hard palate</b> palatine process of maxilla เป็นพื้นของจมูกและหลังคาของปาก"
  ],
  "S-C4": [
    "<b>Sella turcica</b> หลุมรูปอานม้าบนตัว sphenoid เป็นที่อยู่ของต่อมใต้สมอง (pituitary fossa)",
    "<b>ขอบหน้า</b> tuberculum sellae และเหนือขึ้นไปมี anterior clinoid process ยื่นมาทางด้านหลัง",
    "<b>ขอบหลัง</b> dorsum sellae มี posterior clinoid process อยู่บนยอด",
    "<b>ด้านล่างและด้านหลัง</b> ใต้พื้น sella คือ sphenoid sinus และกระดูกที่ลาดลงด้านหลังคือ clivus",
    "<b>จำเป็นลำดับ</b> หน้า → หลัง: tuberculum → fossa → dorsum มี clinoid process ทั้งสองฝั่งด้านบน"
  ]
});

/* ---------- O · Orbit ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "O-C1": [
    "<b>รูปร่าง</b> orbit เป็นโพรงกระดูกรูปกรวย (conical) อยู่สองข้างในโครงกระดูกใบหน้า",
    "<b>ทิศทาง</b> ปากกรวยอยู่ที่ eyelid ด้าน anterolateral และยอดกรวย (apex) อยู่ด้าน posteromedial",
    "<b>แกน</b> แกนของ orbit สองข้างกางออกจากกันประมาณ 45° ใน MRI เส้นสีเขียวคือแกน ส่วนเส้นสีน้ำเงินคือ medial wall ซึ่งเกือบขนานกัน",
    "<b>เพื่อนบ้าน</b> ด้านบนคือ anterior cranial fossa ด้านในคือ nasal cavity และ ethmoid air sinus ด้านล่างคือ maxillary sinus",
    "<b>ทำไมสำคัญ</b> ผนังที่แชร์กับ sinus บางมาก การติดเชื้อหรือรอยแตกจึงข้ามจาก sinus เข้า orbit หรือกลับกันได้ง่าย"
  ],
  "O-C2": [
    "<b>7 ชิ้น</b> frontal, zygomatic, maxilla, ethmoid, lacrimal, sphenoid และ palatine",
    "<b>Roof</b> ส่วนใหญ่คือ orbital part ของ frontal bone เสริมด้วย lesser wing of sphenoid",
    "<b>Medial wall (lamina papyracea)</b> ส่วนใหญ่คือ orbital plate ของ ethmoid เสริมด้วย frontal process of maxilla, lacrimal และ sphenoid",
    "<b>Floor</b> ส่วนใหญ่คือ orbital plate ของ maxilla เสริมด้วย zygomatic และ palatine",
    "<b>Lateral wall</b> frontal process ของ zygomatic bone กับ greater wing of sphenoid",
    "<b>Apex</b> optic canal อยู่ใน lesser wing of sphenoid จำว่า lesser wing อยู่ด้านในและบน (roof, apex) ส่วน greater wing อยู่ด้านนอก (lateral wall)"
  ],
  "O-C3": [
    "<b>ผนังบาง</b> medial wall ชื่อ lamina papyracea แปลว่าแผ่นกระดาษ ส่วน floor ก็บางเพราะมี maxillary sinus อยู่ข้างใต้",
    "<b>กลไก</b> ลูกบอลที่ใหญ่กว่าขอบ orbit (เช่น squash ball) กระแทกแล้วขอบไม่แตก แต่ดันลูกตาไปข้างหลัง ทำให้ความดันใน orbit สูงขึ้นทันที",
    "<b>จุดที่แตก</b> แรงระบายออกที่ผนังที่อ่อนที่สุด ในภาพคือ floor แตกลงไปใน maxillary antrum เรียกว่า blow-out fracture",
    "<b>สิ่งที่ร่วงลงไป</b> orbital fat และ inferior rectus (กับ inferior oblique) อาจไส้เลื่อนหรือติดอยู่ในรอยแตก",
    "<b>ดูภาพอะไร</b> ขอบมักไม่แตก รอยแตกอยู่ที่ผนังด้านหลังขอบ จึงดูได้ดีใน coronal CT ที่เห็น floor เป็นเส้นแนวนอน"
  ],
  "O-C4": [
    "<b>ฟิล์มนี้คืออะไร</b> occipitofrontal view มอง orbit ทั้งสองข้างจากด้านหน้า เห็นขอบและปีก sphenoid ในวง",
    "<b>ขอบ</b> superior orbital margin ด้านบน และ inferior orbital margin ด้านล่าง",
    "<b>ในวง orbit</b> lesser wing of sphenoid อยู่บน greater wing อยู่ล่างและออกด้านนอก ช่องดำระหว่างสองปีกคือ superior orbital fissure",
    "<b>ด้านใน</b> lamina papyracea เป็นเส้นบางๆ ข้างๆ มี ethmoid air cell และตรงกลางเป็น nasal septum",
    "<b>เชื่อมกับการ์ดก่อน</b> ทุกชื่อในฟิล์มนี้คือผนังและปีกที่เรียนในตาราง 7 กระดูก"
  ],
  "O-C5": [
    "<b>วิธีอ่าน</b> แถวบนเป็น soft tissue window เห็นกล้ามเนื้อ แถวล่างเป็น bone window ระดับเดียวกัน เห็นรูและช่องของกระดูก",
    "<b>ระดับบน</b> levator palpebrae superioris กับ superior rectus อยู่บนลูกตา superior oblique อยู่ชิดผนังด้านในบน lacrimal gland อยู่หน้าบนด้านนอก และด้านหลังมี superior orbital fissure ข้าง greater wing",
    "<b>ระดับกลาง</b> medial rectus และ lateral rectus วิ่งชิดผนัง optic nerve sheath complex อยู่ตรงกลางวิ่งไปที่ apex และออกทาง optic canal ผนังด้านในคือ lamina papyracea",
    "<b>ระดับล่าง</b> inferior rectus อยู่ใต้ลูกตา nasolacrimal duct อยู่หน้าผนังด้านใน และ inferior orbital fissure อยู่ด้านหลัง",
    "<b>จำง่าย</b> บน = levator/SR/SO/lacrimal gland · กลาง = MR/LR/optic nerve · ล่าง = IR/nasolacrimal duct/IOF"
  ],
  "O-C6": [
    "<b>ระนาบ coronal</b> ตัดหน้าตรงเหมือนมองเข้าไปในกรวย ระดับลูกตาจะเห็นลูกตากลมตรงกลางและ lacrimal gland ด้าน superolateral",
    "<b>หลังลูกตา</b> กล้ามเนื้อเรียงเป็นวงรอบ optic nerve sheath complex: levator กับ superior rectus ด้านบน, medial rectus ด้านใน, inferior rectus ด้านล่าง, lateral rectus ด้านนอก และ superior oblique ที่มุม superomedial",
    "<b>หลอดเลือดดำ</b> superior ophthalmic vein อยู่ใต้ superior rectus ส่วน inferior ophthalmic vein อยู่ด้านล่างใน fat",
    "<b>Inferior oblique</b> เห็นใต้ลูกตาด้านหน้า (MRI หน้า 36) แต่ไม่อยู่ในวงด้านหลัง",
    "<b>T2 MRI</b> orbital fat สว่าง กล้ามเนื้อเป็นสีเข้ม ใกล้ apex กรวยแคบลงและกล้ามเนื้อเบียดรอบเส้นประสาท"
  ]
});

/* ---------- N · Ear, nose, sinuses ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "N-C1": [
    "<b>Petrous part</b> ส่วนของ temporal bone ที่เป็นพีระมิดอยู่ด้านใน ชื่อมาจากภาษาละติน petrosus แปลว่าเหมือนหิน เพราะแข็งและทึบมาก",
    "<b>สิ่งที่อยู่ข้างใน</b> middle ear, inner ear และ internal auditory canal ภาพฐานกะโหลกในสไลด์วงสัน petrous ไว้ทั้งสองข้าง",
    "<b>External ear</b> ใบหูและช่องหู (ส่วนนอกเป็น cartilage ส่วนในเป็นกระดูก) จนถึงแก้วหู",
    "<b>Middle ear</b> แบ่งตามความสูงเป็น epitympanum (บน), mesotympanum (กลาง) และ hypotympanum (ล่าง)",
    "<b>Inner ear</b> ประกอบด้วย bony labyrinth ด้านนอก, perilymphatic spaces และ membranous labyrinth ด้านใน"
  ],
  "N-C2": [
    "<b>Window</b> อ่านใน bone window อากาศดำ กระดูกหูชั้นในขาว ossicles เป็นจุดขาวเล็กในช่องอากาศสีดำ",
    "<b>ไล่ตามทางเสียง</b> จากด้านนอกเข้าใน: external auditory canal → middle ear (มี malleus อยู่ข้างใน) → inner ear",
    "<b>หูชั้นใน</b> cochlea อยู่ด้านหน้า semicircular canal อยู่ด้านหลัง",
    "<b>Internal auditory canal</b> วิ่งเข้าด้านในจากหูชั้นในไปทาง posterior cranial fossa",
    "<b>ด้านหลัง</b> mastoid antrum เป็นช่องอากาศใหญ่ช่องเดียวต่อจากหูชั้นกลาง และ mastoid air cells เป็นรังผึ้งเล็กๆ รอบๆ"
  ],
  "N-C3": [
    "<b>ขอบเขต</b> nasal cavity ยาวจาก palate (พื้น) ขึ้นไปถึง skull base (หลังคา)",
    "<b>ผนังกั้น</b> nasal septum แบ่งเป็นสองซีก",
    "<b>ทางเข้าออก</b> ด้านหน้าเปิดที่ nares (รูจมูก) ด้านหลังเปิดผ่าน choanae เข้า nasopharynx",
    "<b>ผนังด้านข้าง</b> มี concha 3 อัน คือ superior, middle และ inferior แต่ละอันคลุม meatus ชื่อเดียวกันอยู่ข้างใต้",
    "<b>บนฟิล์ม</b> ใน Caldwell และ Waters nasal cavity เป็นสามเหลี่ยมดำแบ่งครึ่งด้วย septum และใน Caldwell เห็น inferior nasal concha เป็นก้อน soft tissue ยื่นจากผนังด้านข้าง"
  ],
  "N-C4": [
    "<b>Frontal sinus</b> อยู่เหนือ orbit ดูใน Caldwell",
    "<b>Ethmoid sinus</b> อยู่ระหว่าง orbit ดูใน Caldwell เช่นกัน",
    "<b>Maxillary sinus</b> อยู่ใต้ orbit ข้างจมูก ดูดีที่สุดใน Waters (เห็นใน Caldwell ได้ด้วย)",
    "<b>Sphenoid sinus</b> อยู่ใต้ sella กลางกะโหลก ภาพด้านหน้าซ้อนกับกระดูกเยอะ จึงดูใน lateral film",
    "<b>ทำไม Waters</b> การเงยคางทำให้ petrous bone ที่ทึบถูกฉายลงต่ำกว่า maxillary sinus เลยเห็น sinus เป็นสามเหลี่ยมใสใต้ orbit",
    "<b>อ่านโรค</b> sinus ปกติเป็นอากาศสีดำ ถ้าเป็น sinusitis จะขุ่นเป็นสีเทาหรือทึบ หรือเห็น air-fluid level"
  ],
  "N-C5": [
    "<b>ทำไมต้อง coronal CT</b> ระนาบนี้เห็นผนังด้านข้างของจมูกและทางระบายของ sinus ได้ทั้งเส้น",
    "<b>ไล่จากบนลงล่าง</b> ethmoid sinus cells → ethmoidal bulla (air cell ใหญ่ด้านหน้า) → middle nasal concha → inferior nasal concha",
    "<b>Hiatus semilunaris</b> ร่องโค้งใต้ bulla ที่เปิดเข้า middle meatus เป็นทางที่ maxillary sinus ระบายออกมา",
    "<b>Ostiomeatal unit</b> บริเวณนี้ทั้งหมด (วงกลมในภาพ) เป็นทางระบายร่วมของ frontal, anterior ethmoidal และ maxillary sinus",
    "<b>ความหมายทางคลินิก</b> ทางเล็กจุดเดียวรับ 3 sinus ถ้าบวมหรืออุดจะทำให้ทั้งสามระบายไม่ได้ ส่วน posterior ethmoid และ sphenoid ระบายทางอื่น"
  ],
  "N-C6": [
    "<b>Axial ระดับบน</b> frontal sinus อยู่ใน frontal bone เหนือ orbit",
    "<b>Axial ระดับกลาง</b> ethmoid sinus cells อยู่ระหว่าง orbit และ sphenoid sinus อยู่ถัดไปด้านหลังตรงกลาง",
    "<b>Axial ระดับล่าง</b> maxillary sinus ใหญ่สองข้างของ nasal cavity",
    "<b>Sagittal</b> frontal sinus อยู่สูงด้านหน้า sphenoid sinus อยู่ในตัว sphenoid ใต้ sella turcica และอยู่เหนือ nasopharynx",
    "<b>สรุป</b> ยิ่งไปด้านหลังและลงล่าง sinus ยิ่งอยู่ลึก: frontal → ethmoid → sphenoid และ maxillary อยู่ต่ำสุด"
  ]
});

/* ---------- L · Pharynx & larynx ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "L-C1": [
    "<b>นิยาม</b> pharynx เป็นท่อ fibromuscular จาก skull base ลงไปถึงขอบล่างของ cricoid cartilage แล้วต่อเป็น cervical esophagus",
    "<b>Nasopharynx</b> อยู่หลัง nasal cavity จากด้านบนสุดของท่อลงมาถึง soft palate",
    "<b>Oropharynx</b> อยู่หลังช่องปาก จาก soft palate ลงไปถึง vallecula และ base of tongue ซึ่งอยู่ระดับ hyoid bone",
    "<b>Hypopharynx (laryngopharynx)</b> อยู่หลัง larynx จาก pharyngoepiglottic fold ลงไปจนเป็นหลอดอาหาร",
    "<b>ภาพในสไลด์</b> sagittal CT ระบายสีสามส่วน: ม่วง = nasopharynx, เหลือง = oropharynx, ส้มแดง = hypopharynx"
  ],
  "L-C2": [
    "<b>ตำแหน่ง</b> nasopharynx อยู่หลัง nasal cavity จาก skull base ลงไปถึง soft palate",
    "<b>หน้าที่</b> เป็นทางผ่านของอากาศและสารคัดหลั่งจาก nasal cavity",
    "<b>ผนังด้านข้าง หน้า → หลัง</b> Eustachian tube opening → torus tubarius (ปุ่มกระดูกอ่อนหลังรูเปิด) → fossa of Rosenmüller (ซอกด้านหลัง torus)",
    "<b>สิ่งอื่นใน slice</b> pterygoid plate อยู่ด้านข้าง maxillary sinus และ inferior nasal concha อยู่ด้านหน้า nasal septum อยู่ตรงกลาง",
    "<b>จำง่าย</b> รู → ปุ่ม → ซอก (opening, bump, pocket)"
  ],
  "L-C3": [
    "<b>Oropharynx</b> ต่อจาก oral cavity และ nasopharynx จาก soft palate ลงไปถึง vallecula (โคนลิ้น) ระดับ hyoid bone",
    "<b>Vallecula</b> ร่องระหว่าง base of tongue กับ epiglottis เห็นเป็นช่องอากาศเล็กหน้า epiglottis",
    "<b>Hypopharynx</b> ต่อจาก oropharynx อยู่หลัง larynx จาก pharyngoepiglottic fold ลงไปถึง cervical esophagus ที่ขอบล่างของ cricoid",
    "<b>Pyriform sinus</b> ซอก anterolateral ของ hypopharynx อยู่สองข้างของ larynx",
    "<b>ภาพ</b> sagittal CT ระบายสี oropharynx (มี vallecula ชี้) และ hypopharynx (ใต้ epiglottis)"
  ],
  "L-C4": [
    "<b>ขอบเขต</b> larynx เริ่มที่ epiglottis และสิ้นสุดที่ขอบล่างของ cricoid cartilage ต่อลงไปเป็น trachea",
    "<b>Supraglottis</b> จากด้านบนลงถึงระดับ arytenoid เหนือ vocal cord มี epiglottis, vestibular (false) fold และ laryngeal ventricle",
    "<b>Glottis</b> คือ vocal fold และช่องระหว่าง vocal fold",
    "<b>Subglottis</b> จากใต้ vocal cord ลงไปถึง trachea อยู่ในวง cricoid",
    "<b>บน CT</b> ไล่จากบนลงล่าง false fold → ventricle (ร่องอากาศบาง) → true fold",
    "<b>จุดหลอก</b> pyriform recess ใน coronal CT อยู่ข้าง larynx แต่เป็นส่วนของ hypopharynx"
  ],
  "L-C5": [
    "<b>หลักการ</b> อากาศเป็นสีดำ ทางเดินหายใจจึงเห็นเป็นแถบดำหน้ากระดูกสันหลังส่วนคอ",
    "<b>ส่วนบน</b> nasopharynx หลังจมูก soft palate ห้อยลงไปด้านหลัง ต่อด้วย oropharynx หลังลิ้น",
    "<b>ส่วนกลาง</b> vallecula เป็นช่องอากาศเล็กหน้า epiglottis และ epiglottis เป็นแผ่นโค้ง",
    "<b>ส่วนล่าง</b> hypopharynx หลัง larynx ตามด้วย larynx และ trachea",
    "<b>จุดอ้างอิง</b> hyoid bone อยู่ด้านหน้าประมาณระดับ vallecula"
  ]
});

/* ---------- C · Chest imaging ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "C-C1": [
    "<b>หลักการ</b> X-ray ถูกดูดกลืนมากหรือน้อยตามความหนาแน่น ภาพ radiograph จึงแยกได้แค่ 5 density หลัก",
    "<b>ลำดับ</b> จากขาวไปดำ: metal → bone → soft tissue → fat → air",
    "<b>บทบาทของ CXR</b> เป็นการตรวจเบื้องต้นของโรคระบบหายใจที่พบบ่อย ดูได้ทั้งปอด mediastinum และ bony thorax",
    "<b>ขอบเกิดได้อย่างไร</b> เราเห็นขอบหัวใจเพราะหัวใจ (soft tissue) อยู่ติดกับปอดที่มีอากาศ ถ้าสองสิ่งที่ติดกันมี density เท่ากัน ขอบจะหายไป",
    "<b>เชื่อมกับเรื่องต่อไป</b> หลักข้อนี้คือพื้นฐานของ silhouette sign ที่จะใช้บอกตำแหน่ง lobe ใน section P"
  ],
  "C-C2": [
    "<b>CT เพิ่มอะไร</b> ภาพตัดขวาง ไม่มีโครงสร้างซ้อน spatial resolution ดีขึ้น และใช้ contrast ดูหลอดเลือดได้",
    "<b>ใช้เมื่อไร</b> ประเมิน consolidation, ก้อนในปอด/hilum/mediastinum, วินิจฉัยและ staging lung cancer และ characterization ของ interstitial lung disease",
    "<b>Lung window</b> WL −500, WW 1500 → แสดง −1250 ถึง +250 HU เห็นหลอดลมและหลอดเลือดเล็กในปอด",
    "<b>Bone window</b> WL 500, WW 2000 → −500 ถึง +1500 HU",
    "<b>Mediastinum window</b> WL 50, WW 500 → −200 ถึง +300 HU แยกไขมัน หลอดเลือด และต่อมน้ำเหลืองใน mediastinum",
    "<b>สูตร</b> ช่วงที่แสดง = level ± width/2 ค่าต่ำกว่าช่วงเป็นดำ สูงกว่าช่วงเป็นขาว"
  ],
  "C-C3": [
    "<b>MRI</b> resolution ดีและแยก soft tissue ได้ดีกว่า",
    "<b>ใช้กับ</b> หัวใจ, mediastinum, hilum, diaphragm และ chest wall",
    "<b>ข้อจำกัด</b> ประเมิน lung parenchyma ได้จำกัด เพราะปอดเป็นอากาศเกือบทั้งหมด",
    "<b>เลือกเครื่องมือ</b> ดูภาพรวมครั้งแรก → CXR · consolidation, mass, มะเร็งปอด, ILD → CT · soft tissue ของหัวใจ mediastinum ผนังอก → MRI"
  ],
  "C-C4": [
    "<b>ชื่อ PA</b> beam เข้าทางหลัง (posterior) ออกทางหน้า (anterior) ผู้ป่วยยืนตรง เอาหน้าอกแนบ image receptor",
    "<b>ศีรษะ</b> ตั้งตรง วางคางบนขอบ grid",
    "<b>ข้อศอก</b> หมุนไปด้านหน้า (มือเท้าเอว) เพื่อดึง scapula ออกด้านข้าง ไม่ให้ซ้อนกับปอด",
    "<b>หายใจ</b> ถ่ายตอนหายใจเข้าเต็มที่ เพื่อให้ปอดขยายและ diaphragm ลดต่ำ",
    "<b>ข้อดีต่อหัวใจ</b> หัวใจอยู่ใกล้ receptor จึงขยายน้อยที่สุด PA จึงเป็นฟิล์มที่ใช้ประเมินขนาดหัวใจ"
  ],
  "C-C5": [
    "<b>Lateral</b> เอาผนังอกด้านข้างแนบ receptor (ในสไลด์คือด้านซ้าย มี marker L) beam ผ่านจากขวาไปซ้าย และยกแขนขึ้นเหนือศีรษะ",
    "<b>ประโยชน์ของ lateral</b> เห็นสิ่งที่ซ่อนหลังหัวใจหรือใต้ diaphragm และบอกว่ารอยโรคอยู่หน้าหรือหลัง",
    "<b>AP</b> ผู้ป่วยนอนหงายหรือนั่ง beam จากหน้าไปหลัง ใช้ในทารก เด็กเล็ก ผู้ป่วยอ่อนแรง ไม่คงที่ หรือติดเตียง",
    "<b>ผลของ AP</b> หัวใจและ mediastinum อยู่ด้านหน้า ไกลจาก receptor ที่อยู่ด้านหลัง จึงถูกขยาย",
    "<b>จุดหลอก</b> หัวใจดูโตใน AP อาจเป็นแค่การขยายจากเทคนิค ต้องประเมินขนาดจาก PA"
  ]
});

/* ---------- A · Airways & lobes ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "A-C1": [
    "<b>ตำแหน่ง</b> trachea เป็นโครงสร้างกลางลำตัว เริ่มที่ subglottic larynx ประมาณ 2 cm ใต้ vocal cord และสิ้นสุดที่ carina",
    "<b>ขนาด</b> ยาวเฉลี่ย 12 cm (10–13 cm) เส้นผ่านศูนย์กลางแนวขวาง หญิง 10–21 mm ชาย 13–25 mm แนวหน้าหลัง หญิง 10–23 mm ชาย 13–27 mm",
    "<b>Tracheal ring</b> กระดูกอ่อนรูปตัว C 16–20 วง ไม่ครบรอบ ครอบด้านหน้า 2/3 ของเส้นรอบวง",
    "<b>Membranous portion</b> ด้านหลัง 1/3 เป็นผนังอ่อนที่ติดกับหลอดอาหาร",
    "<b>บนภาพ</b> CXR เห็นเป็นแถบอากาศดำแนวตั้งซ้อนกระดูกสันหลังส่วนบน CT เห็นเป็นวงดำกลมด้านหน้าของ mediastinum ส่วนบน"
  ],
  "A-C2": [
    "<b>Carina</b> จุดแยกของ trachea มุมปกติประมาณ 60° (50–75°)",
    "<b>Right main bronchus</b> สั้นกว่าและตั้งชันกว่า แยก right upper lobar bronchus ออกไปเร็ว แล้วส่วนที่เหลือเรียกว่า bronchus intermedius",
    "<b>Left main bronchus</b> ยาวกว่าและแนวราบกว่า แยกเป็น left upper และ left lower lobar bronchus",
    "<b>ลำดับแขนง</b> lobar → segmental bronchi → bronchioles → terminal bronchioles → acinus",
    "<b>ความหมายทางคลินิก</b> สิ่งแปลกปลอมที่สำลักมักลงข้างขวาที่ชันกว่า และในท่าตั้งตรงมักไปที่ right lower lobe"
  ],
  "A-C3": [
    "<b>ปอดขวา</b> 3 lobe (upper, middle, lower) แบ่งด้วย major (oblique) และ minor (horizontal) fissure มี 10 segment",
    "<b>ปอดซ้าย</b> 2 lobe (upper, lower) แบ่งด้วย oblique fissure มี 8 segment",
    "<b>การซ้อนบน PA</b> lower lobe ขึ้นไปสูงทางด้านหลัง จึงซ้อนอยู่หลัง middle และ upper lobe ภาพ PA เป็นภาพแบน บอกไม่ได้ว่าเงาอยู่หน้าหรือหลัง",
    "<b>Lateral ช่วยแยก</b> ใน lateral RML เป็นลิ่มด้านหน้าล่างระหว่าง minor และ major fissure ส่วน RLL อยู่ด้านหลังทั้งหมด",
    "<b>ภาพในสไลด์</b> การระบายสี lobe บน PA ให้เห็นว่าสีซ้อนกันตรงไหน ซึ่งเป็นเหตุผลที่ต้องดูสองท่า"
  ],
  "A-C4": [
    "<b>Sagittal ขวา</b> RUL อยู่ด้านบน RML เป็นลิ่มด้านหน้าลงไปถึงด้านหน้าของ diaphragm และ RLL กินพื้นที่ด้านหลังและฐานด้านหลังทั้งหมด",
    "<b>Sagittal ซ้าย</b> LUL อยู่ด้านหน้าและบน LLL อยู่ด้านหลัง oblique fissure ลาดจากบนด้านหลังลงล่างด้านหน้า",
    "<b>Coronal</b> slice ด้านหน้า RML ชิดขอบหัวใจขวา และ lower lobe วางอยู่บน hemidiaphragm",
    "<b>หลักจำ</b> lower lobe ค่อนไปด้านหลัง ส่วน middle lobe และ lingula ค่อนไปด้านหน้า",
    "<b>เชื่อมกับ silhouette sign</b> ตำแหน่งหน้า-หลังนี้บอกว่ารอยโรคใน lobe ไหนจะลบขอบอะไรบน CXR"
  ],
  "A-C5": [
    "<b>Fissure คืออะไร</b> แนวที่ visceral pleura ของสอง lobe มาชนกัน ปกติ pleura มองไม่เห็น แต่ fissure เห็นเป็นเส้นบางเมื่อแนวของมันขนานกับลำแสง",
    "<b>Right major (oblique)</b> แยก RUL และ RML ด้านหน้าออกจาก RLL ด้านหลัง เห็นใน lateral",
    "<b>Right minor (horizontal)</b> แยก RUL ด้านบนออกจาก RML ด้านล่าง เห็นเป็นเส้นแนวนอนใน PA และ lateral",
    "<b>Left oblique</b> แยก LUL ออกจาก LLL เห็นใน lateral",
    "<b>บน axial CT</b> major fissure เป็นเส้นเฉียงบาง ส่วน minor fissure อยู่เกือบขนานกับระนาบ scan จึงเห็นเป็นเส้นโค้งหน้า major fissure โดยมี RML อยู่ระหว่างกลาง"
  ]
});

/* ---------- P · Silhouette & pleura ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "P-C1": [
    "<b>หลักการ</b> ขอบของโครงสร้าง soft tissue เช่น หัวใจ aorta diaphragm มองเห็นได้เพราะมีปอดที่มีอากาศอยู่ติด",
    "<b>เมื่อขอบหาย</b> ถ้ามีสิ่งที่เป็น soft tissue density (consolidation, ก้อน, น้ำ) มาติดกับโครงสร้างนั้น สอง density เท่ากัน ขอบจึงหายไป",
    "<b>นำไปใช้</b> ขอบไหนหายบอกได้ว่ารอยโรคอยู่ใน lobe ที่สัมผัสขอบนั้น",
    "<b>ถ้าแค่ซ้อน</b> รอยโรคที่อยู่หน้าหรือหลังโครงสร้าง (ไม่ได้สัมผัส) ซ้อนกันบนฟิล์มได้ แต่ขอบยังคมอยู่",
    "<b>ตัวอย่างในสไลด์</b> ก้อนที่ทำให้ขอบหัวใจขวาหายอยู่ใน RML ซึ่ง sagittal CT แสดงว่าอยู่ด้านหน้าติดหัวใจ ส่วนก้อนที่ทำให้ left hemidiaphragm หายอยู่ใน LLL"
  ],
  "P-C2": [
    "<b>ด้านขวาบน</b> right paratracheal stripe และ azygos arch อยู่ติด RUL",
    "<b>ด้านขวากลางและล่าง</b> right heart border อยู่ติด RML ส่วน right hemidiaphragm อยู่ติด RLL",
    "<b>ด้านซ้ายบน</b> aortic arch (aortic knob) อยู่ติด LUL",
    "<b>ด้านซ้ายกลางและล่าง</b> left heart border อยู่ติด lingula (ส่วนหน้าของ LUL) ส่วน descending aorta และ left hemidiaphragm อยู่ติด LLL",
    "<b>รูปแบบ</b> lobe บนคุมขอบ mediastinum ด้านบน, middle lobe และ lingula คุมขอบหัวใจ, lobe ล่างคุม hemidiaphragm (ซ้ายมี descending aorta เพิ่ม)"
  ],
  "P-C3": [
    "<b>RUL pneumonia</b> right upper zone ทึบ right paratracheal stripe หาย และขอบล่างของเงาเป็นเส้นตรงตาม minor fissure",
    "<b>RML pneumonia</b> right lower zone ขุ่น ขอบหัวใจขวาหาย แต่ right hemidiaphragm ยังเห็น ใน lateral เห็นเป็นลิ่มด้านหน้าล่าง",
    "<b>LLL pneumonia</b> เงาอยู่หลังหัวใจ left hemidiaphragm หาย แต่ขอบหัวใจซ้ายยังคม",
    "<b>วิธีอ่าน</b> ถามสองข้อเสมอ: ขอบไหนหาย และขอบไหนยังอยู่ ทั้งสองคำตอบช่วยกันชี้ lobe"
  ],
  "P-C4": [
    "<b>สองชั้น</b> pleura เป็นเยื่อบางต่อเนื่อง parietal pleura บุผนังทรวงอก visceral pleura หุ้มปอด",
    "<b>Pleural cavity</b> เป็น potential space ระหว่างสองชั้น ปกติมีของเหลวบางมาก",
    "<b>บนภาพ</b> pleura ปกติมองไม่เห็นทั้งใน CXR และ CT เส้นที่เห็นได้คือ fissure ที่ visceral pleura สอง lobe มาชนกัน",
    "<b>เมื่อมีของเข้าไป</b> น้ำเข้าไป → pleural effusion อากาศเข้าไป → pneumothorax"
  ],
  "P-C5": [
    "<b>Pleural effusion</b> ของเหลวสะสมผิดปกติใน pleural space ในท่ายืนน้ำไหลลงต่ำสุด",
    "<b>สัญญาณแรก</b> มุม costophrenic ทื่อลง (blunting) และเพราะน้ำเป็น soft tissue density จึงลบขอบ hemidiaphragm ที่มันวางอยู่",
    "<b>Pneumothorax</b> อากาศใน pleural space ปอดหดตัวออกจากผนังอก",
    "<b>สัญญาณ</b> เห็นเส้น visceral pleura บางๆ ที่ขอบปอด และไม่มี lung marking ด้านนอกเส้น",
    "<b>แยกสองโรค</b> น้ำ = ขาวที่ฐาน, อากาศ = ดำไม่มีลายปอดที่ขอบ"
  ],
  "P-C6": [
    "<b>คืออะไร</b> การหนาตัวและมี calcification ของ parietal pleura",
    "<b>สาเหตุ</b> การสูดดม asbestos (ใยหิน) เช่นงานอู่ต่อเรือ งานฉนวนกันความร้อน",
    "<b>บนฟิล์ม</b> เห็นแบบหันหน้าเป็นเงาไม่สม่ำเสมอซ้อนบนปอด และแบบเห็นด้านข้างเป็นเส้นหนาทึบตามผนังอกและ diaphragm",
    "<b>ความหมาย</b> plaque เป็นเครื่องหมายว่าเคยสัมผัส asbestos ไม่ใช่ตัวโรคในเนื้อปอด"
  ]
});

/* ---------- M · Mediastinum & chest wall ---------- */
Object.assign(window.THAI_EXPLAIN, {
  "M-C1": [
    "<b>Hilum คืออะไร</b> รากของปอด เป็นจุดที่ท่อทุกอย่างเข้าออกจากปอด",
    "<b>ส่วนประกอบ</b> pulmonary artery, pulmonary vein, bronchus และ lymph nodes",
    "<b>ระดับ</b> ปกติ hilum ซ้ายอยู่สูงกว่าขวา (สีแดงสูงกว่าสีฟ้าในภาพ) เพราะ left pulmonary artery พาดข้ามหลอดลมซ้าย",
    "<b>อ่านฟิล์ม</b> เงา hilum ส่วนใหญ่เป็นหลอดเลือด ถ้า hilum โตหรือทึบผิดปกติ ต้องคิดถึงหลอดเลือดใหญ่หรือต่อมน้ำเหลือง และใช้ CT แยก"
  ],
  "M-C2": [
    "<b>นิยาม</b> ช่องระหว่างปอดสองข้างและ pleural space",
    "<b>ขอบเขต</b> หน้าคือ sternum หลังคือ thoracic spine บนคือ thoracic inlet ล่างคือ diaphragm",
    "<b>การแบ่งแบบกายวิภาค</b> plane of Ludwig (เส้นเหลืองจาก sternal angle ไปทางหลังประมาณระดับ T4–T5) แบ่ง superior กับ inferior mediastinum",
    "<b>Inferior mediastinum</b> แบ่งต่อเป็น anterior, middle และ posterior",
    "<b>หมายเหตุ</b> การ์ดถัดไปใช้ scheme ของรังสีวิทยาที่ไม่มีช่อง superior อย่าสับสนสองระบบ"
  ],
  "M-C3": [
    "<b>ทำไมต้อง scheme ใหม่</b> มีหลายระบบ แต่ modified anatomic method ใช้สร้าง differential diagnosis ของก้อนบนภาพได้ง่าย",
    "<b>Anterior</b> ด้านหน้าของ pericardium, ascending aorta และ SVC ถึง sternum มี thymus, lymph node, ไขมัน และ internal mammary vessels",
    "<b>Middle</b> จาก pericardium ด้านหน้าถึง pericardium และผนังหลังของ trachea มีหัวใจ, ascending aorta, aortic arch, SVC, IVC, brachiocephalic และ pulmonary vessels, trachea และ main bronchi, lymph node และเส้นประสาท phrenic, vagus, left recurrent laryngeal",
    "<b>Posterior</b> หลังหัวใจและข้างกระดูกสันหลัง มี esophagus, descending aorta, azygos และ hemiazygos vein, thoracic duct, vagus และ splanchnic nerve, lymph node และไขมัน",
    "<b>จุดหลอก</b> scheme นี้ไม่มีช่อง superior: aortic arch และ trachea จึงนับเป็น middle"
  ],
  "M-C4": [
    "<b>หลักคิด</b> ระบุ compartment ก่อน แล้วไล่ list ของช่องนั้นเป็น differential diagnosis",
    "<b>Anterior</b> กลุ่ม prevascular: lymphadenopathy, retrosternal goiter, thymic lesion (thymoma, carcinoma, hyperplasia, cyst, thymolipoma), germ cell tumor · กลุ่มบน diaphragm หน้าหัวใจ: epicardial fat pad, diaphragmatic hump, Morgagni hernia, pleuropericardial cyst, lymph node",
    "<b>Middle</b> lymphadenopathy, aortic arch aneurysm, enlarged pulmonary artery, foregut duplication cyst, pericardial cyst, tracheal lesion",
    "<b>Posterior</b> esophageal lesion, hiatal hernia, foregut duplication cyst, descending aortic aneurysm, neurogenic tumor, paraspinal abscess, lateral meningocele, extramedullary hematopoiesis",
    "<b>หมายเหตุ</b> บาง scheme จัด pleuropericardial cyst ไว้ใน middle mediastinum"
  ],
  "M-C5": [
    "<b>หน้าที่</b> diaphragm แบ่งทรวงอกออกจากช่องท้อง",
    "<b>ระดับ</b> right hemidiaphragm มักสูงกว่าซ้าย 1–1.5 cm",
    "<b>Caval opening (T8)</b> IVC และ right phrenic nerve",
    "<b>Esophageal opening (T10)</b> esophagus, left gastric artery และ vein, vagus",
    "<b>Aortic opening (T12)</b> aorta, thoracic duct และ azygos vein",
    "<b>Hiatal hernia</b> อวัยวะในช่องท้องเลื่อนผ่าน esophageal hiatus ขึ้นมาในทรวงอก บน CXR เห็นเป็นก้อนหลังหัวใจ อาจมีอากาศอยู่ข้างใน"
  ],
  "M-C6": [
    "<b>องค์ประกอบ</b> ซี่โครง ช่องระหว่างซี่โครง sternum และ thoracic spine",
    "<b>กล้ามเนื้อ intercostal</b> สามชั้นจากนอกเข้าใน: external, internal, innermost",
    "<b>Neurovascular bundle</b> เรียงจากบนลงล่างเป็น vein, artery, nerve (V-A-N) อยู่ในร่องใต้ซี่โครง การแทงเข็มเข้าช่องอกจึงแทงชิดขอบบนของซี่โครงล่าง",
    "<b>Sternum</b> จากบนลงล่าง manubrium → body → xiphoid process เห็นชัดใน sagittal CT",
    "<b>บนฟิล์ม</b> lateral เห็น sternum ด้านหน้าและ thoracic spine ด้านหลัง ส่วน PA เห็นซี่โครงโค้งพาดผ่านปอด"
  ]
});
