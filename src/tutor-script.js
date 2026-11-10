/* English recording script for the tutor deck: the video plan (start card), per-section opening line and
   "Understand it: the 80%" summary, and a SAY line for every concept card and core question. Keys match deck IDs. */
window.TUTOR_SCRIPT = {
  plan: [
    ["Video 1", ["H", "S"], "How each modality works and when to use it; the skull on AP, lateral and angled views.", "25&#8211;30 min"],
    ["Video 2", ["O", "N"], "Orbit walls and contents; temporal bone, nasal cavity, sinuses and the ostiomeatal unit.", "30&#8211;35 min"],
    ["Video 3", ["L", "C"], "Pharynx and larynx on CT and the lateral neck film; chest imaging and CXR views.", "25&#8211;30 min"],
    ["Video 4", ["A", "P"], "Trachea, bronchi, lobes and fissures; silhouette sign and pleural disease.", "30&#8211;35 min"],
    ["Video 5", ["M"], "Hilum, mediastinal compartments and masses, diaphragm, chest wall.", "20&#8211;25 min"]
  ],
  sec: {}
};

/* ---------- H ---------- */
window.TUTOR_SCRIPT.sec.H = { part: "Video 1", time: "12&#8211;15 min",
  open: "Before any anatomy, decide which picture can answer the question. Plain film is cheap but flat, CT owns bone and air, MRI owns soft tissue.",
  u: [
    "<b>Plain film</b> is a 2-D shadow: cheap, quick, low dose, but full of overlapping lines. Still used for simple fractures, foreign bodies, sinusitis screening and metabolic bone.",
    "<b>Angled views</b>: Caldwell 15° for the frontal sinus and orbit, Towne 30° for the occiput and mandible, Waters 45° for the face and sinuses.",
    "<b>CT</b> is cross-sectional: primary for the bony orbit, skull base and temporal bone, best for the sinuses and nasal cavity. The price is radiation.",
    "<b>Windows</b> remap the grey scale of the same data, <b>MPR</b> re-slices axial into coronal and sagittal, <b>VRT</b> makes 3-D. No extra scan.",
    "<b>MRI</b>: magnetic field and RF, no radiation, best soft tissue, optic pathway, vessels from flow. Slow and costly; no pacemaker, ear implant or claustrophobia.",
    "<b>Choosing</b>: bone or air → CT; soft tissue or nerve → MRI; then check the patient for MRI contraindications or radiation concerns."
  ],
  say: {
    "H-C1": "Plain films are cheap and quick but flat, so every bone along the beam piles up. Know the four jobs they still do and their two weak spots.",
    "H1": "Four jobs are left for plain film: fracture, foreign body, sinusitis screening and metabolic bone. Everything soft goes to MRI.",
    "H-C2": "Three angled views, three angles, three targets: Caldwell fifteen, Towne thirty, Waters forty-five. Learn them as one line.",
    "H5": "Look at what sits in the middle: the back of the skull and the foramen magnum. That is Towne, for the occiput and the mandible.",
    "H6": "Chin up, maxillary sinuses wide open under the orbits: Waters, the face-and-sinus view.",
    "H7": "Frontal sinus plus orbit equals Caldwell.",
    "H9": "True: Waters is the face-and-sinus view.",
    "H-C3": "CT cuts the head into slices, so nothing hides behind anything else. It owns bone and air: orbit walls, skull base, temporal bone, sinuses.",
    "H11": "Sinuses and nasal cavity are thin bone against air, the perfect CT job.",
    "H14": "Bony walls of the orbit means CT in a bone window.",
    "H-C4": "One CT, many looks: the window changes the grey scale, MPR changes the plane, VRT gives you 3-D. None of them needs a new scan.",
    "H15": "Brain flat grey, bone detail sharp: that is a bone window.",
    "H17": "Coronal sinus images come from re-slicing the axial stack: MPR.",
    "H-C5": "MRI has no X-rays and the best soft-tissue contrast, so it wins for the optic pathway. The price is time, cost and three contraindications.",
    "H20": "Pacemaker, ear implant, claustrophobia: those three keep a patient out of the magnet.",
    "H22": "True: the optic pathway is an MRI question.",
    "H-C6": "Two questions pick the modality: is the target bone or soft tissue, and can this patient go into a magnet?",
    "H24": "Bony orbit plus a pacemaker: CT, no debate.",
    "H25": "Only the optic-pathway pairing is right; every bony target here belongs to CT."
  } };

/* ---------- S ---------- */
window.TUTOR_SCRIPT.sec.S = { part: "Video 1", time: "12&#8211;15 min",
  open: "Now we name things on the film. Split the bones into cranial and facial, then read the AP and lateral views in a fixed order so nothing is missed.",
  u: [
    "<b>Cranial (slide: calvarium)</b>: frontal, parietal, temporal, occipital, ethmoid, sphenoid. <b>Facial</b>: maxilla, mandible, zygomatic, palatine, lacrimal, vomer, nasal, inferior turbinate.",
    "<b>AP film, midline and orbit</b>: crista galli → nasal septum → mandible; the lesser wing is the near-horizontal line across the orbit, the greater wing the oblique one.",
    "<b>AP film, lower</b>: maxillary sinuses under the orbits, mastoid processes at the lateral edges; frontal bone central, parietal bones at the sides.",
    "<b>Lateral film, sinuses</b> front to back: frontal above the orbit, ethmoid between the orbits, sphenoid under the sella, maxillary above the hard palate.",
    "<b>Lateral film, base</b>: sella on the sphenoid body, clivus sloping back to the foramen magnum, mastoid air cells behind the condyle of the mandible.",
    "<b>Sella</b>: tuberculum in front, dorsum behind, anterior and posterior clinoids on top, sphenoid sinus below."
  ],
  say: {
    "S-C1": "Two lists: six bones around the brain, eight in the face. The trap is that ethmoid and sphenoid count as cranial even though they sit deep behind the face.",
    "S1": "Vomer is the lower nasal septum, a facial bone; the other four are cranial.",
    "S-C2": "Read the AP film in rows: midline, inside the orbit, below the orbit, the edges, then the vault.",
    "S5": "Small midline spike between the orbits: crista galli.",
    "S7": "Lateral edge of the skull base at that level: the mastoid process.",
    "S-C3": "On the lateral film, find the four sinuses front to back, then the sella and clivus in the middle, then the mastoid behind.",
    "S9": "Cup on top of the sphenoid: sella turcica.",
    "S10": "Air space under the sella: sphenoid sinus.",
    "S12": "The flat plate between nose and mouth is the palatine process of the maxilla, the hard palate.",
    "S14": "True: the clivus slopes down from the dorsum sellae to the foramen magnum.",
    "S-C4": "Zoom into the sella: front edge, pit, back wall, two clinoids on top, sinus underneath.",
    "S15": "The back wall is the dorsum sellae.",
    "S16": "Under the sella floor sits the sphenoid sinus."
  } };

/* ---------- O ---------- */
window.TUTOR_SCRIPT.sec.O = { part: "Video 2", time: "15&#8211;18 min",
  open: "The orbit is a bony cone with seven bones and three neighbours. Learn the walls first, because every fracture and every CT label hangs off them.",
  u: [
    "<b>Shape</b>: a cone from the eyelids anterolaterally to the apex posteromedially; the two axes diverge about 45°.",
    "<b>Neighbours</b>: anterior cranial fossa above, nasal cavity and ethmoid air cells medially, maxillary sinus below.",
    "<b>Walls</b>: roof frontal (+ lesser wing), medial ethmoid lamina papyracea (+ maxilla, lacrimal, sphenoid), floor maxilla (+ zygomatic, palatine), lateral zygomatic + greater wing; apex optic canal in the lesser wing.",
    "<b>Blow-out fracture</b>: rim holds, pressure rises, the thin floor breaks into the maxillary antrum, fat and inferior rectus herniate.",
    "<b>Axial CT</b>: upper slice levator/SR, SO, lacrimal gland; mid slice MR, LR, optic nerve to the optic canal; lower slice IR, nasolacrimal duct, IOF.",
    "<b>Coronal</b>: a ring of muscles around the optic nerve, SO superomedial, superior ophthalmic vein under SR, inferior oblique under the front of the globe."
  ],
  say: {
    "O-C1": "Picture a cone pointing back and in, with three neighbours sharing its thin walls: brain above, ethmoid and nose medially, maxillary sinus below.",
    "O1": "Below the orbit is the maxillary sinus.",
    "O-C2": "One table to learn: each wall, the main bone, the helpers. Watch the sphenoid: lesser wing at the roof and apex, greater wing on the lateral wall.",
    "O4": "Lamina papyracea is the ethmoid.",
    "O5": "Floor is mainly maxilla, which is why it breaks into the maxillary sinus.",
    "O7": "Optic canal sits in the lesser wing.",
    "O-C3": "A ball bigger than the rim pushes the eye back, the pressure has to go somewhere, and the thin floor gives way.",
    "O9": "Floor into the maxillary sinus, with fat and inferior rectus falling through.",
    "O10": "True: lamina papyracea means paper layer, the thin medial wall.",
    "O-C4": "On the frontal film, read rim, then the two sphenoid wings inside the circle, then the thin medial wall.",
    "O12": "The dark gap between the two wings is the superior orbital fissure.",
    "O-C5": "Read axial CT in three levels: top, optic nerve level, bottom. Each level has its own muscles and canals.",
    "O14": "At the optic nerve level, medial and lateral recti run along the walls.",
    "O17": "Optic nerve exits through the optic canal.",
    "O-C6": "Coronal behind the globe is a clock face of muscles around the nerve; find the superior oblique at the upper inner corner.",
    "O18": "The centre of the muscle ring is the optic nerve sheath complex."
  } };

/* ---------- N ---------- */
window.TUTOR_SCRIPT.sec.N = { part: "Video 2", time: "15&#8211;18 min",
  open: "This section is all air spaces inside bone: the middle ear and mastoid in the petrous bone, the nasal cavity, and four pairs of sinuses. CT in a bone window shows them best.",
  u: [
    "<b>Petrous bone</b> (stone-like) holds the middle ear, inner ear and internal auditory canal. Middle ear: epi-, meso-, hypotympanum. Inner ear: bony labyrinth, perilymphatic spaces, membranous labyrinth.",
    "<b>Temporal CT</b>, lateral to medial: EAC → middle ear with the malleus → cochlea in front, semicircular canal behind → IAC. Behind: mastoid antrum and mastoid air cells.",
    "<b>Nasal cavity</b>: palate to skull base, split by the septum, nares in front, choanae into the nasopharynx behind; three conchae over three meatuses.",
    "<b>Sinuses on film</b>: frontal and ethmoid on Caldwell, maxillary best on Waters, sphenoid on the lateral film.",
    "<b>OMU</b> on coronal CT: bulla, middle concha, hiatus semilunaris; shared drainage of frontal, anterior ethmoid and maxillary sinuses.",
    "<b>Axial and sagittal CT</b>: frontal high, ethmoid between the orbits, sphenoid behind in the midline under the sella, maxillary lowest."
  ],
  say: {
    "N-C1": "The petrous bone is the stone of the skull, and it houses the middle ear, the inner ear and the canal for the nerves.",
    "N1": "The sphenoid sinus is the odd one out: it lives in the sphenoid, not the temporal bone.",
    "N-C2": "Follow the sound on CT: outer canal, middle ear with the malleus, cochlea in front, semicircular canals behind, then the internal canal going medially.",
    "N4": "The coil at the front of the inner ear is the cochlea.",
    "N5": "The canal heading medially toward the brainstem is the internal auditory canal.",
    "N-C3": "The nasal cavity is a box: palate floor, skull-base roof, septum in the middle, nostrils in front and choanae behind.",
    "N9": "Back door of the nose: the choanae.",
    "N-C4": "Each sinus has a home on the film and a view that clears it: frontal and ethmoid on Caldwell, maxillary on Waters, sphenoid on the lateral.",
    "N12": "Maxillary sinuses: Waters.",
    "N13": "Caldwell labels the frontal, ethmoid and maxillary sinuses.",
    "N-C5": "One small channel, three sinuses: the ostiomeatal unit drains frontal, anterior ethmoid and maxillary.",
    "N15": "Frontal, anterior ethmoid, maxillary: the OMU three.",
    "N16": "The curved slit under the bulla is the hiatus semilunaris.",
    "N-C6": "On axial CT walk down the face: frontal on top, ethmoid between the eyes with the sphenoid behind, maxillary at the bottom.",
    "N20": "Midline behind the ethmoid cells: sphenoid sinus.",
    "N22": "True: the sphenoid sinus sits between the sella above and the nasopharynx below."
  } };

/* ---------- L ---------- */
window.TUTOR_SCRIPT.sec.L = { part: "Video 3", time: "12&#8211;15 min",
  open: "The pharynx is one tube with three names, set by what lies in front of it: nose, mouth, larynx. The larynx is then split by the vocal folds.",
  u: [
    "<b>Pharynx</b>: fibromuscular tube, skull base to the lower border of the cricoid, then the cervical esophagus.",
    "<b>Nasopharynx</b>: skull base to soft palate. Lateral wall front to back: Eustachian tube opening, torus tubarius, fossa of Rosenmüller.",
    "<b>Oropharynx</b>: soft palate to the valleculae and base of tongue, at the hyoid. Vallecula: between tongue base and epiglottis.",
    "<b>Hypopharynx</b>: pharyngoepiglottic fold to the inferior cricoid; pyriform sinuses are its anterolateral recesses.",
    "<b>Larynx</b>: epiglottis to inferior cricoid. Supraglottis (false fold, ventricle), glottis (vocal folds), subglottis (to the trachea).",
    "<b>Lateral neck film</b>, top to bottom: nasopharynx, soft palate, oropharynx, vallecula, epiglottis, hypopharynx, larynx, trachea; hyoid in front."
  ],
  say: {
    "L-C1": "One tube, three names, decided by what sits in front: nose, mouth, larynx. It ends at the cricoid.",
    "L1": "Pharynx stops at the lower border of the cricoid.",
    "L2": "Oropharynx runs from the soft palate to the valleculae at the hyoid.",
    "L-C2": "On the side wall of the nasopharynx read opening, bump, pocket: Eustachian tube, torus, Rosenmüller.",
    "L4": "The pocket behind the bump is the fossa of Rosenmüller.",
    "L5": "The bump between the opening and the pocket is the torus tubarius.",
    "L-C3": "The oropharynx ends at the vallecula; the hypopharynx sits behind the larynx and owns the pyriform sinuses.",
    "L8": "Pyriform sinuses belong to the hypopharynx.",
    "L10": "False: soft palate to the hyoid is the oropharynx; the hypopharynx starts at the pharyngoepiglottic fold.",
    "L-C4": "Split the larynx at the vocal folds: above is supraglottis, the folds are the glottis, below is subglottis.",
    "L11": "Vocal folds and the gap between them: the glottis.",
    "L12": "The thin air slit between the two folds is the ventricle.",
    "L15": "True: false fold, ventricle, true fold.",
    "L-C5": "On the lateral neck film, follow the black air column from top to bottom and name each stop.",
    "L17": "The curved leaf just under the vallecula is the epiglottis."
  } };

/* ---------- C ---------- */
window.TUTOR_SCRIPT.sec.C = { part: "Video 3", time: "12&#8211;15 min",
  open: "Chest imaging starts with the plain film. Know the five densities, what CT and MRI add, and how the way a film is taken changes what you see.",
  u: [
    "<b>Five densities</b>, white to black: metal, bone, soft tissue, fat, air. Edges appear only where densities differ.",
    "<b>CXR</b> is the first look at the lungs, mediastinum and bony thorax.",
    "<b>CT</b>: cross-sections for consolidation, masses, lung cancer staging and interstitial disease. Windows: lung −500/1500, bone 500/2000, mediastinum 50/500.",
    "<b>MRI</b>: soft tissue of the heart, mediastinum, hilum, diaphragm and chest wall; limited for lung parenchyma.",
    "<b>PA film</b>: upright, chest on the receptor, beam back to front, elbows forward to clear the scapulae, full inspiration; heart barely magnified.",
    "<b>Lateral and AP</b>: lateral beam right to left with arms up; AP supine or sitting for children and sick patients, magnifies the heart."
  ],
  say: {
    "C-C1": "A radiograph only knows five densities. Learn the order from white to black, because every sign later depends on two densities meeting.",
    "C1": "Metal, bone, soft tissue, fat, air: white to black.",
    "C3": "First test for the chest is the plain film.",
    "C-C2": "CT gives slices, and the window decides what you see: lung, bone or mediastinum. Range is level plus or minus half the width.",
    "C4": "Minus five hundred, fifteen hundred: lung window.",
    "C6": "Only the top image shows lung detail: that is the lung window.",
    "C7": "CT is not the first test for everything; the plain film is.",
    "C-C3": "MRI is the soft-tissue tool of the chest; it struggles with the air-filled lung itself.",
    "C8": "False: MRI is limited for the lung parenchyma.",
    "C-C4": "PA means the beam enters from behind. Every step of the positioning either clears something off the lungs or fills them with air.",
    "C10": "Upright, chest on the plate, deep breath in: that is the PA.",
    "C-C5": "Lateral to see what hides behind the heart; AP when the patient cannot stand, remembering the heart will look bigger.",
    "C12": "True: right to left, arms up.",
    "C13": "Bedside film means AP, and AP magnifies the heart."
  } };

/* ---------- A ---------- */
window.TUTOR_SCRIPT.sec.A = { part: "Video 4", time: "15&#8211;18 min",
  open: "Follow the air in: trachea, carina, main bronchi, lobes. Then learn the fissures, because they draw the lobe borders you will use for the silhouette sign.",
  u: [
    "<b>Trachea</b>: midline, from 2 cm below the vocal cords to the carina, about 12 cm; 16–20 incomplete rings on the anterior two-thirds, membranous posterior third.",
    "<b>Carina</b> about 60° (50–75°). Right main bronchus shorter and more vertical, gives off the RUL bronchus, continues as the bronchus intermedius; left longer and flatter.",
    "<b>Lobes</b>: right 3 lobes and 10 segments, left 2 lobes and 8 segments.",
    "<b>Overlap</b>: on PA the lower lobes sit behind the upper and middle lobes, so the lateral film or CT is needed to place a shadow front or back.",
    "<b>CT</b>: middle lobe and lingula anterior against the heart, lower lobes posterior on the diaphragm.",
    "<b>Fissures</b>: right major separates RUL+RML from RLL, right minor separates RUL from RML (seen on PA), left oblique separates LUL from LLL."
  ],
  say: {
    "A-C1": "The trachea is a midline tube with a few numbers worth knowing: 2 cm below the cords, 12 cm long, 16 to 20 C-shaped rings open at the back.",
    "A1": "From just below the vocal cords to the carina.",
    "A-C2": "The two main bronchi are not twins: the right is short and steep, the left long and flat.",
    "A5": "Right is shorter and more vertical.",
    "A6": "After the upper lobe branch, the right continues as the bronchus intermedius.",
    "A7": "The short branch going up and out on the right is the right upper lobar bronchus.",
    "A-C3": "Three lobes on the right, two on the left, and on a PA film they sit on top of each other. That overlap is the whole reason we take a lateral.",
    "A10": "Right three lobes and ten segments, left two lobes and eight.",
    "A11": "Right lower zone on PA can be middle lobe in front or lower lobe behind.",
    "A12": "True: the middle lobe is the front-and-bottom wedge on the lateral.",
    "A-C4": "On CT the lobes stop overlapping: lower lobes at the back on the diaphragm, middle lobe and lingula at the front on the heart.",
    "A14": "Middle lobe hugs the right heart border.",
    "A-C5": "Three fissures: two on the right, one on the left. Only the minor fissure shows on the PA film.",
    "A15": "Minor fissure: upper lobe above, middle lobe below.",
    "A17": "On a PA film you normally see only the right minor fissure."
  } };

/* ---------- P ---------- */
window.TUTOR_SCRIPT.sec.P = { part: "Video 4", time: "15&#8211;18 min",
  open: "A border is only visible because lung air sits against it. Take that air away and the border disappears, and which border disappears tells you which lobe is sick.",
  u: [
    "<b>Silhouette sign</b>: soft-tissue density touching a soft-tissue structure erases its border; a lesion in front or behind only overlaps and the border stays.",
    "<b>Right side</b>: paratracheal stripe and azygos arch = RUL, right heart border = RML, right hemidiaphragm = RLL.",
    "<b>Left side</b>: aortic knob = LUL, left heart border = lingula, descending aorta and left hemidiaphragm = LLL.",
    "<b>Lobar pneumonia</b>: ask which border is gone and which is still sharp; fissures make straight edges.",
    "<b>Pleura</b>: parietal and visceral layers with a potential space; normally invisible.",
    "<b>Effusion</b> = fluid, blunted costophrenic angle. <b>Pneumothorax</b> = air, visible visceral pleural line, no markings beyond. <b>Plaque</b> = calcified parietal pleura from asbestos."
  ],
  say: {
    "P-C1": "Every border on a chest film is air against soft tissue. Lose the air and you lose the border, and that tells you where the disease sits.",
    "P1": "Two soft-tissue densities touching merge into one: that is the silhouette sign.",
    "P2": "True: the lower lobe is behind, so it overlaps the heart border without erasing it.",
    "P-C2": "Learn the map as three rows: upper lobes own the top of the mediastinum, middle lobe and lingula own the heart, lower lobes own the diaphragm.",
    "P3": "Right heart border gone: right middle lobe.",
    "P4": "Left hemidiaphragm gone, heart border sharp: left lower lobe.",
    "P-C3": "Three real pneumonias: upper lobe hides the paratracheal stripe, middle lobe hides the heart, lower lobe hides the diaphragm.",
    "P9": "Heart border lost and a wedge in front on the lateral: middle lobe.",
    "P10": "Behind the heart, diaphragm gone: left lower lobe.",
    "P-C4": "Two layers of pleura with a space you cannot normally see. Put fluid or air into it and suddenly you can.",
    "P12": "A potential space between parietal and visceral pleura.",
    "P-C5": "Fluid falls and blunts the angle; air rises and shows you the pleural line.",
    "P14": "Blunted right costophrenic angle: pleural effusion.",
    "P15": "Pleural line with no markings outside it: pneumothorax.",
    "P-C6": "Calcified parietal pleura means asbestos until proven otherwise.",
    "P17": "Shipyard worker with calcified pleura: asbestos."
  } };

/* ---------- M ---------- */
window.TUTOR_SCRIPT.sec.M = { part: "Video 5", time: "20&#8211;25 min",
  open: "Everything in the chest that is not lung: the hilum, the mediastinum with its compartments and masses, the diaphragm and its openings, and the chest wall.",
  u: [
    "<b>Hilum</b>: pulmonary artery, pulmonary vein, bronchus, lymph nodes; the left hilum is usually higher.",
    "<b>Mediastinum</b>: sternum to spine, thoracic inlet to diaphragm; the plane of Ludwig splits superior from inferior in the anatomic scheme.",
    "<b>Modified compartments</b>: anterior (thymus, nodes, fat, internal mammary vessels), middle (heart, great vessels, trachea and main bronchi, nerves), posterior (esophagus, descending aorta, azygos, thoracic duct).",
    "<b>Masses</b>: anterior = thymic lesions, retrosternal goiter, germ cell tumor, nodes; middle = nodes, arch aneurysm, big pulmonary artery, cysts; posterior = neurogenic tumor, hiatal hernia, esophageal lesions.",
    "<b>Diaphragm</b>: right dome 1–1.5 cm higher; T8 caval, T10 esophageal, T12 aortic; hiatal hernia through the esophageal hiatus.",
    "<b>Chest wall</b>: three intercostal layers, V-A-N under each rib, sternum = manubrium, body, xiphoid."
  ],
  say: {
    "M-C1": "The hilum is where everything enters the lung: artery, vein, bronchus and nodes. Left sits higher.",
    "M1": "Thoracic duct is the odd one out: it lives in the posterior mediastinum.",
    "M2": "True: the left hilum is higher.",
    "M-C2": "The mediastinum is the box between the lungs: sternum to spine, inlet to diaphragm, split at the sternal angle in the anatomic scheme.",
    "M3": "Ludwig's plane splits superior from inferior.",
    "M-C3": "Radiologists use three compartments: in front of the heart, the heart and airway, and behind the heart beside the spine.",
    "M5": "Thymus is anterior.",
    "M6": "Trachea and main bronchi count as middle in this scheme.",
    "M8": "The round vessel to the right of the ascending aorta is the SVC.",
    "M10": "True: the posterior tracheal wall is the back line of the middle compartment.",
    "M-C4": "Name the compartment first, then the list for that compartment is your differential.",
    "M11": "Thymoma is anterior.",
    "M12": "Beside the spine in a young adult: neurogenic tumor.",
    "M-C5": "Three holes at three levels: eight, ten, twelve; IVC, esophagus, aorta.",
    "M14": "T8 is the caval opening.",
    "M18": "A round shadow behind the heart in someone with reflux: hiatal hernia.",
    "M-C6": "The chest wall: three muscle layers, and the vein, artery and nerve hiding under each rib."
  } };
