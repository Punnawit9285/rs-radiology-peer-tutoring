/* Section A: trachea, bronchi, lobes and fissures (RS radiology handout, slides 13–27 and 33–38). */
CVS.add({ id: 'A', short: 'Airways & lobes', title: 'Trachea, bronchi, lobes and fissures', kind: 'Lecture',
  blurb: 'The trachea and its numbers, right vs left main bronchus, the lobes and segments on film and CT, and the fissures that divide them.',
  items: [
  { t: 'c', id: 'A-C1', title: 'The trachea', src: 'RS p.14–16',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>A {{midline}} tube from the subglottic larynx ({{2 cm}} below the vocal cords) to the {{carina}}.</li>' +
      '<li>Average length {{12 cm}} (10–13 cm).</li>' +
      '<li>Diameters: transverse ♀ 10–21 mm, ♂ 13–25 mm; sagittal ♀ 10–23 mm, ♂ 13–27 mm.</li>' +
      '<li>{{16–20}} {{incomplete}} cartilage rings cover the {{anterior 2/3}} of the circumference; the {{posterior 1/3}} is the {{membranous portion}}.</li></ul>' +
      '<p class="note">On CXR the trachea is the dark air column over the upper spine (yellow dotted lines); on axial CT it is the round black lumen at the front of the upper mediastinum.</p></div>' +
      '<div class="stack">' + CVS.fig('rs-trachea-diagram', 'The trachea and main bronchi, with a ring in cross-section.', 'rs', 14) + CVS.fig('rs-trachea-cxr', 'The tracheal air column outlined on PA and lateral films.', 'rs', 15) + '</div></div>' },
  { t: 'q', id: 'A1', src: 'RS p.14', core: true,
    q: 'The trachea extends from:',
    o: ['The subglottic larynx (about 2 cm below the vocal cords) to the carina', 'The hyoid bone to the carina', 'The epiglottis to the segmental bronchi', 'The cricoid cartilage to the 12th thoracic vertebra', 'The vocal cords to the lobar bronchi'], a: 0,
    ex: 'The trachea starts at the subglottic larynx, about 2 cm below the vocal cords, and ends at the carina.' },
  { t: 'q', id: 'A2', src: 'RS p.14',
    q: 'The tracheal cartilage rings:',
    o: ['Are incomplete and cover the anterior two-thirds', 'Are complete circles', 'Cover the posterior two-thirds', 'Cover only the anterior one-third', 'Number 30–40'], a: 0,
    ex: '16–20 incomplete (C-shaped) rings make up the anterior 2/3; the posterior 1/3 is membranous.' },
  { t: 'tf', id: 'A3', src: 'RS p.14',
    q: 'The posterior one-third of the trachea is supported by complete cartilage rings.', a: false,
    ex: 'False. The rings are incomplete (C-shaped) on the anterior two-thirds; the posterior third is the membranous portion.' },
  { t: 'q', id: 'A4', src: 'RS p.14',
    q: 'What is the average length of the adult trachea in the lecture?',
    o: ['12 cm', '5 cm', '20 cm', '25 cm', '2 cm'], a: 0,
    ex: 'About 12 cm (range 10–13 cm).' },
  { t: 'c', id: 'A-C2', title: 'Carina and the main bronchi', src: 'RS p.17–20',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>{{Carina}}: the normal carinal angle is about {{60°}} (50–75°).</li>' +
      '<li><b>Right main bronchus</b>: {{shorter}} and more {{vertical}}. It gives off the {{right upper lobar bronchus}} early and continues as the {{bronchus intermedius}}.</li>' +
      '<li><b>Left main bronchus</b>: {{longer}} and more {{horizontal}}. It divides into the left upper and {{left lower lobar bronchi}}.</li>' +
      '<li>Below that: lobar → segmental bronchi → bronchioles → terminal bronchioles → the {{acinus}}.</li></ul>' +
      '<p class="trap">An inhaled foreign body most often goes down the steeper right side; in an upright patient aspiration favours the {{right lower lobe}}.</p></div>' +
      '<div class="stack">' + CVS.fig('rs-bronchi-cxr', 'The tracheal bifurcation and main bronchi on a PA film.', 'rs', 18) + CVS.fig('rs-bronchi-ct', 'The same structures on coronal CT, lung window.', 'rs', 19) + '</div></div>' },
  { t: 'q', id: 'A5', src: 'RS p.17', core: true,
    q: 'Compared with the left, the right main bronchus is:',
    o: ['Shorter and more vertical', 'Longer and more horizontal', 'Shorter and more horizontal', 'Longer and more vertical', 'The same length and angle'], a: 0,
    ex: 'Right: shorter, more vertical. Left: longer, more horizontal (it has to pass under the aortic arch to reach the left hilum).' },
  { t: 'q', id: 'A6', src: 'RS p.17', core: true,
    q: 'After giving off the right upper lobar bronchus, the right main bronchus continues as the:',
    o: ['Bronchus intermedius', 'Right lower lobar bronchus', 'Lingular bronchus', 'Right middle lobar bronchus', 'Carina'], a: 0,
    ex: 'The segment between the right upper lobar bronchus and the middle/lower lobe bronchi is the bronchus intermedius.' },
  { t: 'q', id: 'A7', src: 'RS p.18', core: true,
    q: 'On this PA chest film, what is label <b>3</b>?', fig: CVS.fig('rs-bronchi-num', 'PA chest film, labels replaced by numbers.', 'rs', 18),
    o: ['Right upper lobar bronchus', 'Bronchus intermedius', 'Right main bronchus', 'Carina', 'Left main bronchus'], a: 0,
    ex: 'Label 3 points to the short branch heading up and out from the right main bronchus: the right upper lobar bronchus.' },
  { t: 'q', id: 'A8', src: 'RS p.18',
    q: 'What is label <b>2</b>?', fig: CVS.fig('rs-bronchi-num', 'PA chest film, labels replaced by numbers.', 'rs', 18),
    o: ['Carina', 'Right main bronchus', 'Left main bronchus', 'Aortic arch', 'Bronchus intermedius'], a: 0,
    ex: 'Label 2 points to the point where the trachea divides: the carina.' },
  { t: 'q', id: 'A9', src: 'RS p.17',
    q: 'What is the normal carinal angle given in the lecture?',
    o: ['About 60° (50–75°)', 'About 20°', 'About 120°', 'About 180°', 'About 100–130°'], a: 0,
    ex: 'Normal carinal angle: 60°, range 50–75°.' },
  { t: 'c', id: 'A-C3', title: 'Lobes and segments, and how they overlap on the PA film', src: 'RS p.22–25',
    html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>Right lung</th><th>Left lung</th></tr></thead><tbody>' +
      '<tr><td>Lobes</td><td>{{3}}: upper, middle, lower</td><td>{{2}}: upper, lower</td></tr>' +
      '<tr><td>Fissures</td><td>Major (oblique) and minor (horizontal)</td><td>Oblique</td></tr>' +
      '<tr><td>Segments</td><td class="num">{{10}}</td><td class="num">{{8}}</td></tr></tbody></table></div>' +
      '<ul class="pts"><li>On the PA film the lobes overlap: the right lower lobe reaches high up {{behind}} the middle and upper lobes, and the left lower lobe does the same on the left.</li>' +
      '<li>So a shadow in the right lower zone on PA may be middle lobe or lower lobe: the {{lateral}} film separates front from back.</li>' +
      '<li>On the side view the middle lobe is the {{anterior, inferior wedge}} between the two right fissures.</li></ul></div>' +
      CVS.fig('rs-lobes-pa', 'The five lobes painted on a PA film: note the overlap.', 'rs', 25, 'tall') + '</div>' +
      CVS.fig('rs-lobes-right', 'Right lobes on PA and side views.', 'rs', 23) },
  { t: 'q', id: 'A10', src: 'RS p.22', core: true,
    q: 'How many lobes and bronchopulmonary segments does each lung have?',
    o: ['Right 3 lobes, 10 segments; left 2 lobes, 8 segments', 'Right 2 lobes, 8 segments; left 3 lobes, 10 segments', 'Right 3 lobes, 8 segments; left 2 lobes, 10 segments', 'Both 3 lobes, 10 segments', 'Right 3 lobes, 12 segments; left 2 lobes, 6 segments'], a: 0,
    ex: 'Right: RUL, RML, RLL, 10 segments. Left: LUL, LLL, 8 segments.' },
  { t: 'q', id: 'A11', src: 'RS p.23, 25', core: true,
    q: 'On a PA film, which lobes overlap in the right lower zone?',
    o: ['Right middle lobe in front and right lower lobe behind', 'Right upper lobe and right middle lobe', 'Right lower lobe only', 'Right middle lobe only', 'Right upper lobe and right lower lobe only'], a: 0,
    ex: 'The RLL reaches far up the back, so on PA it overlaps the RML (and the lower RUL). The lateral film separates them.' },
  { t: 'tf', id: 'A12', src: 'RS p.23', core: true,
    q: 'On the lateral film, the right middle lobe is an anterior, inferior wedge between the minor and major fissures.', a: true,
    ex: 'True: the minor fissure is its upper border and the major fissure its posterior border.' },
  { t: 'c', id: 'A-C4', title: 'Lobes on coronal and sagittal CT', src: 'RS p.26–27',
    html: '<div class="scanrow">' + CVS.fig('rs-lobes-ct-right', 'Right lobes on coronal and sagittal CT, lung window.', 'rs', 26) + CVS.fig('rs-lobes-ct-left', 'Left lobes on coronal and sagittal CT, lung window.', 'rs', 27) + '</div>' +
      '<ul class="pts"><li>Sagittal right: {{RUL}} on top, {{RML}} as the front wedge down to the front of the diaphragm, {{RLL}} filling the back and the whole back of the base.</li>' +
      '<li>Sagittal left: {{LUL}} in front and on top, {{LLL}} behind; the oblique fissure runs from high at the back to low at the front.</li>' +
      '<li>Coronal, front slice: the middle lobe lies against the {{right heart border}}; the lower lobes sit on the {{hemidiaphragms}}.</li>' +
      '<li>Rule of thumb: lower lobes are mostly {{posterior}}, the middle lobe and lingula mostly {{anterior}}. That decides which border a lesion hides (section P).</li></ul>' },
  { t: 'q', id: 'A13', src: 'RS p.27',
    q: 'On sagittal CT of the left lung, the left lower lobe lies:',
    o: ['Behind and below the oblique fissure', 'In front of and above the oblique fissure', 'Above the horizontal fissure', 'Only at the apex', 'Only in front of the heart'], a: 0,
    ex: 'The oblique fissure runs from high posteriorly to low anteriorly; the LLL is behind and below it, the LUL in front and above.' },
  { t: 'q', id: 'A14', src: 'RS p.26', core: true,
    q: 'On coronal CT, which right lobe lies against the right heart border?',
    o: ['Right middle lobe', 'Right upper lobe', 'Right lower lobe', 'None: the heart border touches only pleura', 'Azygos lobe'], a: 0,
    ex: 'The RML is anterior and medial, against the right heart border. This is why RML disease blurs that border.' },
  { t: 'c', id: 'A-C5', title: 'Fissures', src: 'RS p.33–38',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Fissure</th><th>Separates</th><th>Seen on</th></tr></thead><tbody>' +
      '<tr><td><b>Right major (oblique)</b></td><td>{{RUL and RML}} in front from {{RLL}} behind</td><td>Lateral film; CT</td></tr>' +
      '<tr><td><b>Right minor (horizontal)</b></td><td>{{RUL}} above from {{RML}} below</td><td>{{PA}} and lateral films; CT</td></tr>' +
      '<tr><td><b>Left oblique (major)</b></td><td>{{LUL}} from {{LLL}}</td><td>Lateral film; CT</td></tr></tbody></table></div>' +
      '<div class="two">' + CVS.fig('rs-fissures-right-xr', 'Right fissures on PA and lateral films (arrows).', 'rs', 34) + CVS.fig('rs-fissures-axial', 'Fissures on axial CT, lung window, with the explanatory diagram.', 'rs', 38) + '</div>' +
      '<p class="note">On axial CT the major fissures are thin oblique lines. The minor fissure lies almost in the scan plane, so it shows as a curved line {{in front of}} the major fissure, with the middle lobe between them.</p>' },
  { t: 'q', id: 'A15', src: 'RS p.33', core: true,
    q: 'The right minor (horizontal) fissure separates:',
    o: ['RUL from RML', 'RML from RLL', 'RUL from RLL', 'LUL from LLL', 'The lingula from the LUL'], a: 0,
    ex: 'Minor fissure: RUL above, RML below. Major fissure: RUL + RML in front, RLL behind.' },
  { t: 'q', id: 'A16', src: 'RS p.33',
    q: 'The right major (oblique) fissure separates:',
    o: ['RUL and RML from RLL', 'RUL from RML', 'RML from RUL only', 'RLL from the diaphragm', 'Right lung from left lung'], a: 0,
    ex: 'The major fissure has the RUL and RML in front of it and the RLL behind it.' },
  { t: 'q', id: 'A17', src: 'RS p.34–35', core: true,
    q: 'Which fissure is normally visible on a PA chest film?',
    o: ['Right minor fissure', 'Left oblique fissure', 'Right major fissure', 'All three', 'None of them'], a: 0,
    ex: 'On the slides only the right minor fissure is marked on PA; both major fissures are marked on the lateral film.' },
  { t: 'q', id: 'A18', src: 'RS p.38',
    q: 'On axial CT, the lobe lying between the minor fissure in front and the major fissure behind is the:',
    o: ['Right middle lobe', 'Right upper lobe', 'Right lower lobe', 'Lingula', 'Left lower lobe'], a: 0,
    ex: 'The RML lies between the two right fissures; the RLL is behind the major fissure.' }
]});
