/* Section S: the skull on radiographs (H&N radiology handout, slides 7–8 and 23–27). */
CVS.add({ id: 'S', short: 'Skull', title: 'The skull on radiographs', kind: 'Lecture',
  blurb: 'Cranial and facial bones, and the landmarks to name on AP and lateral skull films, including the sella turcica.',
  items: [
  { t: 'c', id: 'S-C1', title: 'Bones of the skull: cranial vs facial', src: 'H&N p.7, 24',
    html: '<div class="two"><div class="stack"><div class="cols2"><div class="mini"><h4>“Calvarium” on the slide · 6</h4><ul><li>Frontal</li><li>Parietal</li><li>Temporal</li><li>Occipital</li><li>{{Ethmoid}}</li><li>{{Sphenoid}}</li></ul></div>' +
      '<div class="mini"><h4>Facial bones · 8</h4><ul><li>Maxilla</li><li>{{Mandible}}</li><li>Zygomatic</li><li>{{Palatine}}</li><li>{{Lacrimal}}</li><li>{{Vomer}}</li><li>Nasal</li><li>{{Inferior turbinate}}</li></ul></div></div>' +
      '<p class="trap">Two bones that sit deep behind the face still count as {{cranial}} bones here. The {{inferior turbinate}} (inferior nasal concha) is its own facial bone, but the middle nasal concha belongs to the {{ethmoid}} (Netter figure, p.7).</p>' +
      '<p class="note">The slide heads the first list “Calvarium”. Anatomy texts call these six the neurocranium; strictly, the calvaria is only the skull cap.</p></div>' +
      CVS.fig('hn-skull-netter-ap', 'Anterior view of the skull, each bone in its own colour.', 'hn', 7) + '</div>' },
  { t: 'q', id: 'S1', src: 'H&N p.24', core: true,
    q: 'Which bone is listed with the <b>facial bones</b>, not the calvarium?',
    o: ['Vomer', 'Ethmoid', 'Sphenoid', 'Temporal', 'Occipital'], a: 0,
    ex: 'The vomer (lower nasal septum) is a facial bone. Ethmoid, sphenoid, temporal and occipital are among the six cranial bones on the slide.' },
  { t: 'q', id: 'S2', src: 'H&N p.24',
    q: 'Which of these is a <b>cranial</b> bone on the slide?',
    o: ['Ethmoid', 'Lacrimal', 'Palatine', 'Zygomatic', 'Inferior turbinate'], a: 0,
    ex: 'The ethmoid is listed under the calvarium even though most of it lies between the orbits. The other four are facial bones.' },
  { t: 'tf', id: 'S3', src: 'H&N p.24',
    q: 'The inferior turbinate (inferior nasal concha) is a separate facial bone.', a: true,
    ex: 'True. It is on the facial-bone list; the middle and superior conchae are parts of the ethmoid.' },
  { t: 'tf', id: 'S4', src: 'H&N p.7',
    q: 'The middle nasal concha is part of the maxilla.', a: false,
    ex: 'False. On the Netter figure the middle nasal concha is labelled under the ethmoidal bone.' },
  { t: 'c', id: 'S-C2', title: 'Skull AP radiograph: landmarks', src: 'H&N p.25',
    html: '<div class="two">' + CVS.fig('hn-skull-ap', 'Skull AP radiograph with labels.', 'hn', 25, 'tall') +
      '<div class="stack"><ul class="pts"><li>Midline, top down: the {{crista galli}} between the orbits, the {{nasal septum}} below it, the mandible at the bottom.</li>' +
      '<li>Across each orbit: the {{lesser wing of sphenoid}} runs as a near-horizontal line (orange dots); the {{greater wing of sphenoid}} as an oblique line (maroon dots) inside the orbital outline.</li>' +
      '<li>Below the orbits: the {{maxillary sinuses}}. At the lateral edges, the {{mastoid processes}}.</li>' +
      '<li>Vault: the {{frontal bone}} in the middle, the {{parietal bones}} at the sides.</li></ul>' +
      '<p class="note">The sphenoid looks like a bat: body in the middle, small wings on top, big wings below and lateral (inset, p.25).</p>' +
      CVS.fig('hn-sphenoid', 'The sphenoid bone seen from behind.', 'hn', 25) + '</div></div>' },
  { t: 'q', id: 'S5', src: 'H&N p.25', core: true,
    q: 'On this skull AP radiograph, what does label <b>4</b> point to?', fig: CVS.fig('hn-skull-ap-num', 'Skull AP radiograph, labels replaced by numbers.', 'hn', 25),
    o: ['Crista galli', 'Nasal septum', 'Lesser wing of sphenoid', 'Frontal sinus', 'Dorsum sellae'], a: 0,
    ex: 'Label 4 points to the small midline bony spike between the orbits, above the nasal cavity: the crista galli of the ethmoid.' },
  { t: 'q', id: 'S6', src: 'H&N p.25',
    q: 'Label <b>3</b> marks the near-horizontal dotted line across the upper orbit. What is it?', fig: CVS.fig('hn-skull-ap-num', 'Skull AP radiograph, labels replaced by numbers.', 'hn', 25),
    o: ['Lesser wing of sphenoid', 'Greater wing of sphenoid', 'Superior orbital margin', 'Crista galli', 'Mastoid process'], a: 0,
    ex: 'The lesser wing runs nearly horizontally across the upper orbit; the greater wing is the oblique line lower down (label 6).' },
  { t: 'q', id: 'S7', src: 'H&N p.25', core: true,
    q: 'Label <b>7</b> points to which structure?', fig: CVS.fig('hn-skull-ap-num', 'Skull AP radiograph, labels replaced by numbers.', 'hn', 25),
    o: ['Mastoid process', 'Maxillary sinus', 'Greater wing of sphenoid', 'Condyle of mandible', 'Parietal bone'], a: 0,
    ex: 'Label 7 is at the lateral skull base below the orbit level: the mastoid process. The maxillary sinus is label 8, nearer the midline.' },
  { t: 'q', id: 'S8', src: 'H&N p.25',
    q: 'Label <b>6</b> is the oblique dotted line inside the orbit. What is it?', fig: CVS.fig('hn-skull-ap-num', 'Skull AP radiograph, labels replaced by numbers.', 'hn', 25),
    o: ['Greater wing of sphenoid', 'Lesser wing of sphenoid', 'Lamina papyracea', 'Zygomatic arch', 'Nasal septum'], a: 0,
    ex: 'The greater wing of sphenoid forms the oblique line in the orbit on the AP film (and the lateral orbital wall).' },
  { t: 'c', id: 'S-C3', title: 'Skull lateral radiograph: landmarks', src: 'H&N p.26',
    html: '<div class="two">' + CVS.fig('hn-skull-lat', 'Skull lateral radiograph with labels.', 'hn', 26, 'tall') +
      '<div class="stack"><ul class="pts"><li>Vault: {{frontal}} in front, {{parietal}} on top, {{occipital}} at the back.</li>' +
      '<li>Sinuses from front to back: {{frontal sinus}} above the orbit, {{ethmoid sinus}} between the orbits, {{sphenoid sinus}} under the sella, {{maxillary sinus}} above the hard palate.</li>' +
      '<li>Central skull base: the {{sella turcica}} on top of the sphenoid body; the {{clivus}} slopes down and back from it. The {{greater wing of sphenoid}} is the curved dotted line in front.</li>' +
      '<li>Behind and below: the {{mastoid air cells}}, with the {{condyle of the mandible}} just in front of them.</li>' +
      '<li>The {{palatine process of the maxilla}} is the hard palate, the floor of the nose.</li></ul></div></div>' },
  { t: 'q', id: 'S9', src: 'H&N p.26', core: true,
    q: 'On this lateral skull film, what is label <b>2</b>?', fig: CVS.fig('hn-skull-lat-num', 'Skull lateral radiograph, labels replaced by numbers.', 'hn', 26),
    o: ['Sella turcica', 'Sphenoid sinus', 'Clivus', 'Mastoid air cells', 'Frontal sinus'], a: 0,
    ex: 'Label 2 points to the cup-shaped fossa on top of the sphenoid body: the sella turcica.' },
  { t: 'q', id: 'S10', src: 'H&N p.26', core: true,
    q: 'What is label <b>9</b>?', fig: CVS.fig('hn-skull-lat-num', 'Skull lateral radiograph, labels replaced by numbers.', 'hn', 26),
    o: ['Sphenoid sinus', 'Ethmoid sinus', 'Maxillary sinus', 'Sella turcica', 'Nasopharynx'], a: 0,
    ex: 'Label 9 points to the air space in the sphenoid body under the sella: the sphenoid sinus. The ethmoid sinus (7) is further forward between the orbits.' },
  { t: 'q', id: 'S11', src: 'H&N p.26',
    q: 'What is label <b>6</b>?', fig: CVS.fig('hn-skull-lat-num', 'Skull lateral radiograph, labels replaced by numbers.', 'hn', 26),
    o: ['Clivus', 'Dorsum sellae', 'Occipital bone', 'Condyle of mandible', 'Mastoid air cells'], a: 0,
    ex: 'Label 6 points to the sloping bone running down and back behind the sella (dotted line): the clivus.' },
  { t: 'q', id: 'S12', src: 'H&N p.26', core: true,
    q: 'What is label <b>13</b>?', fig: CVS.fig('hn-skull-lat-num', 'Skull lateral radiograph, labels replaced by numbers.', 'hn', 26),
    o: ['Palatine process of maxilla (hard palate)', 'Maxillary sinus', 'Body of mandible', 'Zygomatic arch', 'Vomer'], a: 0,
    ex: 'Label 13 points to the horizontal bony plate between the nasal cavity and the mouth: the palatine process of the maxilla.' },
  { t: 'q', id: 'S13', src: 'H&N p.26',
    q: 'What is label <b>10</b>?', fig: CVS.fig('hn-skull-lat-num', 'Skull lateral radiograph, labels replaced by numbers.', 'hn', 26),
    o: ['Mastoid air cells', 'Condyle of mandible', 'Occipital bone', 'Clivus', 'Sphenoid sinus'], a: 0,
    ex: 'Label 10 points to the honeycomb of air behind the ear: the mastoid air cells. The condyle of the mandible (12) lies just in front of them.' },
  { t: 'tf', id: 'S14', src: 'H&N p.26–27', core: true,
    q: 'The clivus runs from the back of the sella turcica down and back toward the foramen magnum.', a: true,
    ex: 'True. The clivus continues from the dorsum sellae down the back of the sphenoid and basi-occiput.' },
  { t: 'c', id: 'S-C4', title: 'The sella turcica region', src: 'H&N p.27',
    html: '<div class="two">' + CVS.fig('hn-sella', 'Close-up of the central skull base on a lateral skull film.', 'hn', 27) +
      '<div class="stack"><ul class="pts"><li>The {{sella turcica}} is the saddle-shaped pit in the sphenoid body (the pituitary fossa).</li>' +
      '<li>In front: the {{tuberculum sellae}}. Above it, projecting back over the fossa: the {{anterior clinoid process}}.</li>' +
      '<li>Behind: the {{dorsum sellae}}, topped by the {{posterior clinoid process}}.</li>' +
      '<li>Below: the {{sphenoid sinus}}. Behind and down: the {{clivus}}.</li></ul>' +
      '<p class="note">Read along the top of the sphenoid from front to back: tuberculum → fossa → back wall, with a clinoid process at each end.</p></div></div>' },
  { t: 'q', id: 'S15', src: 'H&N p.27', core: true,
    q: 'Which structure forms the <b>back wall</b> of the sella turcica on a lateral film?',
    o: ['Dorsum sellae', 'Tuberculum sellae', 'Anterior clinoid process', 'Sphenoid sinus', 'Greater wing of sphenoid'], a: 0,
    ex: 'The dorsum sellae is the posterior wall, topped by the posterior clinoid process. The tuberculum sellae is the front.' },
  { t: 'q', id: 'S16', src: 'H&N p.26–27', core: true,
    q: 'What lies directly <b>below</b> the floor of the sella turcica?',
    o: ['Sphenoid sinus', 'Ethmoid sinus', 'Nasopharynx', 'Frontal sinus', 'Maxillary sinus'], a: 0,
    ex: 'The sella sits on the sphenoid body, and the sphenoid sinus is the air space inside that body.' },
  { t: 'tf', id: 'S17', src: 'H&N p.27',
    q: 'The tuberculum sellae lies behind the pituitary fossa.', a: false,
    ex: 'False. The tuberculum sellae is the front edge; the dorsum sellae is behind.' },
  { t: 'open', id: 'S18', src: 'H&N p.27',
    q: 'Name the parts of the sella region you meet from front to back (and above and below) on a lateral skull film.',
    ans: 'Front to back: tuberculum sellae → sella turcica (pituitary fossa) → dorsum sellae. Above: anterior clinoid process at the front, posterior clinoid process on top of the dorsum. Below: sphenoid sinus. Behind and down: clivus.' }
]});
