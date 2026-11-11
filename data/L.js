/* Section L: pharynx and larynx (H&N radiology handout, slides 48–57). */
CVS.add({ id: 'L', short: 'Pharynx & larynx', title: 'Pharynx and larynx', kind: 'Lecture',
  blurb: 'The three parts of the pharynx and their borders, the nasopharyngeal recesses, the three levels of the larynx, and the lateral soft-tissue neck film.',
  items: [
  { t: 'c', id: 'L-C1', title: 'Pharynx: one tube, three parts', src: 'H&N p.49',
    html: '<div class="two"><div class="stack"><p>A {{fibromuscular}} tube from the {{skull base}} to the lower border of the {{cricoid cartilage}}, where it continues as the {{cervical esophagus}}.</p>' +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Part</th><th>From → to</th><th>Behind</th></tr></thead><tbody>' +
      '<tr><td><b>Nasopharynx</b></td><td>Top of the tube → {{soft palate}}</td><td>Nasal cavity</td></tr>' +
      '<tr><td><b>Oropharynx</b></td><td>End of the nasopharynx → {{valleculae and base of tongue}}, at the level of the {{hyoid bone}}</td><td>Mouth</td></tr>' +
      '<tr><td><b>Hypopharynx</b> (laryngopharynx)</td><td>{{Pharyngoepiglottic fold}} → start of the esophagus</td><td>Larynx</td></tr></tbody></table></div></div>' +
      '<div class="stack">' + CVS.fig('hn-pharynx-ct', 'Sagittal CT with contrast: the three parts coloured.', 'hn', 49) + CVS.fig('hn-pharynx-diagram', 'Sagittal drawing of the throat.', 'hn', 49) + '</div></div>' },
  { t: 'q', id: 'L1', src: 'H&N p.49', core: true,
    q: 'The pharynx ends, and the cervical esophagus begins, at the level of the:',
    o: ['Lower border of the cricoid cartilage', 'Hyoid bone', 'Vocal cords', 'Upper border of the thyroid cartilage', 'Carina'], a: 0,
    ex: 'The pharynx runs from the skull base to the lower border of the cricoid cartilage, where the cervical esophagus starts.' },
  { t: 'q', id: 'L2', src: 'H&N p.52', core: true,
    q: 'Which boundaries define the <b>oropharynx</b>?',
    o: ['Soft palate → valleculae and base of tongue (hyoid level)', 'Skull base → soft palate', 'Pharyngoepiglottic fold → inferior cricoid', 'Epiglottis → inferior cricoid', 'Nares → choanae'], a: 0,
    ex: 'Nasopharynx: skull base → soft palate. Oropharynx: soft palate → valleculae and base of tongue (hyoid). Hypopharynx: pharyngoepiglottic fold → inferior cricoid. Epiglottis → cricoid is the larynx.' },
  { t: 'tf', id: 'L3', src: 'H&N p.50',
    q: 'The nasopharynx extends from the skull base down to the soft palate.', a: true,
    ex: 'True. It sits behind the nasal cavity and ends at the soft palate.' },
  { t: 'c', id: 'L-C2', title: 'Nasopharynx: Eustachian tube, torus and Rosenmüller fossa', src: 'H&N p.50–51',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Lies behind the {{nasal cavity}}, from the skull base down to the {{soft palate}}.</li>' +
      '<li>A channel for {{air and secretions}} coming back from the nose.</li>' +
      '<li>Lateral wall on axial CT, front to back: the {{Eustachian tube opening}} → the {{torus tubarius}}, the bump of cartilage behind the opening → the {{fossa of Rosenmüller}}, the recess behind the torus.</li>' +
      '<li>Also on the slice: the {{pterygoid plates}} laterally, with the maxillary sinuses and inferior conchae in front.</li></ul>' +
      '<p class="note">Read the lateral wall like a word: opening, bump, pocket.</p></div>' +
      CVS.fig('hn-nasopharynx', 'Axial CT of the nasopharynx, soft tissue window, with labels.', 'hn', 51, 'tall') + '</div>' },
  { t: 'q', id: 'L4', src: 'H&N p.51', core: true,
    q: 'On this axial CT of the nasopharynx, what is label <b>7</b>?', fig: CVS.fig('hn-naso-num', 'Axial CT of the nasopharynx, labels replaced by numbers.', 'hn', 51),
    o: ['Fossa of Rosenmüller', 'Torus tubarius', 'Eustachian tube opening', 'Pterygoid plate', 'Nasal septum'], a: 0,
    ex: 'Label 7 points to the recess at the back of the lateral wall, behind the torus: the fossa of Rosenmüller.' },
  { t: 'q', id: 'L5', src: 'H&N p.51', core: true,
    q: 'What is label <b>6</b>?', fig: CVS.fig('hn-naso-num', 'Axial CT of the nasopharynx, labels replaced by numbers.', 'hn', 51),
    o: ['Torus tubarius', 'Fossa of Rosenmüller', 'Eustachian tube opening', 'Inferior nasal concha', 'Pterygoid plate'], a: 0,
    ex: 'Label 6 points to the soft-tissue bump between the tube opening (4) and the recess (7): the torus tubarius.' },
  { t: 'q', id: 'L6', src: 'H&N p.51',
    q: 'What is label <b>4</b>?', fig: CVS.fig('hn-naso-num', 'Axial CT of the nasopharynx, labels replaced by numbers.', 'hn', 51),
    o: ['Eustachian tube opening', 'Torus tubarius', 'Choana', 'Fossa of Rosenmüller', 'Maxillary sinus ostium'], a: 0,
    ex: 'Label 4 points to the opening at the front of the lateral wall: the Eustachian tube opening.' },
  { t: 'q', id: 'L7', src: 'H&N p.51',
    q: 'Along the lateral wall of the nasopharynx, from front to back, the order is:',
    o: ['Eustachian tube opening → torus tubarius → fossa of Rosenmüller', 'Torus tubarius → Eustachian tube opening → fossa of Rosenmüller', 'Fossa of Rosenmüller → torus tubarius → Eustachian tube opening', 'Eustachian tube opening → fossa of Rosenmüller → torus tubarius', 'Pterygoid plate → fossa of Rosenmüller → torus tubarius'], a: 0,
    ex: 'Opening, then the cartilage bump behind it (torus), then the recess behind the bump (Rosenmüller fossa).' },
  { t: 'c', id: 'L-C3', title: 'Oropharynx and hypopharynx', src: 'H&N p.52–53',
    html: '<div class="cols2"><div class="mini"><h4>Oropharynx</h4><ul><li>Continuation of the {{oral cavity}} and the nasopharynx</li><li>From the soft palate to the {{valleculae}} (tongue base), at the level of the {{hyoid bone}}</li><li>Each vallecula is the pocket between the {{base of tongue}} and the epiglottis</li></ul></div>' +
      '<div class="mini"><h4>Hypopharynx (laryngopharynx)</h4><ul><li>Continues from the oropharynx; lies behind the larynx and leads into the esophagus</li><li>From the {{pharyngoepiglottic fold}} to the cervical esophagus at the {{inferior aspect of the cricoid}}</li><li>{{Pyriform sinuses}}: the {{anterolateral}} recesses of the hypopharynx, one on each side of the larynx</li></ul></div></div>' +
      '<div class="two">' + CVS.fig('hn-oropharynx', 'Sagittal CT with contrast: the oropharynx coloured, with the vallecula.', 'hn', 52) + CVS.fig('hn-hypopharynx', 'Sagittal CT with contrast: the hypopharynx coloured, below the epiglottis.', 'hn', 53) + '</div>' },
  { t: 'q', id: 'L8', src: 'H&N p.53', core: true,
    q: 'The pyriform sinuses are the anterolateral recesses of the:',
    o: ['Hypopharynx', 'Oropharynx', 'Nasopharynx', 'Supraglottic larynx', 'Trachea'], a: 0,
    ex: 'The pyriform sinuses belong to the hypopharynx, one on each side of the larynx.' },
  { t: 'q', id: 'L9', src: 'H&N p.52',
    q: 'The vallecula lies between the:',
    o: ['Base of tongue and the epiglottis', 'Epiglottis and the vocal folds', 'Soft palate and the tongue', 'Torus tubarius and the Rosenmüller fossa', 'Arytenoid and the cricoid'], a: 0,
    ex: 'The vallecula is the pocket in front of the epiglottis, behind the base of the tongue; it marks the lower end of the oropharynx.' },
  { t: 'tf', id: 'L10', src: 'H&N p.53', core: true,
    q: 'The hypopharynx extends from the soft palate down to the level of the hyoid bone.', a: false,
    ex: 'False. Soft palate to the valleculae at the hyoid is the oropharynx. The hypopharynx runs from the pharyngoepiglottic fold to the inferior aspect of the cricoid.' },
  { t: 'c', id: 'L-C4', title: 'Larynx: supraglottis, glottis, subglottis', src: 'H&N p.54, 56–57',
    html: '<p>The larynx runs from the {{epiglottis}} to the {{inferior aspect of the cricoid cartilage}} and continues below as the {{trachea}}.</p>' +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Level</th><th>Extent</th><th>On CT</th></tr></thead><tbody>' +
      '<tr><td><b>Supraglottis</b></td><td>From the top of the larynx to the {{arytenoid}} cartilage, just above the vocal cords</td><td>The leaf on top, the {{vestibular (false) fold}}, the {{laryngeal ventricle}}</td></tr>' +
      '<tr><td><b>Glottis</b></td><td>The {{vocal folds}} and the opening between them</td><td>True cords</td></tr>' +
      '<tr><td><b>Subglottis</b></td><td>From just below the vocal cords to the windpipe</td><td>Inside the cricoid ring</td></tr></tbody></table></div>' +
      '<div class="two">' + CVS.fig('hn-larynx-sag', 'Sagittal CT with contrast through the larynx, with labels.', 'hn', 56) + CVS.fig('hn-larynx-cor', 'Coronal CT with contrast through the larynx, with labels.', 'hn', 57) + '</div>' +
      '<p class="trap">Top to bottom: false fold → ventricle (a thin air slit) → true fold. The {{pyriform recess}} beside the larynx on the coronal CT belongs to the hypopharynx, not the larynx.</p>' },
  { t: 'q', id: 'L11', src: 'H&N p.54', core: true,
    q: 'Which level of the larynx is made of the vocal folds and the opening between them?',
    o: ['Glottis', 'Supraglottis', 'Subglottis', 'Laryngeal vestibule', 'Pyriform recess'], a: 0,
    ex: 'Glottis = vocal folds and the opening. Supraglottis is above (epiglottis to arytenoid level), subglottis below (to the trachea).' },
  { t: 'q', id: 'L12', src: 'H&N p.56', core: true,
    q: 'On this sagittal CT, what is label <b>4</b>?', fig: CVS.fig('hn-larynx-num', 'Sagittal CT through the larynx, labels replaced by numbers.', 'hn', 56),
    o: ['Laryngeal ventricle', 'Vestibular fold', 'Vocal fold', 'Vallecula', 'Pyriform recess'], a: 0,
    ex: 'Label 4 points to the thin air slit between the fold above (2) and the fold below (6): the laryngeal ventricle.' },
  { t: 'q', id: 'L13', src: 'H&N p.56',
    q: 'What is label <b>2</b>?', fig: CVS.fig('hn-larynx-num', 'Sagittal CT through the larynx, labels replaced by numbers.', 'hn', 56),
    o: ['Vestibular (false) fold', 'Vocal (true) fold', 'Epiglottis', 'Arytenoid cartilage', 'Hyoid'], a: 0,
    ex: 'Label 2 is the upper of the two folds, above the ventricle: the vestibular fold.' },
  { t: 'q', id: 'L14', src: 'H&N p.56',
    q: 'What is label <b>5</b>?', fig: CVS.fig('hn-larynx-num', 'Sagittal CT through the larynx, labels replaced by numbers.', 'hn', 56),
    o: ['Cricoid cartilage', 'Arytenoid cartilage', 'Thyroid cartilage', 'Vertebral body', 'Esophagus'], a: 0,
    ex: 'Label 5 points to the dense ring at the back of the airway below the arytenoid (3): the cricoid cartilage.' },
  { t: 'tf', id: 'L15', src: 'H&N p.56–57', core: true,
    q: 'The laryngeal ventricle lies between the vestibular fold above and the vocal fold below.', a: true,
    ex: 'True: false fold, ventricle, true fold, from top to bottom.' },
  { t: 'q', id: 'L16', src: 'H&N p.54',
    q: 'The subglottis extends from:',
    o: ['Just below the vocal cords to the trachea', 'The epiglottis to the arytenoid cartilage', 'The vallecula to the epiglottis', 'The pharyngoepiglottic fold to the cricoid', 'The soft palate to the hyoid'], a: 0,
    ex: 'Subglottis: from just beneath the vocal cords to the trachea. Epiglottis to arytenoid is the supraglottis; pharyngoepiglottic fold to cricoid is the hypopharynx.' },
  { t: 'c', id: 'L-C5', title: 'The lateral soft-tissue neck radiograph', src: 'H&N p.55',
    html: '<div class="two">' + CVS.fig('hn-neck-lat', 'Lateral soft-tissue radiograph of the neck with labels.', 'hn', 55, 'tall') +
      '<div class="stack"><p>Air is black, so the airway shows as a dark column in front of the cervical spine. Read it from top to bottom:</p>' +
      '<ol class="steps"><li>{{Nasopharynx}}, behind the nose</li><li>{{Soft palate}}, hanging down and back</li><li>{{Oropharynx}}, behind the tongue</li><li>{{Vallecula}}, the small air pocket in front of the next item</li><li>{{Epiglottis}}, the curved leaf</li><li>{{Hypopharynx}}, behind the voice box</li><li>{{Larynx}}</li><li>{{Trachea}}</li></ol>' +
      '<p class="note">In front, the {{hyoid}} bone sits at about the level of step 4.</p></div></div>' },
  { t: 'q', id: 'L17', src: 'H&N p.55', core: true,
    q: 'On this lateral soft-tissue neck film, what is label <b>5</b>?', fig: CVS.fig('hn-neck-num', 'Lateral neck radiograph, labels replaced by numbers.', 'hn', 55),
    o: ['Epiglottis', 'Soft palate', 'Vallecula', 'Hyoid', 'Larynx'], a: 0,
    ex: 'Label 5 points to the curved leaf of soft tissue just below the vallecula: the epiglottis.' },
  { t: 'q', id: 'L18', src: 'H&N p.55',
    q: 'What is label <b>8</b>?', fig: CVS.fig('hn-neck-num', 'Lateral neck radiograph, labels replaced by numbers.', 'hn', 55),
    o: ['Hyoid', 'Epiglottis', 'Thyroid cartilage', 'Mandible', 'Vallecula'], a: 0,
    ex: 'Label 8 points to the small dense bone in front of the airway at the vallecula level: the hyoid.' },
  { t: 'q', id: 'L19', src: 'H&N p.55',
    q: 'What is label <b>4</b>?', fig: CVS.fig('hn-neck-num', 'Lateral neck radiograph, labels replaced by numbers.', 'hn', 55),
    o: ['Vallecula', 'Pyriform sinus', 'Laryngeal ventricle', 'Nasopharynx', 'Oropharynx'], a: 0,
    ex: 'Label 4 points to the small air pocket between the tongue base and the epiglottis: the vallecula.' },
  { t: 'open', id: 'L20', src: 'H&N p.55',
    q: 'List the airway segments you pass from top to bottom on a lateral soft-tissue neck film.',
    ans: 'Nasopharynx → (soft palate) → oropharynx → vallecula → epiglottis → hypopharynx → larynx → trachea. The hyoid lies in front at about the level of the vallecula.' }
]});
