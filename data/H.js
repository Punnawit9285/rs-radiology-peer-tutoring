/* Section H: imaging modalities of the head and neck (H&N radiology handout, slides 4–21).
   {{text}} = cloze blank on concept cards. Questions are written from the slides (no past papers were supplied). */
CVS.add({ id: 'H', short: 'H&N imaging', title: 'Imaging modalities of the head and neck', kind: 'Lecture',
  blurb: 'Plain films and their angled views, CT (windows, MPR, VRT) and MRI: what each one shows best, and its limits.',
  items: [
  { t: 'c', id: 'H-C1', title: 'Plain radiography: where it still helps', src: 'H&N p.5–6',
    html: '<div class="two"><div class="stack"><p>Skull films are done <b>{{much less frequently}}</b> now. The skull is complex, with {{multiple overlapping lines and interfaces}}, and {{CT and MRI}} have largely replaced plain films.</p>' +
      '<div class="mini"><h4>May still help to diagnose</h4><ul><li>{{Fractures of the skull}}</li><li>{{Foreign body}}</li><li>Screening for {{paranasal sinusitis}}</li><li>Bone defects from certain {{metabolic and endocrine}} disorders</li></ul></div></div>' +
      CVS.fig('hn-plain', 'Prone positioning and a frontal sinus film.', 'hn', 5) + '</div>' +
      '<div class="cols2"><div class="mini art"><h4>Advantages</h4><ul><li>{{Low cost}}</li><li>Wide availability</li><li>No need for {{preparation or cooperation}}</li><li>Relatively {{low radiation}}</li></ul></div>' +
      '<div class="mini ven"><h4>Disadvantages</h4><ul><li>{{Two-dimensional}}: everything along the beam is superimposed</li><li>Suboptimal for fractures, especially of the {{base of skull}} or {{complex facial fractures}}</li></ul></div></div>' },
  { t: 'q', id: 'H1', src: 'H&N p.5', core: true,
    q: 'Which is a remaining use of plain skull radiography listed in the lecture?',
    o: ['Screening for paranasal sinusitis', 'Showing the optic pathway', 'Characterizing a soft-tissue mass of the neck', 'Showing major vessels without contrast', 'Showing the contents of the internal auditory canal'], a: 0,
    ex: 'The lecture keeps plain films for skull fractures, foreign bodies, sinusitis screening and bone defects from metabolic or endocrine disease. The optic pathway, neck soft tissue and flow-based vessel imaging are MRI strengths.' },
  { t: 'tf', id: 'H2', src: 'H&N p.6',
    q: 'Plain skull radiographs are the preferred test for a fracture of the base of skull.', a: false,
    ex: 'False. Base-of-skull and complex facial fractures are the stated weakness of plain films (two-dimensional, overlapping lines). CT is the primary modality for the skull base.' },
  { t: 'q', id: 'H3', src: 'H&N p.6',
    q: 'Which is <b>NOT</b> an advantage of plain radiography of the skull?',
    o: ['Low cost', 'Wide availability', 'No need for preparation or cooperation', 'Relatively low radiation', 'Clear display of complex facial fractures'], a: 4,
    ex: 'Complex facial fractures are listed as a disadvantage: a radiograph is two-dimensional, so fragments overlap. The other four are the listed advantages.' },
  { t: 'open', id: 'H4', src: 'H&N p.5–6',
    q: 'Why is a skull radiograph harder to read than a CT of the same head?',
    ans: 'A radiograph is a two-dimensional projection: every bone along the beam is superimposed, so the skull gives multiple overlapping lines and interfaces. CT is cross-sectional, so each slice shows structures without superimposition and can be reformatted in any plane.' },

  { t: 'c', id: 'H-C2', title: 'Angled skull views: Caldwell, Towne, Waters', src: 'H&N p.7–11',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>View</th><th>Beam and position (slides)</th><th>Shows best</th></tr></thead><tbody>' +
      '<tr><td><b>Skull AP</b></td><td>Straight frontal projection</td><td>Overview of vault and face</td></tr>' +
      '<tr><td><b>Skull lateral</b></td><td>Side of the head on the detector</td><td>Vault, sella turcica and sinuses in profile</td></tr>' +
      '<tr><td><b>Caldwell</b></td><td>Prone, forehead and nose on the detector; beam tilted {{15°}}</td><td>{{Frontal sinus}} and {{fracture to the orbit}}</td></tr>' +
      '<tr><td><b>Towne</b></td><td>Supine; beam tilted {{30°}} (37° in the inset)</td><td>{{Occipital bone}} and {{mandible}}</td></tr>' +
      '<tr><td><b>Waters</b></td><td>Prone, chin raised on the detector; {{45°}} on the diagram (37° in the erect inset)</td><td>{{Facial fractures}} and {{paranasal sinuses}}</td></tr></tbody></table></div>' +
      '<div class="scanrow">' + CVS.fig('hn-caldwell', 'Caldwell’s view: beam angle, position and film.', 'hn', 9) + CVS.fig('hn-towne', 'Towne’s view: beam angle, position and film.', 'hn', 10) + CVS.fig('hn-waters', 'Waters’ view: beam angle, position and film.', 'hn', 11) + '</div>' +
      '<p class="note">Caldwell and Waters both look at the face from the front; Towne looks up at the back of the skull, so the whole posterior skull opens out on it.</p>' },
  { t: 'q', id: 'H5', src: 'H&N p.10', core: true,
    q: 'Which view is this, and what does the lecture use it for?', fig: CVS.fig('hn-towne-xr', 'Angled skull radiograph.', 'hn', 10),
    o: ['Caldwell: frontal sinus and fracture to the orbit', 'Towne: occipital bone and mandible', 'Waters: facial fractures and paranasal sinuses', 'Lateral: sella turcica and clivus', 'AP: overview of the vault'], a: 1,
    ex: 'The film looks up at the back of the skull: the occipital bone and the foramen magnum region are in the middle, and the mandible opens out below. That is Towne’s view (beam 30°).' },
  { t: 'q', id: 'H6', src: 'H&N p.11', core: true,
    q: 'Which projection is shown?', fig: CVS.fig('hn-waters-xr', 'Frontal skull radiograph with the chin raised.', 'hn', 11),
    o: ['Skull AP', 'Caldwell’s view', 'Towne’s view', 'Waters’ view', 'Skull lateral'], a: 3,
    ex: 'The chin is raised, so the dense petrous bones drop below the maxillary sinuses and both maxillary sinuses and the orbits are seen clearly: Waters’ view, used for facial fractures and paranasal sinuses.' },
  { t: 'q', id: 'H7', src: 'H&N p.9', core: true,
    q: 'Which plain view does the lecture pair with the <b>frontal sinus</b> and a <b>fracture to the orbit</b>?',
    o: ['Caldwell’s view', 'Towne’s view', 'Waters’ view', 'Skull lateral', 'Skull AP'], a: 0,
    ex: 'Caldwell’s view (beam 15°) is for the frontal sinus and orbital fractures. Waters is for facial fractures and the paranasal sinuses (especially maxillary); Towne is for the occipital bone and mandible.' },
  { t: 'q', id: 'H8', src: 'H&N p.9–11',
    q: 'Which beam angle on the slides belongs to Towne’s view?',
    o: ['15°', '30°', '45°', '60°', '0°'], a: 1,
    ex: 'Caldwell 15°, Towne 30° (37° in the positioning inset), Waters 45° on the diagram.' },
  { t: 'tf', id: 'H9', src: 'H&N p.11', core: true,
    q: 'Waters’ view is used for facial fractures and the paranasal sinuses.', a: true,
    ex: 'True: that is exactly the slide’s line for Waters’ view.' },
  { t: 'q', id: 'H10', src: 'H&N p.9',
    q: 'Which view is this?', fig: CVS.fig('hn-caldwell-xr', 'Frontal skull radiograph.', 'hn', 9),
    o: ['Caldwell’s view', 'Towne’s view', 'Waters’ view', 'Skull lateral', 'Occipitofrontal view of the orbit only'], a: 0,
    ex: 'A frontal view with the orbits and frontal sinus in the upper face, the chin not raised and no foramen-magnum view: Caldwell’s view (beam 15°).' },

  { t: 'c', id: 'H-C3', title: 'CT: cross-sections, and what it does best', src: 'H&N p.12–14',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Improves {{spatial resolution}}: {{cross-sectional}} images, so structures no longer hide behind each other.</li>' +
      '<li>{{Contrast media}} improve the demonstration of vascularity and blood vessels.</li>' +
      '<li>Primary modality for the {{bony orbit}}, the {{skull base}} and the {{temporal bone}}.</li>' +
      '<li>Best assessment for the {{paranasal sinuses and nasal cavity}}.</li></ul></div>' +
      CVS.fig('hn-ct-examples', 'Axial CT through the petrous bone and coronal CT of the sinuses, bone window.', 'hn', 13) + '</div>' +
      '<div class="cols2"><div class="mini art"><h4>Advantages</h4><ul><li>Sees through superimposed structures</li><li>Better contrast and detail</li><li>{{Multiplanar reformation}} and 3-D</li><li>Widely available</li><li>{{Short scanning time}}</li></ul></div>' +
      '<div class="mini ven"><h4>Disadvantages</h4><ul><li>Relatively high cost</li><li>{{High radiation}}</li><li>May need contrast for soft-tissue characterization, vascularity or a vascular study</li></ul></div></div>' +
      '<p class="trap">Slide 13 also puts the “visual pathway” under CT, but slide 20 says {{MRI}} is preferred for the optic pathway. Orbit walls → CT; optic nerve and pathway → the other modality.</p>' },
  { t: 'q', id: 'H11', src: 'H&N p.13', core: true,
    q: 'According to the lecture, CT is the best assessment for which region?',
    o: ['Paranasal sinuses and nasal cavity', 'Optic pathway', 'Soft tissue of the face and neck', 'Major vessels without contrast agent', 'None: MRI is better for every region'], a: 0,
    ex: 'CT is the best assessment for the paranasal sinuses and nasal cavity and the primary modality for the bony orbit, skull base and temporal bone. The optic pathway, face and neck soft tissue and flow imaging are MRI strengths.' },
  { t: 'q', id: 'H12', src: 'H&N p.14, 21',
    q: 'Which is a <b>disadvantage of CT</b> compared with MRI?',
    o: ['High radiation', 'Long scanning time', 'Contraindicated with a cardiac pacemaker', 'Cannot show bone', 'Cannot be reformatted into other planes'], a: 0,
    ex: 'CT uses ionizing radiation (high dose). Long scanning time and the pacemaker contraindication belong to MRI. CT shows bone best and is reformatted with MPR.' },
  { t: 'tf', id: 'H13', src: 'H&N p.13',
    q: 'MRI is the primary imaging modality for the temporal bone and the skull base.', a: false,
    ex: 'False. CT is the primary modality there: bony detail (ossicles, air cells, foramina, fracture lines) is CT territory.' },
  { t: 'q', id: 'H14', src: 'H&N p.13', core: true,
    q: 'A 25-year-old is hit in the eye by a squash ball. You want to see the <b>bony walls</b> of the orbit. Which study fits the lecture best?',
    o: ['CT, bone window', 'MRI', 'Towne’s view', 'Skull lateral', 'MRI with flow sequences'], a: 0,
    ex: 'CT is the primary modality for the bony orbit and shows thin walls such as the floor and lamina papyracea. MRI is chosen for soft tissue and the optic pathway, not for fine bone.' },

  { t: 'c', id: 'H-C4', title: 'Reading CT: windows, MPR and VRT', src: 'H&N p.15–18',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Tool</th><th>What it does</th></tr></thead><tbody>' +
      '<tr><td><b>Windowing</b> (grey-level mapping)</td><td>Chooses which range of CT numbers is spread across the grey scale. In a <b>{{soft tissue window}}</b> brain, muscle and fat are separated and bone is plain white. In a <b>{{bone window}}</b> soft tissue looks flat grey but cortex, trabeculae and air cells show.</td></tr>' +
      '<tr><td><b>MPR</b> (multiplanar reconstruction)</td><td>The stack of {{axial}} images is re-sliced into new planes, with no new scan.</td></tr>' +
      '<tr><td><b>VRT</b> (volume rendering technique)</td><td>A {{3-D}} surface view of the whole volume, shown on the slide for {{facial fractures}}.</td></tr></tbody></table></div>' +
      '<div class="two">' + CVS.fig('hn-windows', 'The same level shown in two windows.', 'hn', 16) + CVS.fig('hn-mpr', 'MPR: one transverse stack, two new planes.', 'hn', 17) + '</div>' +
      '<p class="note">On the MPR slide the yellow line across the transverse image gives the {{coronal}} plane and the red line gives the {{sagittal}} plane. Windowing and MPR reuse the same data: no extra scan, no extra dose.</p>' },
  { t: 'q', id: 'H15', src: 'H&N p.16', core: true,
    q: 'Which display is used for this axial CT image?', fig: CVS.fig('hn-win-bone-q', 'Axial CT at the skull base.', 'hn', 16),
    o: ['Bone window', 'Soft tissue window', 'Lung window', 'Volume rendering (VRT)', 'T2-weighted MRI'], a: 0,
    ex: 'Brain and muscle are a flat mid-grey while cortex, trabecular bone and the mastoid air cells are sharp: a bone window.' },
  { t: 'tf', id: 'H16', src: 'H&N p.16',
    q: 'To see the same CT slice in a bone window instead of a soft tissue window, the patient has to be scanned again.', a: false,
    ex: 'False. Windowing only changes how the stored CT numbers are mapped to grey levels on the screen.' },
  { t: 'q', id: 'H17', src: 'H&N p.17', core: true,
    q: 'Coronal and sagittal CT images of the sinuses are usually produced by:',
    o: ['Multiplanar reconstruction (MPR) of the axial data', 'A second scan with the head turned', 'Volume rendering technique (VRT)', 'Changing the window level', 'Giving intravenous contrast'], a: 0,
    ex: 'MPR re-slices the stack of axial images into other planes. VRT makes a 3-D surface picture, and windowing changes grey levels.' },
  { t: 'q', id: 'H18', src: 'H&N p.18',
    q: 'These 3-D pictures of a facial fracture are made with which technique?', fig: CVS.fig('hn-vrt', 'CT of a facial fracture shown four ways.', 'hn', 18),
    o: ['Volume rendering technique (VRT)', 'Multiplanar reconstruction (MPR)', 'Bone window', 'Waters’ view', 'MRI'], a: 0,
    ex: 'The bottom row is a volume rendering (VRT) of the CT data. The top row shows soft tissue window, bone window and a coronal MPR.' },
  { t: 'open', id: 'H19', src: 'H&N p.16',
    q: 'On one head CT you need to judge both the brain and the fracture lines in the skull. What do you change, and why does it work?',
    ans: 'Change the window. The same CT data are viewed in a soft tissue (brain) window to judge the brain and in a bone window to see the fracture lines; each window spreads a different range of CT numbers over the grey scale.' },

  { t: 'c', id: 'H-C5', title: 'MRI: soft tissue without radiation', src: 'H&N p.19–21',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Uses a strong {{magnetic field}}, magnetic gradients and {{radiofrequency}} waves: {{no ionizing radiation}}.</li>' +
      '<li>Excellent {{soft-tissue characterization}}.</li><li>Preferred for the {{optic pathway}} and the soft tissue of the face and neck.</li></ul></div>' +
      CVS.fig('hn-mri', 'Axial and coronal MRI of the face and neck.', 'hn', 20) + '</div>' +
      '<div class="cols2"><div class="mini art"><h4>Advantages</h4><ul><li>Soft tissue discrimination</li><li>Sensitive to {{blood flow}}: major vessels seen without a contrast agent</li><li>Multiplanar display</li><li>Safe to repeat (no X-rays)</li></ul></div>' +
      '<div class="mini ven"><h4>Disadvantages</h4><ul><li>High cost</li><li>{{Long scanning time}}</li><li>Contraindicated with a {{cardiac pacemaker}}, an {{ear implant}} or {{claustrophobia}}</li></ul></div></div>' },
  { t: 'q', id: 'H20', src: 'H&N p.21', core: true,
    q: 'Which patient should <b>not</b> have MRI, according to the lecture?',
    o: ['A patient with a cardiac pacemaker', 'A patient with chronic sinusitis', 'A patient who had a CT yesterday', 'A patient with a skull fracture', 'A patient who needs the optic nerve examined'], a: 0,
    ex: 'Cardiac pacemaker, ear implant and claustrophobia are the listed contraindications. Recent CT is irrelevant, and the optic nerve is an MRI indication.' },
  { t: 'q', id: 'H21', src: 'H&N p.21',
    q: 'MRI can show the major vessels without a contrast agent because it:',
    o: ['Is sensitive to blood flow', 'Uses ionizing radiation', 'Has a short scanning time', 'Shows cortical bone in fine detail', 'Uses iodine-based contrast'], a: 0,
    ex: 'Flowing blood behaves differently from stationary tissue on MRI, so vessels can be shown without contrast.' },
  { t: 'tf', id: 'H22', src: 'H&N p.20', core: true,
    q: 'MRI is the preferred modality for the optic pathway.', a: true,
    ex: 'True: MRI is preferred for the optic pathway and the soft tissue of the face and neck.' },
  { t: 'q', id: 'H23', src: 'H&N p.21',
    q: 'Which is a disadvantage of MRI listed in the lecture?',
    o: ['Long scanning time', 'High radiation dose', 'Two-dimensional images only', 'Poor soft-tissue contrast', 'Not multiplanar'], a: 0,
    ex: 'MRI: high cost, long scanning time, contraindications (pacemaker, ear implant, claustrophobia). Radiation belongs to CT; MRI is multiplanar with excellent soft-tissue contrast.' },

  { t: 'c', id: 'H-C6', title: 'Choosing the modality for the question', src: 'H&N p.5–21',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Clinical question</th><th>First choice in the lecture</th><th>Why</th></tr></thead><tbody>' +
      '<tr><td>Simple skull fracture, foreign body</td><td>{{Plain film}} can help</td><td>Cheap, available, low dose</td></tr>' +
      '<tr><td>Screening for sinusitis</td><td>Plain {{Waters}} view</td><td>Shows the paranasal sinuses</td></tr>' +
      '<tr><td>Bony orbit, skull base, temporal bone, sinus anatomy</td><td>{{CT}} (bone window)</td><td>Fine bone, no superimposition</td></tr>' +
      '<tr><td>Complex facial fracture</td><td>CT with {{MPR and VRT}}</td><td>Plain films miss overlapping fragments</td></tr>' +
      '<tr><td>Optic pathway, soft tissue of face and neck</td><td>{{MRI}}</td><td>Best soft-tissue characterization</td></tr>' +
      '<tr><td>Vessels without contrast agent</td><td>MRI</td><td>Sensitive to {{blood flow}}</td></tr>' +
      '<tr><td>Pacemaker, ear implant, claustrophobia</td><td>Avoid MRI → {{CT}}</td><td>MRI contraindications</td></tr>' +
      '<tr><td>Child needing repeated soft-tissue imaging</td><td>MRI</td><td>{{No ionizing radiation}}</td></tr></tbody></table></div>' +
      '<p class="note">Ask two things: is the target <b>bone or air</b> (→ CT) or <b>soft tissue</b> (→ MRI)? Then check the patient: implant or claustrophobia rules MRI out; repeated studies in a child favour the modality without radiation.</p>' },
  { t: 'q', id: 'H24', src: 'H&N p.13, 21', core: true,
    q: 'A 60-year-old with a cardiac pacemaker has facial trauma and a suspected orbital floor fracture. Which study?',
    o: ['CT', 'MRI', 'MRI with contrast', 'Towne’s view', 'No imaging is possible'], a: 0,
    ex: 'Bony orbit → CT, and the pacemaker rules MRI out anyway.' },
  { t: 'q', id: 'H25', src: 'H&N p.6, 13, 20', core: true,
    q: 'Which pairing of question and first-choice modality fits the lecture?',
    o: ['Lesion along the optic pathway → MRI', 'Middle-ear ossicles and mastoid air cells → MRI', 'Sinus anatomy before surgery → Towne’s view', 'Base-of-skull fracture → plain skull AP', 'Neck mass in a claustrophobic patient → MRI'], a: 0,
    ex: 'Optic pathway → MRI. Temporal bone → CT; sinus anatomy → CT; base of skull → CT; claustrophobia is an MRI contraindication.' },
  { t: 'open', id: 'H26', src: 'H&N p.6, 14',
    q: 'Give one reason to start with a plain film and one reason to go straight to CT after a head injury.',
    ans: 'Plain film: low cost, wide availability, low dose and no patient cooperation needed, useful for a simple skull fracture or a foreign body. CT: plain films are two-dimensional and suboptimal for fractures of the base of skull and complex facial fractures; CT shows them in cross-section, with MPR and 3-D.' },
  { t: 'tf', id: 'H27', src: 'H&N p.21',
    q: 'For a child who needs repeated imaging of a neck soft-tissue mass, MRI has the advantage of no ionizing radiation.', a: true,
    ex: 'True. MRI gives the best soft-tissue detail and uses no ionizing radiation; CT would add dose with each study.' }
]});
