/* Section M: hilum, mediastinum, diaphragm and chest wall (RS radiology handout, slides 44–61). */
CVS.add({ id: 'M', short: 'Mediastinum & wall', title: 'Hilum, mediastinum, diaphragm and chest wall', kind: 'Lecture',
  blurb: 'What makes up the hilum, the mediastinal compartments and the masses in each, the diaphragm and its openings, and the chest wall.',
  items: [
  { t: 'c', id: 'M-C1', title: 'The pulmonary hilum', src: 'RS p.45',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>The {{root of the lung}}.</li>' +
      '<li>Made of the {{pulmonary artery}}, the {{pulmonary vein}}, the {{bronchus}} and {{lymph nodes}}.</li>' +
      '<li>Usually the {{left}} hilum sits {{higher}} than the right (red vs teal on the film).</li></ul>' +
      '<p class="note">On a PA film the hilar shadow is mostly vessels. A big or dense hilum raises the question of large vessels or nodes, which CT then separates.</p></div>' +
      CVS.fig('rs-hilum', 'The two hila marked on a PA film.', 'rs', 45) + '</div>' },
  { t: 'q', id: 'M1', src: 'RS p.45', core: true,
    q: 'The pulmonary hilum is made up of all of the following <b>EXCEPT</b>:',
    o: ['Thoracic duct', 'Pulmonary artery', 'Pulmonary vein', 'Bronchus', 'Lymph nodes'], a: 0,
    ex: 'Hilum = pulmonary artery, pulmonary vein, bronchus, lymph nodes. The thoracic duct runs in the posterior mediastinum.' },
  { t: 'tf', id: 'M2', src: 'RS p.45', core: true,
    q: 'Normally the left hilum is higher than the right.', a: true,
    ex: 'True: the left pulmonary artery arches over the left main bronchus, so the left hilum sits higher.' },

  { t: 'c', id: 'M-C2', title: 'The mediastinum: borders and the plane of Ludwig', src: 'RS p.47',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>The space between the two lungs and their {{pleural spaces}}.</li>' +
      '<li>From the {{sternum}} in front to the {{thoracic spine}} behind, and from the {{thoracic inlet}} above to the {{diaphragm}} below.</li>' +
      '<li>The anatomic division: the {{plane of Ludwig}} (yellow line, from the sternal angle back to the T4–T5 level) separates the {{superior}} from the {{inferior}} mediastinum; the lower part is divided into anterior, middle and posterior.</li></ul></div>' +
      CVS.fig('rs-mediastinum-sag', 'Sagittal drawing and sagittal CT with the dividing plane in yellow.', 'rs', 47) + '</div>' },
  { t: 'q', id: 'M3', src: 'RS p.47', core: true,
    q: 'The plane of Ludwig divides the:',
    o: ['Superior from the inferior mediastinum', 'Anterior from the middle mediastinum', 'Middle from the posterior mediastinum', 'Thorax from the abdomen', 'Right from the left pleural cavity'], a: 0,
    ex: 'The plane through the sternal angle and about T4–T5 separates the superior from the inferior mediastinum in the anatomic scheme.' },
  { t: 'q', id: 'M4', src: 'RS p.47',
    q: 'Which pair gives the front-to-back limits of the mediastinum?',
    o: ['Sternum and thoracic spine', 'Ribs and scapulae', 'Heart and esophagus', 'Pericardium and trachea', 'Clavicles and diaphragm'], a: 0,
    ex: 'Front to back: sternum to thoracic spine. Top to bottom: thoracic inlet to diaphragm.' },

  { t: 'c', id: 'M-C3', title: 'Mediastinal compartments (modified anatomic scheme)', src: 'RS p.48–52',
    html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Compartment</th><th>Boundaries</th><th>Contents</th></tr></thead><tbody>' +
      '<tr><td><b>Anterior</b></td><td>From the {{sternum}} back to the pericardium, aorta and brachiocephalic vessels (in front of the {{pericardium, ascending aorta and SVC}})</td><td>{{Thymus}}, lymph nodes, adipose tissue, internal mammary vessels</td></tr>' +
      '<tr><td><b>Middle</b></td><td>From the pericardium in front to the pericardium and the {{posterior tracheal wall}} behind</td><td>Heart and pericardium; ascending aorta, aortic arch, SVC, IVC, brachiocephalic and pulmonary vessels; {{trachea and main bronchi}}; lymph nodes; phrenic, vagus and {{left recurrent laryngeal}} nerves</td></tr>' +
      '<tr><td><b>Posterior</b></td><td>From the back of the central compartment to the {{vertebral column}}: retrocardiac and paravertebral</td><td>{{Esophagus}}, {{descending aorta}}, {{azygos and hemiazygos veins}}, thoracic duct, vagus and splanchnic nerves, lymph nodes, fat</td></tr></tbody></table></div>' +
      '<div class="two">' + CVS.fig('rs-compartments', 'The three compartments on a sagittal drawing.', 'rs', 48) + CVS.fig('rs-mid-med', 'Contents of the central compartment on axial CT with contrast.', 'rs', 51) + '</div>' +
      '<p class="trap">This scheme has no superior compartment: the aortic arch and the trachea sit in the central compartment. It exists to build a {{differential diagnosis}} for a mass.</p>' },
  { t: 'q', id: 'M5', src: 'RS p.49', core: true,
    q: 'In the modified anatomic scheme, the thymus lies in the:',
    o: ['Anterior mediastinum', 'Middle mediastinum', 'Posterior mediastinum', 'Superior mediastinum only', 'Paravertebral space'], a: 0,
    ex: 'The anterior compartment holds the thymus, lymph nodes, fat and the internal mammary vessels.' },
  { t: 'q', id: 'M6', src: 'RS p.50', core: true,
    q: 'Which lies in the <b>middle</b> mediastinum in the modified scheme?',
    o: ['Trachea and main bronchi', 'Thymus', 'Esophagus', 'Descending aorta', 'Azygos vein'], a: 0,
    ex: 'Middle: heart, great vessels, trachea and main bronchi, nodes, phrenic, vagus and left recurrent laryngeal nerves. Esophagus, descending aorta and azygos are posterior.' },
  { t: 'q', id: 'M7', src: 'RS p.52',
    q: 'Which is a content of the <b>posterior</b> mediastinum?',
    o: ['Azygos vein', 'Thymus', 'Superior vena cava', 'Trachea', 'Heart'], a: 0,
    ex: 'Posterior: esophagus, descending aorta, azygos and hemiazygos veins, thoracic duct, nerves, nodes, fat.' },
  { t: 'q', id: 'M8', src: 'RS p.51', core: true,
    q: 'On this axial CT with contrast, what is label <b>3</b>?', fig: CVS.fig('rs-midmed-num', 'Axial CT with contrast at two levels, labels replaced by numbers.', 'rs', 51),
    o: ['Superior vena cava', 'Ascending aorta', 'Right pulmonary artery', 'Azygos vein', 'Right main bronchus'], a: 0,
    ex: 'Label 3 is the round vessel on the patient’s right (image left) of the ascending aorta (1): the SVC.' },
  { t: 'q', id: 'M9', src: 'RS p.51',
    q: 'What is label <b>2</b>?', fig: CVS.fig('rs-midmed-num', 'Axial CT with contrast at two levels, labels replaced by numbers.', 'rs', 51),
    o: ['Left pulmonary artery', 'Descending aorta', 'Left main bronchus', 'Left pulmonary vein', 'Aortic arch'], a: 0,
    ex: 'Label 2 is the vessel curving over the left main bronchus toward the left hilum: the left pulmonary artery.' },
  { t: 'tf', id: 'M10', src: 'RS p.50', core: true,
    q: 'In the modified scheme, the back border of the middle mediastinum is the pericardium and the posterior tracheal wall.', a: true,
    ex: 'True. Behind that line is the posterior mediastinum.' },

  { t: 'c', id: 'M-C4', title: 'Mediastinal masses by compartment', src: 'RS p.53',
    html: '<div class="cols3"><div class="mini art"><h4>Anterior</h4><ul><li>Prevascular: lymphadenopathy, {{retrosternal goiter}}, {{thymic lesions}} (thymoma, carcinoma, hyperplasia, cysts, thymolipoma), {{germ cell tumor}}</li><li>Precardiac, on the diaphragm: epicardial fat pad, diaphragmatic hump, Morgagni hernia, pleuropericardial cyst*, node enlargement</li><li>Rare: lymphatic malformations, hemangiomas</li></ul></div>' +
      '<div class="mini"><h4>Middle</h4><ul><li>Lymphadenopathy</li><li>{{Aortic arch aneurysm}}</li><li>{{Enlarged pulmonary artery}}</li><li>Foregut duplication cysts (bronchogenic, esophageal, neurenteric)</li><li>{{Pericardial cyst}}</li><li>Tracheal lesions</li></ul></div>' +
      '<div class="mini ven"><h4>Posterior</h4><ul><li>Esophageal lesions, {{hiatal hernia}}</li><li>Foregut duplication cyst</li><li>Descending aortic aneurysm</li><li>{{Neurogenic tumor}}</li><li>Paraspinal abscess</li><li>Lateral meningocele</li><li>Extramedullary hematopoiesis</li></ul></div></div>' +
      '<details class="figans"><summary>The source tables (show the answers)</summary>' + CVS.fig('rs-masses', 'Tables 1–3 from Whitten et al., RadioGraphics 2007.', 'rs', 53) + '</details>' +
      '<p class="note">* Some schemes put pleuropericardial cysts in the middle mediastinum. First decide the compartment, then read down its list: the list is the differential.</p>' },
  { t: 'q', id: 'M11', src: 'RS p.53', core: true,
    q: 'Which lesion is on the lecture’s list of <b>anterior</b> mediastinal masses?',
    o: ['Thymoma', 'Neurogenic tumor', 'Hiatal hernia', 'Descending aortic aneurysm', 'Paraspinal abscess'], a: 0,
    ex: 'Anterior (prevascular): nodes, retrosternal goiter, thymic lesions, germ cell tumor. The others are posterior.' },
  { t: 'q', id: 'M12', src: 'RS p.53', core: true,
    q: 'A <b>paravertebral</b> (posterior mediastinal) mass in a young adult is most likely which lesion on the list?',
    o: ['Neurogenic tumor', 'Thymoma', 'Retrosternal goiter', 'Germ cell tumor', 'Pericardial cyst'], a: 0,
    ex: 'Neurogenic tumors arise from nerves beside the spine: posterior compartment. Thymoma, goiter and germ cell tumor are anterior; pericardial cyst is middle.' },
  { t: 'q', id: 'M13', src: 'RS p.53',
    q: 'Which lesion is on the <b>middle</b> mediastinal list?',
    o: ['Enlarged pulmonary artery', 'Thymoma', 'Neurogenic tumor', 'Hiatal hernia', 'Retrosternal goiter'], a: 0,
    ex: 'Middle: nodes, aortic arch aneurysm, enlarged pulmonary artery, foregut duplication cysts, pericardial cyst, tracheal lesions.' },

  { t: 'c', id: 'M-C5', title: 'The diaphragm and its openings', src: 'RS p.55–58',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Separates the thorax from the abdomen.</li><li>The right hemidiaphragm is usually {{1–1.5 cm higher}} than the left.</li></ul>' +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Opening</th><th>Level</th><th>Passes through</th></tr></thead><tbody>' +
      '<tr><td>Caval</td><td class="num">{{T8}}</td><td>{{Inferior vena cava}} and right phrenic nerve</td></tr>' +
      '<tr><td>Esophageal</td><td class="num">{{T10}}</td><td>Esophagus, {{left gastric artery and vein}}, vagus</td></tr>' +
      '<tr><td>Aortic</td><td class="num">{{T12}}</td><td>Aorta, {{thoracic duct}}, azygos vein</td></tr></tbody></table></div>' +
      '<p class="note"><b>Hiatal hernia</b>: abdominal contents herniate through the {{esophageal hiatus}} into the thorax. On CXR it shows as a retrocardiac mass, sometimes with air in it (arrows).</p></div>' +
      '<div class="stack">' + CVS.fig('rs-diaphragm-xr', 'The two hemidiaphragms traced on PA and lateral films.', 'rs', 56) + CVS.fig('rs-hiatal', 'Hiatal hernia: drawing and chest film.', 'rs', 58) + '</div></div>' },
  { t: 'q', id: 'M14', src: 'RS p.55', core: true,
    q: 'Which diaphragmatic opening lies at <b>T8</b>?',
    o: ['Caval opening (IVC)', 'Esophageal opening', 'Aortic opening', 'Morgagni foramen', 'Bochdalek foramen'], a: 0,
    ex: 'T8 caval (IVC, right phrenic), T10 esophageal (esophagus, left gastric vessels, vagus), T12 aortic (aorta, thoracic duct, azygos).' },
  { t: 'q', id: 'M15', src: 'RS p.55',
    q: 'The thoracic duct passes through the:',
    o: ['Aortic opening at T12', 'Caval opening at T8', 'Esophageal opening at T10', 'Central tendon at T6', 'Sternocostal gap'], a: 0,
    ex: 'Aortic opening (T12): aorta, thoracic duct, azygos vein.' },
  { t: 'q', id: 'M16', src: 'RS p.55',
    q: 'Which structures pass with the esophagus through the opening at T10?',
    o: ['Left gastric artery and vein, and the vagus', 'IVC and right phrenic nerve', 'Aorta and thoracic duct', 'Azygos vein and thoracic duct', 'Right gastric artery and phrenic nerve'], a: 0,
    ex: 'Esophageal opening: esophagus, left gastric artery and vein, vagus.' },
  { t: 'tf', id: 'M17', src: 'RS p.55',
    q: 'The left hemidiaphragm is usually 1–1.5 cm higher than the right.', a: false,
    ex: 'False. The right hemidiaphragm is usually 1–1.5 cm higher; the liver lies under it.' },
  { t: 'q', id: 'M18', src: 'RS p.58', core: true,
    q: 'An elderly woman has reflux. What is the retrocardiac opacity (arrows)?', fig: CVS.fig('rs-hiatal-q', 'PA chest film.', 'rs', 58),
    o: ['Hiatal hernia', 'Right middle lobe pneumonia', 'Right pleural effusion', 'Pneumothorax', 'Pleural plaque'], a: 0,
    ex: 'A rounded density behind the heart, through the esophageal hiatus: hiatal hernia (a posterior mediastinal mass on the lecture list).' },

  { t: 'c', id: 'M-C6', title: 'The chest wall', src: 'RS p.59–61',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Ribs, the intercostal spaces, the sternum and the vertebrae.</li>' +
      '<li>Each intercostal space has three muscle layers: {{external}}, {{internal}} and {{innermost}} intercostal.</li>' +
      '<li>The neurovascular bundle runs {{vein–artery–nerve}} (V-A-N) from top to bottom, in the groove under each rib, so a chest needle goes just {{above}} the lower rib.</li>' +
      '<li>Sternum from top to bottom: {{manubrium}} → {{body}} → {{xiphoid process}}.</li>' +
      '<li>On the lateral film the sternum is in front and the {{thoracic spine}} behind; on PA the ribs curve over the lung fields.</li></ul></div>' +
      '<div class="stack">' + CVS.fig('rs-chestwall-xr', 'Chest wall bones on PA and lateral films.', 'rs', 60) + CVS.fig('rs-sternum-ct', 'Sagittal CT with contrast through the sternum.', 'rs', 61) + '</div></div>' },
  { t: 'q', id: 'M19', src: 'RS p.59',
    q: 'From top to bottom, the intercostal neurovascular bundle is:',
    o: ['Vein, artery, nerve', 'Nerve, artery, vein', 'Artery, vein, nerve', 'Vein, nerve, artery', 'Artery, nerve, vein'], a: 0,
    ex: 'V-A-N from top to bottom, sheltered under the rib.' },
  { t: 'q', id: 'M20', src: 'RS p.61',
    q: 'The parts of the sternum from top to bottom are:',
    o: ['Manubrium, body, xiphoid process', 'Body, manubrium, xiphoid process', 'Xiphoid process, body, manubrium', 'Manubrium, xiphoid process, body', 'Body, xiphoid process, manubrium'], a: 0,
    ex: 'Manubrium sterni on top, then the body, then the xiphoid process.' },
  { t: 'tf', id: 'M21', src: 'RS p.59',
    q: 'The external intercostal is the deepest of the three muscle layers in an intercostal space.', a: false,
    ex: 'False. From outside in: external, internal, innermost; the innermost is the deepest.' }
]});
