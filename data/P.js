/* Section P: silhouette sign and the pleura (RS radiology handout, slides 28–31, 33 and 39–43). */
CVS.add({ id: 'P', short: 'Silhouette & pleura', title: 'Silhouette sign and the pleura', kind: 'Lecture',
  blurb: 'Which border each lobe hides, lobar pneumonia on CXR, and the pleura: effusion, pneumothorax and pleural plaque.',
  items: [
  { t: 'c', id: 'P-C1', title: 'The silhouette sign', src: 'RS p.28–29',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>The border of a soft-tissue structure (heart, aorta, diaphragm) is seen only because {{air-filled lung}} lies against it.</li>' +
      '<li>When something of {{soft-tissue density}} lies right against that structure (consolidation, a mass, fluid), the border {{disappears}}.</li>' +
      '<li>So the {{loss of a specific contour}} places the abnormality in the lobe that {{touches}} that contour.</li>' +
      '<li>A lesion that only overlaps the border on the film, but lies in front of or behind it, leaves the border {{visible}}.</li></ul>' +
      '<p class="note">Slide examples: a mass that blurs the right heart border lies in the {{RML}}, which lies against the heart in front (sagittal CT); a mass that blurs the left hemidiaphragm lies in the {{LLL}}.</p></div>' +
      '<div class="stack">' + CVS.fig('rs-silhouette', 'Two masses, two lost borders.', 'rs', 28) + CVS.fig('rs-silhouette-rml', 'Why the right heart border goes: where the middle lobe sits.', 'rs', 29) + '</div></div>' },
  { t: 'q', id: 'P1', src: 'RS p.28', core: true,
    q: 'What causes the silhouette sign?',
    o: ['Soft-tissue density touching a soft-tissue structure removes the air interface, so its border vanishes', 'Calcium in the lesion makes the border brighter', 'The lesion lies in front of the heart and is magnified', 'Fat between the lung and the heart', 'Overexposure of the film'], a: 0,
    ex: 'Borders exist only where air meets soft tissue. Fill the lung next to the heart or diaphragm with fluid or tissue and the two soft-tissue densities merge.' },
  { t: 'tf', id: 'P2', src: 'RS p.28–29', core: true,
    q: 'A right lower-zone opacity that leaves the right heart border sharp is more likely in the RLL than in the RML.', a: true,
    ex: 'True. The RML touches the right heart border in front; the RLL lies behind, so it overlaps the border without touching it.' },
  { t: 'c', id: 'P-C2', title: 'Silhouette map: which border, which lobe', src: 'RS p.30',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Border lost on the PA film</th><th>Lobe in contact</th></tr></thead><tbody>' +
      '<tr><td>Right paratracheal stripe</td><td>{{RUL}}</td></tr>' +
      '<tr><td>Azygos arch</td><td>{{Right upper lobe}}</td></tr>' +
      '<tr><td>Right heart border</td><td>{{RML}}</td></tr>' +
      '<tr><td>Right hemidiaphragm</td><td>{{RLL}}</td></tr>' +
      '<tr><td>Aortic arch (knob)</td><td>{{LUL}}</td></tr>' +
      '<tr><td>Left heart border</td><td>{{Lingula}} (part of the left upper lobe)</td></tr>' +
      '<tr><td>Descending aorta</td><td>{{LLL}}</td></tr>' +
      '<tr><td>Left hemidiaphragm</td><td>{{Left lower lobe}}</td></tr></tbody></table></div>' +
      '<details class="figans"><summary>The slide’s map (shows the answers)</summary>' + CVS.fig('rs-silhouette-map', 'Silhouette map: each border and its lobe.', 'rs', 30) + '</details>' +
      '<p class="note">Pattern: upper lobes own the upper mediastinal contours, the middle lobe and its left-sided partner own the heart borders, the lower lobes own the hemidiaphragms (and on the left, the descending aorta).</p>' },
  { t: 'q', id: 'P3', src: 'RS p.30', core: true,
    q: 'Loss of the <b>right heart border</b> on a PA film points to disease in the:',
    o: ['Right middle lobe', 'Right lower lobe', 'Right upper lobe', 'Lingula', 'Left lower lobe'], a: 0,
    ex: 'The RML touches the right heart border. RLL disease hides the right hemidiaphragm instead.' },
  { t: 'q', id: 'P4', src: 'RS p.30', core: true,
    q: 'The <b>left hemidiaphragm</b> is lost but the left heart border is sharp. Which lobe?',
    o: ['Left lower lobe', 'Lingula', 'Left upper lobe (non-lingular part)', 'Right lower lobe', 'Right middle lobe'], a: 0,
    ex: 'The LLL sits on the left hemidiaphragm and behind the heart; the lingula would blur the left heart border.' },
  { t: 'q', id: 'P5', src: 'RS p.30',
    q: 'Loss of the <b>aortic arch (knob)</b> contour points to the:',
    o: ['Left upper lobe', 'Left lower lobe', 'Lingula', 'Right upper lobe', 'Right middle lobe'], a: 0,
    ex: 'The aortic arch is outlined by the LUL.' },
  { t: 'q', id: 'P6', src: 'RS p.30',
    q: 'Lingular pneumonia hides which border?',
    o: ['Left heart border', 'Left hemidiaphragm', 'Aortic arch', 'Descending aorta', 'Right heart border'], a: 0,
    ex: 'The lingula is the anterior part of the LUL lying against the left heart border.' },
  { t: 'q', id: 'P7', src: 'RS p.30–31',
    q: 'The <b>right paratracheal stripe</b> is obscured by disease in the:',
    o: ['Right upper lobe', 'Right middle lobe', 'Right lower lobe', 'Left upper lobe', 'Lingula'], a: 0,
    ex: 'The right paratracheal stripe and the azygos arch are outlined by the RUL.' },
  { t: 'q', id: 'P8', src: 'RS p.30',
    q: 'The outline of the <b>descending aorta</b> behind the heart is lost. Which lobe?',
    o: ['Left lower lobe', 'Left upper lobe', 'Lingula', 'Right lower lobe', 'Right middle lobe'], a: 0,
    ex: 'The descending aorta is posterior and is outlined by the LLL.' },
  { t: 'q', id: 'P9', src: 'AC80 · AC81', core: true, keep: true,
    q: 'A patient presents with a mass located in the lingula. On chest X-ray, the margin of the lingula is not visible. Which of the following structures will the lesion most likely blend with?',
    o: ['Left heart border', 'Aortic arch', 'Left hemidiaphragm', 'Descending aorta'], a: 0,
    ex: 'The lingula touches the left heart border, so disease there erases that border (silhouette sign). The aortic arch goes with the LUL, the descending aorta and left hemidiaphragm with the LLL.',
    flag: 'AC81 asked it as “Lingula pneumonia silhouette with?” (left heart border).' },
  { t: 'q', id: 'P10', src: 'AC79', core: true, keep: true,
    q: 'A patient presents with worsening fever, malaise with persistent coughing. Chest examination reveals dullness on percussion with crackles and bronchial breath sounds. PA chest film reveals a mass that obliterates line A while line B is clearly visible. Which is the affected structure in this patient?',
    fig: CVS.fig('ac79-lingula', 'AC79: PA chest film with line A (left heart border) and line B (left hemidiaphragm) drawn in.', 'ac79', 6),
    o: ['Right middle lobe of lung', 'Right upper lobe of lung', 'Right lower lobe of lung', 'Lingula of left upper lobe', 'Left lower lobe of lung'], a: 3,
    ex: 'Line A is the left heart border and line B the left hemidiaphragm. Losing A but keeping B places the lesion in the lingula, which touches the heart, not in the LLL, which sits on the diaphragm.',
    flag: 'PS81 edit keys D. The recall wrote “bronchial breath sounds on percussion”; it means on auscultation.' },
  { t: 'c', id: 'P-C3', title: 'Lobar pneumonia: three classic films', src: 'RS p.31',
    html: CVS.fig('rs-pneumonia', 'Right upper, right middle and left lower lobe pneumonia, with the borders they hide.', 'rs', 31) +
      '<ul class="pts"><li><b>RUL</b>: a dense right upper zone; the {{right paratracheal stripe}} is lost, and the lower edge of the opacity is the {{minor fissure}}.</li>' +
      '<li><b>RML</b>: a hazy right lower zone with {{loss of the right heart border}}, while the right hemidiaphragm stays {{visible}}; on the side view, a {{wedge}} low and in front.</li>' +
      '<li><b>LLL</b>: an opacity behind the heart; the {{left hemidiaphragm}} is lost while the {{left heart border}} stays sharp.</li></ul>' },
  { t: 'q', id: 'P11', src: 'RS p.31', core: true,
    q: 'Which lobe is consolidated (arrows)?', fig: CVS.fig('rs-pneu-b', 'PA and lateral chest films of a patient with fever and cough.', 'rs', 31),
    o: ['Right middle lobe', 'Right lower lobe', 'Right upper lobe', 'Left lower lobe', 'Lingula'], a: 0,
    ex: 'The right heart border is lost on PA, and the lateral shows a wedge in front, low down: RML.' },
  { t: 'q', id: 'P12', src: 'RS p.31', core: true,
    q: 'Which lobe is consolidated (arrow)?', fig: CVS.fig('rs-pneu-c', 'PA chest film of a patient with fever and cough.', 'rs', 31),
    o: ['Left lower lobe', 'Lingula', 'Left upper lobe', 'Right lower lobe', 'Right middle lobe'], a: 0,
    ex: 'The opacity is behind the heart and the left hemidiaphragm is lost, while the left heart border stays sharp: LLL.' },
  { t: 'q', id: 'P13', src: 'RS p.31',
    q: 'Which lobe is consolidated (arrow)?', fig: CVS.fig('rs-pneu-a', 'PA chest film of a patient with fever and cough.', 'rs', 31),
    o: ['Right upper lobe', 'Right middle lobe', 'Right lower lobe', 'Left upper lobe', 'Azygos lobe'], a: 0,
    ex: 'Dense right upper zone, paratracheal stripe lost, sharp lower edge along the minor fissure: RUL.' },
  { t: 'c', id: 'P-C4', title: 'Pleura and the pleural cavity', src: 'RS p.33, 39',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>A thin continuous membrane in two layers: the {{parietal}} pleura lines the chest wall, the {{visceral}} pleura covers the lung.</li>' +
      '<li>The {{pleural cavity}} is a {{potential space}} between the two layers.</li>' +
      '<li>Normal pleura {{cannot be delineated}} on CXR or CT. The fissures are where the lung-covering layers of two lobes meet.</li></ul>' +
      '<p class="note">Fill this space with {{fluid}} and you get an effusion; with {{air}}, a pneumothorax.</p></div>' +
      CVS.fig('rs-pleura-diagram', 'The two pleural layers and the space between them.', 'rs', 39) + '</div>' },
  { t: 'q', id: 'P14', src: 'RS p.39', core: true,
    q: 'The pleural cavity is:',
    o: ['A potential space between the parietal and visceral pleura', 'The space inside the alveoli', 'The space between the lung and the heart', 'The mediastinum', 'A fluid-filled space normally seen on CXR'], a: 0,
    ex: 'Normally the two layers glide on a thin film of fluid: a potential space, not visible on imaging.' },
  { t: 'tf', id: 'P15', src: 'RS p.33',
    q: 'Normal pleura can be seen as a separate line along the chest wall on CXR and CT.', a: false,
    ex: 'False. Normal pleura cannot be delineated; a visible pleural line at the lung edge is a sign of pneumothorax.' },
  { t: 'c', id: 'P-C5', title: 'Pleural effusion and pneumothorax', src: 'RS p.40–42',
    html: '<div class="cols2"><div class="mini ven"><h4>Pleural effusion</h4><ul><li>Abnormal accumulation of {{fluid}} in the pleural space</li><li>Early sign on an upright film: {{blunting of the costophrenic angle}}</li><li>Water has soft-tissue density, so it hides the {{hemidiaphragm}} it lies on</li></ul></div>' +
      '<div class="mini art"><h4>Pneumothorax</h4><ul><li>{{Air}} in the pleural space</li><li>Sign: a visible {{visceral pleural line}} at the edge of the lung</li><li>{{No lung markings}} beyond that line</li></ul></div></div>' +
      '<div class="two">' + CVS.fig('rs-effusion', 'Right pleural effusion.', 'rs', 40) + CVS.fig('rs-ptx-line', 'Right pneumothorax: the pleural line (arrows).', 'rs', 42) + '</div>' },
  { t: 'q', id: 'P16', src: 'RS p.40', core: true,
    q: 'What does this upright film show (arrows)?', fig: CVS.fig('rs-effusion-q', 'Upright PA chest film.', 'rs', 40),
    o: ['Right pleural effusion', 'Right pneumothorax', 'Right middle lobe pneumonia', 'Pleural plaque', 'Hiatal hernia'], a: 0,
    ex: 'The right costophrenic angle is blunted by a meniscus of fluid: pleural effusion.' },
  { t: 'q', id: 'P17', src: 'RS p.41', core: true,
    q: 'What does this film show (arrows)?', fig: CVS.fig('rs-ptx-q', 'PA chest film.', 'rs', 41),
    o: ['Right pneumothorax', 'Right pleural effusion', 'Right upper lobe pneumonia', 'Pleural plaque', 'Normal film'], a: 0,
    ex: 'A thin visceral pleural line is visible on the right with no lung markings outside it: pneumothorax.' },
  { t: 'q', id: 'P18', src: 'RS p.42',
    q: 'The key sign of pneumothorax on a chest film is:',
    o: ['A visible visceral pleural line at the edge of the lung', 'Blunting of the costophrenic angle', 'Loss of the right heart border', 'Calcified plaques on the diaphragm', 'A widened mediastinum'], a: 0,
    ex: 'Air separates the visceral pleura from the chest wall, so the pleural line becomes visible, with no lung markings beyond it.' },
  { t: 'q', id: 'P19', src: 'AC80', core: true, keep: true,
    q: 'A patient presents to the emergency room with difficulty breathing after being stabbed on the right side. A physical examination reveals decreased breath sounds on the right. The patient’s chest X-ray (CXR) is shown. Based on the CXR and the patient’s symptoms, what is the most likely diagnosis?',
    fig: CVS.fig('ac80-cxr', 'AC80: PA chest film.', 'ac80', 12),
    o: ['Hemothorax', 'Pneumothorax', 'Normal chest x-ray', 'Pleural effusion', 'Fracture of rib'], a: 1,
    ex: 'The right hemithorax lacks lung markings at its edge compared with the left, the sign of air in the pleural space: a right pneumothorax (AC80 key).' },
  { t: 'q', id: 'P20', src: 'AC80', keep: true,
    q: 'Regarding the previous chest X-ray, which part of the lung does the pleural effusion affect?',
    o: ['Cardiophrenic recess', 'Costophrenic recess', 'Hilum'], a: 1,
    ex: 'In an upright patient fluid first collects in the lowest lateral corner of the pleural cavity, blunting the costophrenic angle (RS p.40).',
    flag: 'The CXR and the key for this item were not recalled; the answer follows the lecture (blunting of the costophrenic angle, RS p.40).' },
  { t: 'q', id: 'P21', src: 'AC79 (clinical correlation)', keep: true,
    q: 'A man has been stabbed into his chest and bleeds. According to his PA chest radiography film below, what is the most likely condition?',
    fig: CVS.fig('ac79-hemothorax', 'AC79: PA chest film.', 'ac79', 14),
    o: ['Pneumothorax', 'Hemothorax', 'Pneumonia', 'Lung cancer', 'Normal PA chest imaging'], a: 1,
    ex: 'Blood in the pleural space behaves like an effusion: soft-tissue density at the base that blunts the costophrenic angle. With a stab wound and bleeding, that is a hemothorax.' },
  { t: 'c', id: 'P-C6', title: 'Pleural plaque', src: 'RS p.43',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Thickening and {{calcification}} of the {{parietal}} pleura.</li>' +
      '<li>Caused by inhaled {{asbestos}}.</li>' +
      '<li>Seen face-on as irregular patchy shadows over the lungs, and in profile as thick dense lines along the {{chest wall}} and the {{diaphragm}}.</li></ul>' +
      '<p class="note">Plaques mark exposure. They are not the lung disease itself.</p></div>' +
      CVS.fig('rs-plaque', 'Pleural plaques: drawing and chest film.', 'rs', 43) + '</div>' },
  { t: 'q', id: 'P22', src: 'RS p.43', core: true,
    q: 'A retired shipyard worker has this film. What exposure explains it?', fig: CVS.fig('rs-plaque-q', 'PA chest film.', 'rs', 43),
    o: ['Asbestos', 'Silica', 'Coal dust', 'Tuberculosis', 'Cigarette smoke'], a: 0,
    ex: 'Calcified thickening of the parietal pleura along the chest wall and diaphragm: pleural plaques from asbestos.' },
  { t: 'q', id: 'P23', src: 'RS p.43',
    q: 'Pleural plaques involve the:',
    o: ['Parietal pleura', 'Visceral pleura only', 'Lung parenchyma', 'Pericardium', 'Fissures only'], a: 0,
    ex: 'Plaques are thickening and calcification of the parietal pleura.' },
  { t: 'open', id: 'P24', src: 'RS p.40–42',
    q: 'On an upright chest film, how do you tell a pleural effusion from a pneumothorax?',
    ans: 'Effusion is fluid: soft-tissue density at the base, blunting of the costophrenic angle, hiding the hemidiaphragm. Pneumothorax is air: a visible visceral pleural line at the lung edge with no lung markings beyond it.' }
]});
