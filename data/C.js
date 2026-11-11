/* Section C: chest imaging and the plain chest film (RS radiology handout, slides 4–12). */
CVS.add({ id: 'C', short: 'Chest imaging', title: 'Chest imaging and the plain chest film', kind: 'Lecture',
  blurb: 'Radiographic densities, what CT and MRI add (with the three CT windows), and how PA, lateral and AP chest films are taken.',
  items: [
  { t: 'c', id: 'C-C1', title: 'Five densities, and what a chest film is for', src: 'RS p.4–5',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>X-rays are stopped in proportion to density, so a radiograph shows only {{five}} basic densities.</li>' +
      '<li>From white to black: {{metal}} → {{bone}} → {{soft tissue}} → {{fat}} → {{air}}.</li>' +
      '<li>The {{chest radiograph (CXR)}} is the initial assessment of common respiratory conditions: lungs, {{mediastinum}} and the {{bony thorax}}.</li>' +
      '<li>An edge is seen only where two different densities meet: the heart against lung ({{aerated lung}}) gives the cardiac outline.</li></ul>' +
      CVS.fig('rs-densities', 'The grey scale of a radiograph.', 'rs', 4) + '</div>' +
      CVS.fig('rs-cxr-pa', 'Normal PA chest radiograph.', 'rs', 5, 'tall') + '</div>' },
  { t: 'q', id: 'C1', src: 'RS p.4', core: true,
    q: 'Which order runs from <b>whitest to blackest</b> on a radiograph?',
    o: ['Metal → bone → soft tissue → fat → air', 'Bone → metal → soft tissue → air → fat', 'Metal → soft tissue → bone → fat → air', 'Bone → soft tissue → metal → fat → air', 'Metal → bone → fat → soft tissue → air'], a: 0,
    ex: 'The denser the material, the more X-rays it stops and the whiter it is: metal, bone, soft tissue, fat, air.' },
  { t: 'tf', id: 'C2', src: 'RS p.4',
    q: 'On a radiograph, fat looks darker than soft tissue but brighter than air.', a: true,
    ex: 'True: fat sits between soft tissue and air on the scale.' },
  { t: 'q', id: 'C3', src: 'RS p.4', core: true,
    q: 'What is the <b>initial</b> imaging for a common respiratory condition?',
    o: ['Chest radiograph', 'CT chest with contrast', 'MRI chest', 'CT with lung window only', 'No imaging until CT is available'], a: 0,
    ex: 'The CXR is the first look at the lungs, mediastinum and bony thorax; CT and MRI answer specific questions afterwards.' },
  { t: 'q', id: 'C4', src: 'AC81', core: true, keep: true,
    q: 'Which of the following has the highest density on a CT scan?',
    o: ['Manubrium', 'Cardiac valve', 'Lung parenchyma', 'Mediastinal pleura', 'Fat'], a: 0,
    ex: 'Bone stops the most X-rays, so the manubrium has the highest CT number (brightest). Soft tissue (valve, pleura) is next, then fat; aerated lung is darkest.' },
  { t: 'q', id: 'C5', src: 'AC79', keep: true,
    q: 'Which structure should have the darkest color in the PA chest film?',
    o: ['Heart', 'Ribs', 'Lung parenchyma', 'Diaphragm', 'Axillary fat'], a: 2,
    ex: 'Air stops the fewest X-rays, so aerated lung is the darkest. Fat is darker than soft tissue but still lighter than air.' },
  { t: 'c', id: 'C-C2', title: 'CT chest and its three windows', src: 'RS p.6–7',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Cross-sections with no overlap of structures, better spatial resolution, and contrast to show vascularity and vessels.</li>' +
      '<li>Used for: evaluation of {{consolidation}}; a pulmonary, {{hilar}} or mediastinal mass; diagnosis and {{staging of lung cancer}}; characterization of {{interstitial lung disease}}.</li></ul>' +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Window</th><th>Level (WL)</th><th>Width (WW)</th></tr></thead><tbody>' +
      '<tr><td><b>Lung</b></td><td class="num">{{−500}} HU</td><td class="num">{{1500}} HU</td></tr>' +
      '<tr><td><b>Bone</b></td><td class="num">{{+500}} HU</td><td class="num">{{2000}} HU</td></tr>' +
      '<tr><td><b>Mediastinum</b></td><td class="num">{{+50}} HU</td><td class="num">{{500}} HU</td></tr></tbody></table></div>' +
      '<p class="note">Range shown = level ± width/2. Below the range is black, above it is white. Lung: −1250 to +250; mediastinum: −200 to +300.</p></div>' +
      CVS.fig('rs-windows-img', 'One axial slice displayed in three windows (top, middle, bottom).', 'rs', 7, 'tall') + '</div>' },
  { t: 'q', id: 'C6', src: 'RS p.7', core: true,
    q: 'Which CT window has a level of <b>−500 HU</b> and a width of <b>1500 HU</b>?',
    o: ['Lung window', 'Bone window', 'Mediastinum window', 'Brain window', 'Soft tissue window of the neck'], a: 0,
    ex: 'Lung: WL −500, WW 1500. Bone: WL 500, WW 2000. Mediastinum: WL 50, WW 500.' },
  { t: 'q', id: 'C7', src: 'RS p.7',
    q: 'A window with level 50 HU and width 500 HU displays which range of CT numbers?',
    o: ['−200 to +300 HU', '−450 to +550 HU', '+50 to +550 HU', '−250 to +250 HU', '0 to +500 HU'], a: 0,
    ex: 'Range = level ± width/2 = 50 ± 250 = −200 to +300 HU: the mediastinum window.' },
  { t: 'q', id: 'C8', src: 'RS p.7', core: true,
    q: 'The same slice is shown in three windows. Which image is the <b>lung window</b>?', fig: CVS.fig('rs-windows-img', 'One axial slice in three windows.', 'rs', 7),
    o: ['Top', 'Middle', 'Bottom', 'None of them', 'All three are the same window'], a: 0, keep: true,
    ex: 'Only the top image shows the lung vessels and bronchi in grey lung; in the other two the lungs are black and the soft tissue is the subject.' },
  { t: 'q', id: 'C9', src: 'RS p.6', core: true,
    q: 'Which is <b>NOT</b> a use of CT chest listed in the lecture?',
    o: ['First test for every respiratory complaint', 'Evaluation of consolidation', 'Pulmonary, hilar or mediastinal mass', 'Diagnosis and staging of lung cancer', 'Characterization of interstitial lung disease'], a: 0,
    ex: 'The CXR is the first test. CT is used for consolidation, masses, lung cancer and interstitial lung disease.' },
  { t: 'c', id: 'C-C3', title: 'MRI of the chest, and choosing the test', src: 'RS p.4–8',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Excellent resolution and better {{soft tissue resolution}}.</li>' +
      '<li>Used for the {{heart}}, the mediastinum, the {{hilum}}, the {{diaphragm}} and the {{chest wall}}.</li>' +
      '<li>{{Limited}} evaluation of the {{lung parenchyma}}: the lung is mostly air.</li></ul>' +
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Question</th><th>Test</th></tr></thead><tbody>' +
      '<tr><td>First look at lungs, mediastinum, ribs</td><td>{{CXR}}</td></tr>' +
      '<tr><td>Consolidation, mass, lung cancer, interstitial disease</td><td>{{CT}}</td></tr>' +
      '<tr><td>Cardiac, mediastinal or chest-wall soft tissue</td><td>{{MRI}}</td></tr></tbody></table></div></div>' +
      CVS.fig('rs-mri', 'Oblique image through the aortic arch.', 'rs', 8) + '</div>' },
  { t: 'tf', id: 'C10', src: 'RS p.8', core: true,
    q: 'MRI is the preferred modality for the lung parenchyma.', a: false,
    ex: 'False. MRI is limited for lung parenchyma; it is used for the heart, mediastinum, hilum, diaphragm and chest wall. Lung parenchyma is CT territory.' },
  { t: 'q', id: 'C11', src: 'RS p.8',
    q: 'For which question is chest MRI listed as useful?',
    o: ['Heart, mediastinum, hilum, diaphragm and chest wall', 'Small lung nodules', 'Interstitial lung disease', 'Pneumothorax', 'Staging of every lung cancer instead of CT'], a: 0,
    ex: 'MRI is for soft tissue: heart, mediastinum, hilum, diaphragm, chest wall. Nodules, interstitial disease and staging are CT questions.' },
  { t: 'c', id: 'C-C4', title: 'The PA chest film', src: 'RS p.10',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>The beam travels {{posterior → anterior}}: the patient stands {{upright}} with the {{anterior chest against the image receptor}}.</li>' +
      '<li>Head vertical, chin on top of the grid.</li>' +
      '<li>Elbows rotated {{forward}} to move the {{scapulae}} laterally, off the lung fields.</li>' +
      '<li>Taken on {{full inspiration}}.</li></ul>' +
      '<p class="note">The heart sits close to the receptor, so on a PA film it is {{least magnified}}: this is the film for judging heart size.</p></div>' +
      CVS.fig('rs-pa-view', 'PA positioning and the resulting film.', 'rs', 10, 'tall') + '</div>' },
  { t: 'q', id: 'C12', src: 'RS p.10', core: true,
    q: 'Which description of a standard PA chest film is correct?',
    o: ['Upright, anterior chest against the receptor, full inspiration', 'Supine, beam from front to back, full inspiration', 'Upright, back against the receptor, full expiration', 'Upright, arms above the head, beam from right to left', 'Sitting in bed, portable machine in front'], a: 0,
    ex: 'PA: beam from behind, chest on the receptor, upright, full inspiration. The supine and bedside options describe AP films; the arms-up, right-to-left option is the lateral.' },
  { t: 'q', id: 'C13', src: 'RS p.10',
    q: 'Why are the elbows rotated forward for a PA film?',
    o: ['To move the scapulae laterally, off the lung fields', 'To raise the diaphragm', 'To reduce the radiation dose', 'To bring the heart closer to the receptor', 'To show the clavicles end-on'], a: 0,
    ex: 'Rolling the shoulders forward swings the scapulae out of the lung fields.' },
  { t: 'c', id: 'C-C5', title: 'Lateral and AP films', src: 'RS p.11–12',
    html: '<div class="cols2"><div class="mini"><h4>Lateral view</h4><ul><li>The {{lateral chest wall}} against the receptor (the left side on the slide’s film, marked L)</li><li>The beam crosses the chest from {{right to left}}</li><li>Arms {{above the head}} to move the upper limbs out of the way</li></ul></div>' +
      '<div class="mini"><h4>AP view</h4><ul><li>{{Supine or sitting}}; beam from front to back</li><li>For {{neonates, infants and very young children}}, debilitated or unstable patients, and the seriously ill or bed-ridden</li><li>Structures far from the receptor, such as the heart and mediastinum, are {{magnified}}: they are {{anterior}}</li></ul></div></div>' +
      '<div class="two">' + CVS.fig('rs-lat-view', 'Lateral positioning and the lateral film.', 'rs', 11) + CVS.fig('rs-ap-view', 'Supine AP positioning.', 'rs', 12) + '</div>' +
      '<p class="trap">A big heart on a supine or bedside film may be magnification only; heart size is judged on a {{PA}} film.</p>' },
  { t: 'tf', id: 'C14', src: 'RS p.11', core: true,
    q: 'For the lateral chest film the beam crosses the chest from right to left, with the arms raised above the head.', a: true,
    ex: 'True, as on the slide: lateral chest wall against the receptor, beam right to left, arms up.' },
  { t: 'q', id: 'C15', src: 'RS p.12', core: true,
    q: 'A ventilated ICU patient has a bedside chest film and the heart looks large. What is the most likely technical reason?',
    o: ['AP projection magnifies the heart, which is far from the receptor', 'The film is PA, which magnifies the heart', 'The lateral view was used', 'The film was taken on full inspiration', 'Metal from the ventilator tubing'], a: 0,
    ex: 'Bedside films are AP: the heart is anterior, far from the receptor at the back, so it is magnified.' },
  { t: 'q', id: 'C16', src: 'RS p.12',
    q: 'Which patient is the usual candidate for an AP rather than a PA chest film?',
    o: ['A neonate', 'A healthy adult who can stand', 'An outpatient for a routine check-up', 'An athlete with a cough', 'A student before a dormitory medical check'], a: 0,
    ex: 'AP films are for neonates, infants and very young children, and for debilitated, unstable, seriously ill or bed-ridden patients.' },
  { t: 'open', id: 'C17', src: 'RS p.10–12',
    q: 'Compare the PA and AP chest films: patient position, beam direction, and the effect on heart size.',
    ans: 'PA: upright, anterior chest against the receptor, beam from back to front, full inspiration; the heart is close to the receptor, so it is barely magnified. AP: supine or sitting, beam from front to back, used for children and sick or immobile patients; the heart is far from the receptor and appears magnified.' }
]});
