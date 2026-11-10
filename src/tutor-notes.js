/* Tutor-only notes for each concept card, in Thai: knowledge beyond the slide that helps explain it.
   b = 3-5 short bullets (HTML allowed; write < as &lt;), d = optional plain-text diagram (English + ASCII so the columns line up in monospace).
   Items marked "อาจเป็นเพราะ" are candidate explanations, not settled answers. Textbook-level facts only. */
window.TUTOR_NOTES = window.TUTOR_NOTES || {};

/* ---------- H · Head & neck imaging ---------- */
Object.assign(window.TUTOR_NOTES, {
  "H-C1": { b: [
    "Radiograph = เงาของ attenuation รวมตามแนวลำแสง → แยกได้แค่ 5 densities: air, fat, soft tissue, bone, metal (เจออีกใน section C)",
    "Trauma ปัจจุบันใช้ CT head แทน skull film แทบทั้งหมด เพราะสิ่งที่สำคัญคือ <b>brain injury</b> ซึ่ง plain film มองไม่เห็น",
    "Foreign body ที่ทึบรังสี (โลหะ) เห็นใน plain film ได้ดี; ไม้หรือพลาสติกมักมองไม่เห็น",
    "Metabolic bone ที่คลาสสิก: hyperparathyroidism → salt-and-pepper skull, multiple myeloma → punched-out lesions, Paget disease → cotton-wool skull"
  ] },
  "H-C2": { b: [
    "มุมตามตำรา positioning: Caldwell = PA axial, beam 15° caudad to OML · Towne = AP axial, 30° caudad to OML (37° to IOML) · Waters = parietoacanthial, OML 37° to detector",
    "Caldwell: petrous ridges ถูกฉายลงไปอยู่ส่วนล่างของ orbit → เห็น orbital rim และ frontal sinus ชัด",
    "Waters: petrous ridges อยู่ <b>ใต้</b> maxillary sinus → เห็น maxillary sinus ดีที่สุด; ท่ายืนช่วยให้เห็น air-fluid level ใน sinusitis",
    "Towne: dorsum sellae ฉายอยู่ใน foramen magnum → ใช้ดู occipital fracture และ condyle ของ mandible",
    "Mnemonic: <b>C-T-W = 15-30-45</b> เรียงตามตัวอักษรและมุม"
  ], d: [
    "View      Beam    Target",
    "Caldwell  15 deg  frontal sinus, orbit",
    "Towne     30 deg  occiput, mandible",
    "Waters    45 deg  face, maxillary sinus"
  ] },
  "H-C3": { b: [
    "CT number (Hounsfield unit): น้ำ = 0, อากาศ = −1000, cortical bone ≈ +1000 ขึ้นไป → ช่วงกว้างมาก จึงต้องมี window",
    "Contrast ของ CT คือ <b>iodinated contrast</b> → ระวัง allergy และ contrast-induced nephropathy",
    "รังสีของ CT head ≈ 2 mSv เทียบ PA CXR ≈ 0.02 mSv (ราว 100 เท่า) และเด็กไวต่อรังสีมากกว่าผู้ใหญ่",
    "Temporal bone CT ใช้ slice บางมาก (&lt;1 mm) เพื่อให้เห็น ossicles และ cochlea"
  ] },
  "H-C4": { b: [
    "Window <b>level</b> = ค่ากลาง, <b>width</b> = ความกว้างของช่วง; ค่าที่ต่ำกว่าช่วง → ดำทั้งหมด, สูงกว่า → ขาวทั้งหมด",
    "ค่าที่ใช้บ่อยกับศีรษะ: brain window ≈ W80/L40, bone window ≈ W2000+/L500 (ค่า window ของทรวงอกอยู่ในสไลด์ section C)",
    "MPR คมเมื่อสแกนด้วย slice บาง (isotropic voxel) → ระนาบใหม่ไม่เป็นขั้นบันได",
    "VRT ใช้ดูภาพรวมและวางแผนผ่าตัด; fracture เล็กยังต้องอ่านจาก axial/MPR ใน bone window"
  ], d: [
    "-1000 HU ............ 0 ............ +1000 HU",
    " air        fat   water  soft      bone",
    " brain window:         |--|         (narrow)",
    " bone window:   |----------------------|  (wide)"
  ] },
  "H-C5": { b: [
    "T1: fat สว่าง น้ำมืด → ดู anatomy · T2: น้ำสว่าง → ดู edema/fluid (ภาพ orbit ใน section O เป็น T2: vitreous สว่าง)",
    "Flow void: เลือดที่ไหลเร็วเป็นสีดำใน spin-echo → เห็นหลอดเลือดโดยไม่ฉีดสี; MRA แบบ time-of-flight ก็อาศัย flow",
    "ข้อห้ามที่พบในคลินิก: pacemaker รุ่นเก่า, cochlear implant, เศษโลหะในลูกตา (ช่างเชื่อม), aneurysm clip บางชนิด",
    "Contrast ของ MRI คือ <b>gadolinium</b> ไม่ใช่ iodine; ระวังใน renal failure (NSF)"
  ] },
  "H-C6": { b: [
    "Logic: bone/air → CT · soft tissue/nerve → MRI · ดูคร่าวๆ ราคาถูก → plain film",
    "Acute head trauma ทำ CT ก่อนเพราะเร็วและเห็นทั้ง brain และกระดูก; MRI นานเกินไปสำหรับผู้ป่วยที่ไม่คงที่",
    "Sinusitis ทั่วไปวินิจฉัยทางคลินิก; CT sinus ใช้เมื่อเรื้อรัง วางแผน FESS หรือสงสัยภาวะแทรกซ้อน",
    "ผู้ป่วยกลัวที่แคบอาจใช้ยาคลายกังวลหรือ open MRI ได้ แต่ข้อสอบให้ถือเป็น contraindication ตามสไลด์"
  ], d: [
    "target = bone / air ?  --yes-->  CT",
    "target = soft tissue / nerve -->  MRI",
    "   pacemaker / implant / claustrophobia --> CT"
  ] }
});

/* ---------- S · Skull ---------- */
Object.assign(window.TUTOR_NOTES, {
  "S-C1": { b: [
    "Cranial bones จริงมี 8 ชิ้น (frontal 1, parietal 2, temporal 2, occipital 1, sphenoid 1, ethmoid 1) สไลด์นับตามชนิดจึงเหลือ 6",
    "Facial bones ตามตำรามี 14 ชิ้น: เป็นคู่ทั้งหมด ยกเว้น vomer และ mandible",
    "Mnemonic cranial: <b>PEST OF 6</b> = Parietal, Ethmoid, Sphenoid, Temporal, Occipital, Frontal",
    "Mnemonic facial: <b>Virgil Can Not Make My Pet Zebra Laugh</b> = Vomer, inferior Conchae, Nasal, Maxilla, Mandible, Palatine, Zygomatic, Lacrimal"
  ] },
  "S-C2": { b: [
    "Greater wing บน AP/PA เรียกว่า <b>innominate line</b> (oblique orbital line) ซึ่งหายไปได้เมื่อ tumor ทำลายกระดูกใน middle cranial fossa",
    "Lesser wing เป็นหลังคาส่วนหลังของ orbit และมี optic canal อยู่ที่โคน",
    "Crista galli เป็นจุดยึดของ falx cerebri",
    "เชื่อมกับ section O: greater wing = lateral wall, lesser wing = apex (optic canal)"
  ] },
  "S-C3": { b: [
    "ลำดับการเจริญของ sinus: maxillary และ ethmoid มีตั้งแต่เกิด, sphenoid มาในวัยเด็ก, frontal เห็นชัดหลังอายุราว 6 ปี → ฟิล์มเด็กเล็กไม่เห็น frontal sinus เป็นเรื่องปกติ",
    "Lateral skull เป็น view ที่ดีที่สุดสำหรับ sella และ sphenoid sinus; air-fluid level ใน sphenoid sinus หลัง trauma ชวนคิดถึง skull base fracture",
    "Clivus อยู่หน้า brainstem; tumor ที่คลาสสิกของ clivus คือ chordoma",
    "Mastoid air cells ขุ่นเมื่อมี mastoiditis"
  ] },
  "S-C4": { b: [
    "Sella ขยายหรือพื้นสึก (ballooned sella, double floor) ชวนคิดถึง pituitary macroadenoma",
    "Dorsum sellae บางหรือหาย (erosion) พบใน raised ICP เรื้อรัง",
    "Transsphenoidal surgery เข้าทาง sphenoid sinus เพราะอยู่ใต้ sella พอดี",
    "Anterior clinoid อยู่ชิด optic canal และ internal carotid artery"
  ], d: [
    "  ant. clinoid            post. clinoid",
    "        \\                     /",
    "  tuberculum --[ sella ]-- dorsum",
    "                  |            \\",
    "          sphenoid sinus      clivus"
  ] }
});

/* ---------- O · Orbit ---------- */
Object.assign(window.TUTOR_NOTES, {
  "O-C1": { b: [
    "Orbital cellulitis มักลามมาจาก <b>ethmoid sinusitis</b> ผ่าน lamina papyracea โดยเฉพาะในเด็ก → CT with contrast ดู subperiosteal abscess",
    "Medial wall ขนานกัน แต่ lateral wall กางออก ~90° ต่อกัน → แกน orbit จึงเอียงออก ส่วนแกนการมอง (visual axis) มองตรงไปข้างหน้า",
    "ความไม่ตรงกันของแกน orbit กับแกนการมอง คือเหตุผลที่ superior/inferior rectus มี action รองเป็น adduction และ intorsion/extorsion"
  ], d: [
    "        anterior cranial fossa",
    "                 |",
    "ethmoid / nose - ORBIT - (temporal fossa)",
    "                 |",
    "           maxillary sinus"
  ] },
  "O-C2": { b: [
    "Mnemonic 7 bones: <b>Many Friendly Zebras Enjoy Lazy Summer Picnics</b> = Maxilla, Frontal, Zygomatic, Ethmoid, Lacrimal, Sphenoid, Palatine",
    "SOF (ระหว่าง lesser และ greater wing): CN III, IV, V1, VI และ superior ophthalmic vein → SOF syndrome = ophthalmoplegia + V1 numbness",
    "Optic canal: CN II + ophthalmic artery",
    "IOF: infraorbital nerve (V2) วิ่งต่อเป็น infraorbital groove/canal ใน floor → floor fracture ทำให้แก้มชา"
  ] },
  "O-C3": { b: [
    "อาการคลาสสิก: diplopia เมื่อมองขึ้น (inferior rectus ติด), enophthalmos, ชาแก้มและริมฝีปากบน (infraorbital nerve)",
    "ในเด็ก กระดูกยืดหยุ่น → <b>trapdoor fracture</b> หนีบกล้ามเนื้อแน่น อาจเกิด oculocardiac reflex (bradycardia, คลื่นไส้) → ผ่าตัดด่วน",
    "Air ใน orbit (orbital emphysema) หลังสั่งน้ำมูก ชวนคิดถึงรอยแตกที่ต่อกับ sinus",
    "CT coronal ทำให้เห็นก้อน fat/muscle ห้อยลงใน maxillary sinus เป็นรูป <b>teardrop sign</b> (บน Waters view ก็เห็นได้)"
  ] },
  "O-C4": { b: [
    "SOF ที่กว้างผิดปกติข้างเดียว อาจเกิดจากก้อนที่ apex หรือ carotid-cavernous fistula",
    "Greater wing บน PA = innominate line; หายไปเมื่อมี bone destruction",
    "ฟิล์มนี้ (Caldwell-type) เป็นเหตุผลที่สไลด์ H บอกว่า Caldwell ใช้ดู fracture to orbit"
  ] },
  "O-C5": { b: [
    "Rectus ทั้งสี่เกาะที่ <b>annulus of Zinn</b> (common tendinous ring) รอบ optic canal → กรวยกล้ามเนื้อ (muscle cone)",
    "Superior oblique วิ่งไปข้างหน้าผ่าน trochlea แล้วหักมุมกลับไปเกาะลูกตา → กดตาลงและหมุนเข้า (intorsion)",
    "Optic nerve sheath complex = เส้นประสาท + CSF ใน sheath → บวมใน raised ICP (papilledema)",
    "Thyroid eye disease: กล้ามเนื้อโตแต่ <b>tendon ไม่โต</b>; IR > MR > SR > LR (mnemonic <b>I'M SLow</b>)"
  ] },
  "O-C6": { b: [
    "Coronal เป็นระนาบที่ดีที่สุดในการเทียบขนาดกล้ามเนื้อสองข้าง (thyroid eye disease, myositis)",
    "Superior ophthalmic vein โป่งพองชวนคิดถึง <b>carotid-cavernous fistula</b> หรือ cavernous sinus thrombosis",
    "Inferior oblique เกาะที่ floor ด้านหน้าใกล้ nasolacrimal canal จึงไม่อยู่ในกรวย",
    "อ่านเป็นนาฬิกา (ตาขวา มองจากหน้า): 12 = levator/SR, ~1–2 = SO, 3 = MR, 6 = IR, 9 = LR"
  ], d: [
    "            LPS + SR",
    "     LR      (ON)      MR     SO = superomedial",
    "              IR              SOV under SR"
  ] }
});

/* ---------- N · Ear, nose, sinuses ---------- */
Object.assign(window.TUTOR_NOTES, {
  "N-C1": { b: [
    "Epitympanum (attic) มีหัว malleus และ body ของ incus → <b>cholesteatoma</b> มักเริ่มที่ attic และกัดกร่อน scutum",
    "Hypotympanum ต่อกับ Eustachian tube ทางด้านหน้า",
    "Perilymph ~ ECF (Na⁺ สูง) · endolymph ~ ICF (K⁺ สูง) อยู่ใน membranous labyrinth",
    "Petrous apex เป็นที่อยู่ของ Gradenigo syndrome (petrous apicitis: CN VI palsy + V pain + otorrhea)"
  ] },
  "N-C2": { b: [
    "Temporal bone fracture: <b>longitudinal</b> (พบบ่อย, conductive hearing loss, ossicular disruption) vs <b>transverse</b> (ผ่าน otic capsule → SNHL, facial nerve palsy บ่อยกว่า)",
    "IAC มี CN VII และ CN VIII → vestibular schwannoma ขยาย IAC; ต้องใช้ MRI with gadolinium ไม่ใช่ CT",
    "Mastoid antrum เชื่อมกับ middle ear ผ่าน aditus ad antrum → เชื้อลามจาก otitis media เป็น mastoiditis",
    "ภาพ axial มาตรฐาน: ระดับบนเห็น lateral semicircular canal, ระดับล่างเห็น cochlea และ IAC"
  ], d: [
    "lateral                                   medial",
    "EAC -> [TM] -> middle ear -> inner ear -> IAC -> brainstem",
    "                (malleus)    (cochlea front,",
    "                              SCC behind)"
  ] },
  "N-C3": { b: [
    "Inferior meatus รับ <b>nasolacrimal duct</b> · middle meatus รับ OMU (frontal, ant. ethmoid, maxillary) · superior meatus รับ posterior ethmoid · sphenoethmoidal recess รับ sphenoid",
    "Choanal atresia ในทารก: หายใจลำบากขณะดูดนม ดีขึ้นเมื่อร้อง (ทารกหายใจทางจมูกเป็นหลัก) → CT ยืนยัน",
    "Kiesselbach plexus ที่ anterior septum เป็นที่มาของ epistaxis ส่วนใหญ่",
    "Roof (cribriform plate) บาง → fracture ทำให้ CSF rhinorrhea และ anosmia"
  ] },
  "N-C4": { b: [
    "Waters ท่ายืนช่วยให้เห็น <b>air-fluid level</b> ซึ่งบอก acute sinusitis (หรือเลือดหลัง trauma)",
    "Frontal sinus ยังไม่เจริญในเด็กเล็ก (เห็นชัดหลังอายุราว 6 ปี) → อย่าอ่านว่า frontal sinus ทึบในเด็ก",
    "ปัจจุบัน acute sinusitis วินิจฉัยทางคลินิกเป็นหลัก ฟิล์มมีความไวต่ำ; CT ใช้เมื่อเรื้อรัง/มีภาวะแทรกซ้อน/วางแผนผ่าตัด"
  ] },
  "N-C5": { b: [
    "องค์ประกอบ OMU ตามตำรา: maxillary ostium, ethmoid infundibulum, <b>uncinate process</b>, hiatus semilunaris, ethmoid bulla, middle meatus",
    "FESS (functional endoscopic sinus surgery) มุ่งเปิด OMU เพื่อให้ sinus ระบายเองได้",
    "Variant ที่ทำให้ OMU แคบ: concha bullosa (middle concha มีอากาศ), Haller cell, septal deviation",
    "Lamina papyracea อยู่ติด OMU → ระวังทะลุเข้า orbit ระหว่างผ่าตัด"
  ], d: [
    "frontal sinus ----\\",
    "ant. ethmoid  ------> OMU -> middle meatus -> nasal cavity",
    "maxillary sinus --/",
    "post. ethmoid -> superior meatus; sphenoid -> sphenoethmoidal recess"
  ] },
  "N-C6": { b: [
    "Sphenoid sinus ชิดกับ <b>optic nerve, ICA และ cavernous sinus</b> ด้านข้าง → sphenoid sinusitis ลามได้ (cavernous sinus thrombosis)",
    "Sagittal ช่วยวางแผน transsphenoidal pituitary surgery",
    "Frontal sinusitis ลามได้ทั้งเข้า orbit และ anterior cranial fossa; Pott puffy tumor = subperiosteal abscess ของ frontal bone"
  ] }
});

/* ---------- L · Pharynx & larynx ---------- */
Object.assign(window.TUTOR_NOTES, {
  "L-C1": { b: [
    "ระดับกระดูกสันหลังโดยประมาณ: hyoid ≈ C3, thyroid cartilage ≈ C4–5, cricoid ≈ <b>C6</b> (จุดเริ่ม esophagus และ trachea)",
    "Cricopharyngeus ที่ระดับ cricoid เป็นจุดแคบที่สุดของทางเดินอาหารส่วนบน → foreign body ติดบ่อย",
    "Zenker diverticulum เกิดเหนือ cricopharyngeus (Killian dehiscence)"
  ], d: [
    "skull base",
    "   | nasopharynx",
    "soft palate",
    "   | oropharynx",
    "vallecula / hyoid (C3)",
    "   | hypopharynx",
    "lower cricoid (C6) -> esophagus"
  ] },
  "L-C2": { b: [
    "Fossa of Rosenmüller = ตำแหน่งเกิด <b>nasopharyngeal carcinoma</b> ที่พบบ่อยที่สุด (พบมากในเอเชียตะวันออกเฉียงใต้ สัมพันธ์กับ EBV)",
    "ก้อนที่ปิด ET opening → serous otitis media ข้างเดียวในผู้ใหญ่ → ต้องส่องดู nasopharynx เสมอ",
    "Adenoid อยู่ที่ผนังด้านหลังบนของ nasopharynx; ในเด็กโตทำให้หายใจทางปากและ OME"
  ] },
  "L-C3": { b: [
    "Foreign body (ก้างปลา) มักติดที่ <b>vallecula และ pyriform sinus</b>",
    "Pyriform sinus เป็นที่เกิด hypopharyngeal cancer บ่อยที่สุด และมักพบช้า",
    "Lateral neck film ในเด็กที่สงสัย epiglottitis: epiglottis บวม (thumb sign) และ vallecula หายไป (vallecula sign)"
  ] },
  "L-C4": { b: [
    "Glottic cancer พบบ่อยที่สุดและมาเร็วด้วยเสียงแหบ; vocal fold แทบไม่มี lymphatics → แพร่ไปต่อมน้ำเหลืองช้า",
    "Supraglottic cancer มี lymphatics มาก → node metastasis เร็ว",
    "Subglottis เป็นส่วนที่แคบที่สุดในเด็ก (cricoid ring) → croup ให้ <b>steeple sign</b> บน AP neck",
    "Recurrent laryngeal nerve เลี้ยงกล้ามเนื้อ intrinsic เกือบทั้งหมด ยกเว้น cricothyroid (external branch of superior laryngeal n.)"
  ], d: [
    "epiglottis        \\",
    "false fold         > supraglottis",
    "ventricle (air)   /",
    "TRUE vocal fold   = glottis",
    "cricoid ring      = subglottis -> trachea"
  ] },
  "L-C5": { b: [
    "Prevertebral soft tissue ปกติบางมาก (~≤7 mm ที่ C2, ~≤20 mm ที่ C6) หนาขึ้นใน retropharyngeal abscess หรือ hematoma",
    "Thumb sign = epiglottitis · steeple sign (AP) = croup",
    "ฟิล์มนี้ใช้หา radiopaque foreign body ในคอ เช่น กระดูกไก่"
  ] }
});

/* ---------- C · Chest imaging ---------- */
Object.assign(window.TUTOR_NOTES, {
  "C-C1": { b: [
    "Calcified nodule = bone density · pneumothorax = air ที่ไม่มี lung marking · pleural effusion = soft-tissue density",
    "รังสี PA CXR ≈ 0.02 mSv (ประมาณ background radiation 2–3 วัน)",
    "Systematic read: <b>ABCDE</b> = Airway, Bones/soft tissue, Cardiac, Diaphragm, Everything else (lung fields, hila)"
  ] },
  "C-C2": { b: [
    "HRCT (high-resolution CT) = slice บาง + lung window ใช้ characterize ILD (honeycombing, ground-glass)",
    "CT pulmonary angiography (CTPA) = contrast timing ที่ pulmonary artery สำหรับ pulmonary embolism",
    "Low-dose CT ใช้คัดกรองมะเร็งปอดในผู้สูบบุหรี่จัด",
    "ค่าน่าจำ: fat ≈ −100 HU, น้ำ 0, soft tissue +40, เลือดหลังฉีด contrast +150 ขึ้นไป"
  ], d: [
    "-1250 ........ -500 ........ +250   lung (L-500 W1500)",
    "       -200 ..... +50 ..... +300    mediastinum (L50 W500)",
    "  -500 .......... +500 ........ +1500 bone (L500 W2000)"
  ] },
  "C-C3": { b: [
    "Cardiac MRI: วัด ejection fraction, ดู myocardial scar (late gadolinium enhancement)",
    "MRI ช่วยดู chest wall invasion ของ Pancoast tumor และ brachial plexus",
    "PET-CT ใช้ staging lung cancer (ดู metabolic activity) แต่ไม่อยู่ในสไลด์นี้"
  ] },
  "C-C4": { b: [
    "เกณฑ์ inspiration ที่ดี: เห็น <b>anterior rib 6</b> หรือ posterior rib 9–10 ตัดกับ diaphragm กลาง",
    "Rotation: ปลาย medial ของ clavicle ห่าง spinous process เท่ากันสองข้าง",
    "PA ใช้ระยะ source-to-image ~180 cm (6 ft) → ลด magnification",
    "Cardiothoracic ratio &gt; 0.5 ถือว่าหัวใจโต <b>เฉพาะใน PA</b>"
  ] },
  "C-C5": { b: [
    "Left lateral (ด้านซ้ายแนบ receptor) เป็นมาตรฐาน เพื่อให้หัวใจซึ่งค่อนไปทางซ้ายอยู่ใกล้ receptor",
    "ใน lateral: retrosternal และ retrocardiac space ควรใส; spine ควรดำลงเรื่อยๆ จากบนลงล่าง (spine sign ถ้าไม่ดำลง → สงสัยรอยโรค lower lobe)",
    "Supine AP: pleural effusion กระจายไปด้านหลัง เห็นเป็นฝ้าทั่วๆ; pneumothorax ลอยไปด้านหน้า → deep sulcus sign",
    "AP film มักหายใจได้ไม่เต็มที่ → ปอดดูขุ่นและหัวใจดูโตขึ้นอีก"
  ] }
});

/* ---------- A · Airways & lobes ---------- */
Object.assign(window.TUTOR_NOTES, {
  "A-C1": { b: [
    "Trachea เริ่มที่ระดับ C6 (cricoid) และ carina อยู่ประมาณ <b>T4–T5 (sternal angle)</b>",
    "Trachea เบี่ยงไปทางขวาเล็กน้อยที่ระดับ aortic arch เป็นเรื่องปกติ; ถูกดันมาก → คิดถึง tension pneumothorax, ก้อน, หรือ lobar collapse ดึง",
    "Membranous portion ด้านหลังติด esophagus → tracheoesophageal fistula; ในเด็กทำให้สำลัก",
    "ETT ที่ถูกตำแหน่ง: ปลายสูงกว่า carina ~3–5 cm บน CXR"
  ] },
  "A-C2": { b: [
    "Right main bronchus กว้างกว่าด้วย → foreign body และ ETT ที่ลึกเกินลงข้างขวาบ่อย",
    "Aspiration ในท่านอนหงาย: superior segment ของ RLL และ posterior segment ของ RUL",
    "Carinal angle กว้างขึ้นเมื่อ <b>left atrium โต</b> (เช่น mitral stenosis) หรือมี subcarinal lymphadenopathy",
    "Acinus = หน่วยแลกเปลี่ยนก๊าซหลัง terminal bronchiole (respiratory bronchiole → alveolar duct → alveoli)"
  ], d: [
    "            trachea",
    "               |",
    "     R main  carina  L main (longer, flatter)",
    "     /    \\             /      \\",
    "   RUL   b. intermedius  LUL    LLL",
    "           /    \\",
    "         RML    RLL"
  ] },
  "A-C3": { b: [
    "Segment ขวา 10: RUL 3 (apical, posterior, anterior), RML 2 (lateral, medial), RLL 5 (superior + 4 basal)",
    "ซ้าย 8 ตามสไลด์: LUL รวม apicoposterior และมี lingula (superior, inferior); LLL รวม anteromedial basal",
    "Mnemonic ขวา: <b>A PALM Seed Makes Another Little Palm</b> (Apical, Posterior, Anterior, Lateral, Medial, Superior, Medial basal, Anterior basal, Lateral basal, Posterior basal)",
    "Segment มี bronchus และ artery ของตัวเอง → ตัดออกได้ทีละ segment (segmentectomy)"
  ] },
  "A-C4": { b: [
    "Lingula เป็นส่วนของ LUL ที่เทียบเท่า RML ทางซ้าย (อยู่หน้า ชิดขอบหัวใจซ้าย)",
    "RLL superior segment อยู่สูงถึงระดับ hilum ด้านหลัง → pneumonia ที่นี่บน PA ดูเหมือนอยู่ mid zone",
    "ภาพ sagittal ช่วยเข้าใจ silhouette sign: RML ชิดหัวใจด้านหน้า, RLL ชิด diaphragm ด้านหลัง"
  ] },
  "A-C5": { b: [
    "Major fissure เริ่มด้านหลังประมาณระดับ T4–T5 ลาดลงไปถึง diaphragm ด้านหน้า (ประมาณ costochondral junction ที่ 6)",
    "Minor fissure อยู่ประมาณระดับ anterior rib 4 ด้านขวา",
    "Fissure หนาเมื่อมีน้ำ (fluid in fissure) หรือ pleural thickening; fissure ถูกดึงเคลื่อนเป็นสัญญาณของ lobar collapse",
    "Accessory fissure ที่พบบ่อย: azygos fissure (azygos lobe) ด้านขวาบน"
  ] }
});

/* ---------- P · Silhouette & pleura ---------- */
Object.assign(window.TUTOR_NOTES, {
  "P-C1": { b: [
    "Felson อธิบาย silhouette sign (1950): ใช้ได้กับ <b>สองสิ่งที่ density เท่ากันและสัมผัสกัน</b>",
    "Air bronchogram = หลอดลมที่มีอากาศวิ่งผ่าน alveoli ที่เต็มไปด้วยน้ำ → บอกว่ารอยโรคอยู่ <b>ในเนื้อปอด</b> (consolidation) ไม่ใช่ pleura หรือ mediastinum",
    "Cervicothoracic sign: ก้อนเหนือ clavicle ที่ขอบยังคม → อยู่ด้านหลัง (posterior mediastinum) เพราะด้านหน้าไม่มีปอดติด",
    "Lateral film ช่วยยืนยัน: spine sign = กระดูกสันหลังส่วนล่างไม่ดำลงตามปกติ → lower lobe ด้านหลัง"
  ] },
  "P-C2": { b: [
    "Mnemonic: <b>บนคุม mediastinum, กลางคุมหัวใจ, ล่างคุม diaphragm</b> แล้วเพิ่ม descending aorta ให้ LLL",
    "ขอบหัวใจซ้ายหาย + aortic knob หาย = LUL collapse ทั้ง lobe",
    "ทั้ง right heart border และ right hemidiaphragm หาย → RML + RLL (หรือ effusion)"
  ], d: [
    "   RUL: paratracheal stripe, azygos   | LUL: aortic knob",
    "   RML: right heart border            | lingula: left heart border",
    "   RLL: right hemidiaphragm           | LLL: L hemidiaphragm, desc. aorta"
  ] },
  "P-C3": { b: [
    "Lobar pneumonia คลาสสิก: <b>Streptococcus pneumoniae</b>",
    "RUL pneumonia ที่ minor fissure โป่งลง (bulging fissure) คิดถึง Klebsiella",
    "Consolidation ไม่ทำให้ปริมาตรลดมาก ต่างจาก collapse ที่ fissure ถูกดึงเคลื่อน",
    "RLL superior segment pneumonia อาจดูเหมือนอยู่ mid zone บน PA → ดู lateral"
  ] },
  "P-C4": { b: [
    "Parietal pleura มี somatic pain fibers (intercostal, phrenic) → pleuritic chest pain; visceral pleura ไม่เจ็บ",
    "ของเหลวปกติใน pleural space ~ 0.1–0.2 mL/kg",
    "Pleural reflection ล่างสุดอยู่ต่ำกว่าขอบปอด → costodiaphragmatic recess คือที่ที่น้ำไปขังก่อน"
  ] },
  "P-C5": { b: [
    "Upright PA ต้องมีน้ำ ~200–300 mL ก่อนเห็น CP angle ทื่อ; lateral เห็นได้ที่ ~75 mL (posterior CP angle); ultrasound ไวที่สุด",
    "Meniscus sign = ขอบน้ำโค้งขึ้นตามผนังอก",
    "Tension pneumothorax: mediastinum ถูกดันไปอีกข้าง, diaphragm กดต่ำ → วินิจฉัยทางคลินิกและรักษาทันที ไม่ต้องรอฟิล์ม",
    "ระวังสับสน pleural line กับ skin fold หรือขอบ scapula: ใน pneumothorax ไม่มี lung marking นอกเส้น"
  ] },
  "P-C6": { b: [
    "Plaque มักอยู่ที่ <b>diaphragmatic pleura และผนังอกด้านข้างระดับซี่โครง 6–9</b>; ส่วน apex และ costophrenic angle มักว่าง",
    "รูปแบบแบนหันหน้า: holly-leaf appearance",
    "Asbestos ยังทำให้เกิด asbestosis (lower lobe fibrosis), mesothelioma และ lung cancer (เสริมฤทธิ์กับบุหรี่)"
  ] }
});

/* ---------- M · Mediastinum & chest wall ---------- */
Object.assign(window.TUTOR_NOTES, {
  "M-C1": { b: [
    "ด้านขวา pulmonary artery อยู่หน้าหลอดลม; ด้านซ้าย pulmonary artery พาด <b>เหนือ</b> หลอดลม → left hilum สูงกว่า",
    "Bilateral hilar lymphadenopathy ที่คลาสสิก: <b>sarcoidosis</b>; ข้างเดียวคิดถึง lung cancer, TB, lymphoma",
    "Hilum ข้างหนึ่งสูงขึ้นผิดปกติ → upper lobe collapse หรือ fibrosis ดึงขึ้น"
  ] },
  "M-C2": { b: [
    "Sternal angle (angle of Louis) = จุดต่อ manubrium กับ body ระดับ costal cartilage ที่ 2 → ใช้นับซี่โครงทางคลินิก",
    "ระดับนี้ตรงกับ: carina, จุดเริ่มและสิ้นสุดของ aortic arch, azygos เข้า SVC",
    "Thoracic inlet = T1, ซี่โครงคู่ที่ 1, manubrium"
  ] },
  "M-C3": { b: [
    "Scheme ใหม่ของ ITMIG (2014) ใช้ prevascular, visceral, paravertebral — แนวคิดเดียวกัน ชื่อต่างกัน",
    "Left recurrent laryngeal nerve อ้อมใต้ aortic arch → ก้อนที่ aortopulmonary window ทำให้เสียงแหบ",
    "Thymus ในเด็กใหญ่และอาจเห็นเป็น sail sign บน CXR เป็นเรื่องปกติ",
    "Thoracic duct วิ่งขึ้นใน posterior mediastinum แล้วเทเข้า junction ของ left subclavian + internal jugular vein"
  ] },
  "M-C4": { b: [
    "Anterior mass mnemonic <b>4 T's</b>: Thymoma, Teratoma (germ cell), Thyroid (retrosternal goiter), Terrible lymphoma",
    "Thymoma สัมพันธ์กับ <b>myasthenia gravis</b>",
    "Posterior mediastinal mass ในเด็ก: neuroblastoma; ในผู้ใหญ่: schwannoma/neurofibroma",
    "Extramedullary hematopoiesis พบใน thalassemia (เกี่ยวกับคนไทยมาก) → ก้อน paravertebral สองข้าง"
  ] },
  "M-C5": { b: [
    "Mnemonic: <b>I 8 10 Eggs At 12</b> = IVC T8, esophagus T10, aorta T12",
    "Bochdalek hernia = posterolateral (มักซ้าย ในทารก); Morgagni hernia = anterior (ขวา) เป็นก้อน precardiac",
    "Hiatal hernia แบบ sliding พบบ่อยที่สุด สัมพันธ์กับ GERD; บน CXR มี air-fluid level หลังหัวใจ",
    "Elevated hemidiaphragm ข้างเดียว: phrenic nerve palsy, subphrenic abscess, lobar collapse"
  ], d: [
    "T8   caval      IVC, R phrenic",
    "T10  esophageal esophagus, L gastric vessels, vagus",
    "T12  aortic     aorta, thoracic duct, azygos"
  ] },
  "M-C6": { b: [
    "Chest drain และ thoracentesis: แทงชิด <b>ขอบบนของซี่โครงล่าง</b> เพื่อหลบ V-A-N",
    "Safe triangle สำหรับ chest drain: ขอบ pectoralis major, latissimus dorsi, ระดับ nipple (ICS 5)",
    "Rib notching (ซี่โครง 3–8 ด้านล่าง) ใน coarctation of aorta จาก intercostal collaterals",
    "นับซี่โครงบน PA ใช้ posterior rib เพราะเห็นชัดกว่า"
  ] }
});
