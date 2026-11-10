/* Section N: temporal bone and ear, nasal cavity and paranasal sinuses (H&N radiology handout, slides 38–47). */
CVS.add({ id: 'N', short: 'Ear, nose, sinuses', title: 'Temporal bone, nasal cavity and paranasal sinuses', kind: 'Lecture',
  blurb: 'The petrous bone and the ear on CT, the nasal cavity, the four sinuses on films and CT, and the ostiomeatal unit.',
  items: [
  { t: 'c', id: 'N-C1', title: 'Temporal bone: the petrous pyramid and the parts of the ear', src: 'H&N p.39',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>The {{petrous}} part of the temporal bone (Latin <i>petrosus</i> = {{stone-like}}) is the dense pyramid at the medial temporal bone (circled on the skull base).</li>' +
      '<li>It contains the {{middle ear}}, the {{inner ear}} and the {{internal auditory canal}}.</li></ul>' +
      '<div class="cols3"><div class="mini"><h4>External</h4><p>Auricle and external auditory canal (cartilaginous outer part, bony inner part) up to the tympanic membrane</p></div>' +
      '<div class="mini"><h4>Middle (tympanic cavity)</h4><ul><li>{{Epitympanum}}: top</li><li>{{Mesotympanum}}: middle</li><li>{{Hypotympanum}}: bottom</li></ul></div>' +
      '<div class="mini"><h4>Inner</h4><ul><li>{{Bony labyrinth}}</li><li>Perilymphatic spaces</li><li>{{Membranous labyrinth}}</li></ul></div></div></div>' +
      '<div class="stack">' + CVS.fig('hn-petrous', 'Skull base from above: the two dense ridges circled.', 'hn', 39) + CVS.fig('hn-ear', 'Coronal drawing of the external canal, the tympanic membrane and the space behind it.', 'hn', 39) + '</div></div>' },
  { t: 'q', id: 'N1', src: 'H&N p.39', core: true,
    q: 'The petrous part of the temporal bone contains all of the following <b>EXCEPT</b>:',
    o: ['Sphenoid sinus', 'Middle ear', 'Inner ear', 'Internal auditory canal', 'Cochlea'], a: 0,
    ex: 'The petrous pyramid holds the middle ear, the inner ear (cochlea, vestibule, semicircular canals) and the internal auditory canal. The sphenoid sinus is in the sphenoid body.' },
  { t: 'q', id: 'N2', src: 'H&N p.39',
    q: 'Which division of the middle ear is the <b>uppermost</b>?',
    o: ['Epitympanum', 'Mesotympanum', 'Hypotympanum', 'Mastoid antrum', 'Vestibule'], a: 0,
    ex: 'Epi- = above, meso- = middle, hypo- = below. The vestibule is part of the inner ear.' },
  { t: 'tf', id: 'N3', src: 'H&N p.39',
    q: '“Petrous” means stone-like, which fits the dense pyramid of bone that houses the inner ear.', a: true,
    ex: 'True: Latin <i>petrosus</i> = stone-like.' },

  { t: 'c', id: 'N-C2', title: 'Temporal bone on axial CT', src: 'H&N p.40',
    html: CVS.fig('hn-temporal-ct', 'Axial CT of the temporal bone at two levels.', 'hn', 40) +
      '<ul class="pts"><li>Read along the hearing path, lateral to medial: {{external auditory canal}} → {{middle ear}} (the {{malleus}} sits in it) → inner ear, with the {{cochlea}} in front and the {{semicircular canal}} behind.</li>' +
      '<li>The {{internal auditory canal}} runs medially from the inner ear toward the posterior cranial fossa.</li>' +
      '<li>Further back: the {{mastoid antrum}}, a larger single air space, and the honeycomb of {{mastoid air cells}}.</li></ul>' +
      '<p class="note">Read it in a {{bone window}}: air is black, the dense otic capsule around the inner ear is white, and the ossicles are small white dots in the black air space.</p>' },
  { t: 'q', id: 'N4', src: 'H&N p.40', core: true,
    q: 'On this axial CT of the temporal bone, what is label <b>1</b>?', fig: CVS.fig('hn-temporal-num', 'Axial CT of the temporal bone, labels replaced by numbers.', 'hn', 40),
    o: ['Cochlea', 'Semicircular canal', 'Malleus', 'Internal auditory canal', 'Mastoid antrum'], a: 0,
    ex: 'Label 1 points to the coiled structure in the front of the inner ear: the cochlea.' },
  { t: 'q', id: 'N5', src: 'H&N p.40', core: true,
    q: 'What is label <b>7</b>?', fig: CVS.fig('hn-temporal-num', 'Axial CT of the temporal bone, labels replaced by numbers.', 'hn', 40),
    o: ['Internal auditory canal', 'External auditory canal', 'Cochlea', 'Mastoid antrum', 'Middle ear'], a: 0,
    ex: 'Label 7 points to the canal running medially from the inner ear toward the posterior fossa: the internal auditory canal.' },
  { t: 'q', id: 'N6', src: 'H&N p.40',
    q: 'What is label <b>3</b>?', fig: CVS.fig('hn-temporal-num', 'Axial CT of the temporal bone, labels replaced by numbers.', 'hn', 40),
    o: ['Malleus', 'Cochlea', 'Semicircular canal', 'Mastoid air cells', 'Styloid process'], a: 0,
    ex: 'Label 3 points to the small dense ossicle inside the air of the middle ear: the malleus.' },
  { t: 'q', id: 'N7', src: 'H&N p.40',
    q: 'What is label <b>6</b>?', fig: CVS.fig('hn-temporal-num', 'Axial CT of the temporal bone, labels replaced by numbers.', 'hn', 40),
    o: ['Mastoid antrum', 'Mastoid air cells', 'Middle ear', 'External auditory canal', 'Sigmoid sinus'], a: 0,
    ex: 'Label 6 points to the larger single air space behind the middle ear: the mastoid antrum. The smaller honeycomb cells are the mastoid air cells (label 5).' },
  { t: 'q', id: 'N8', src: 'H&N p.40',
    q: 'What is label <b>4</b>?', fig: CVS.fig('hn-temporal-num', 'Axial CT of the temporal bone, labels replaced by numbers.', 'hn', 40),
    o: ['External auditory canal', 'Internal auditory canal', 'Eustachian tube', 'Middle ear', 'Mastoid antrum'], a: 0,
    ex: 'Label 4 points to the air-filled canal on the lateral side leading in toward the middle ear: the external auditory canal.' },

  { t: 'c', id: 'N-C3', title: 'The nasal cavity', src: 'H&N p.42–43',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Extends from the {{palate}} (floor) to the {{skull base}} (roof).</li>' +
      '<li>Divided into two halves by the {{nasal septum}}.</li>' +
      '<li>Opens in front at the {{nares}} (nostrils) and behind through the {{choanae}} into the {{nasopharynx}}.</li>' +
      '<li>Lateral wall: three conchae (turbinates), {{superior}}, {{middle}} and {{inferior}}, each roofing the meatus of the same name.</li></ul></div>' +
      CVS.fig('hn-nasal-diagram', 'Coronal drawing of the nasal cavity with the conchae, meatuses, orbits and maxillary sinuses.', 'hn', 42) + '</div>' +
      CVS.fig('hn-nasal-xr', 'The nasal cavity outlined on Caldwell’s and Waters’ views.', 'hn', 43) +
      '<p class="note">On both films the nasal cavity is the dark triangle split by the septum; on Caldwell’s view the {{inferior nasal concha}} shows as a soft-tissue bulge from the lateral wall.</p>' },
  { t: 'q', id: 'N9', src: 'H&N p.42', core: true,
    q: 'The nasal cavity opens posteriorly into the nasopharynx through the:',
    o: ['Choanae', 'Nares', 'Ostiomeatal unit', 'Hiatus semilunaris', 'Eustachian tube'], a: 0,
    ex: 'Nares in front, choanae behind. The OMU and hiatus semilunaris are sinus drainage paths; the Eustachian tube opens into the nasopharynx from the side.' },
  { t: 'tf', id: 'N10', src: 'H&N p.42',
    q: 'The nasal cavity opens posteriorly into the oropharynx.', a: false,
    ex: 'False. Through the choanae it opens into the nasopharynx; it runs from the palate (floor) to the skull base (roof).' },
  { t: 'q', id: 'N11', src: 'H&N p.43',
    q: 'On Caldwell’s view, the soft-tissue bulge from the lateral wall into each nasal cavity is the:',
    o: ['Inferior nasal concha', 'Nasal septum', 'Ethmoidal bulla', 'Maxillary sinus', 'Vomer'], a: 0,
    ex: 'The inferior nasal concha is the largest turbinate and is labelled on Caldwell’s view (p.43).' },

  { t: 'c', id: 'N-C4', title: 'Paranasal sinuses on plain films', src: 'H&N p.26, 44',
    html: CVS.fig('hn-sinus-xr', 'Sinuses labelled on two frontal skull views.', 'hn', 44) +
      '<div class="tblwrap"><table class="tbl"><thead><tr><th>Sinus</th><th>Where on the film</th><th>Plain view in the lecture</th></tr></thead><tbody>' +
      '<tr><td>Frontal</td><td>Above the orbits</td><td>{{Caldwell}}</td></tr>' +
      '<tr><td>Ethmoid</td><td>Between the orbits</td><td>Same frontal view as above</td></tr>' +
      '<tr><td>Maxillary</td><td>Below the orbits, beside the nose</td><td>{{Waters}} (also seen on the frontal-sinus view)</td></tr>' +
      '<tr><td>Sphenoid</td><td>Under the sella turcica</td><td>{{Lateral}} skull film</td></tr></tbody></table></div>' +
      '<p class="note">The chin-up view drops the dense petrous bones below the {{maxillary sinuses}}, which then show as clear triangles under the orbits. A healthy sinus is {{dark}} (air); sinusitis makes it grey or opaque, or shows an {{air-fluid level}}.</p>' },
  { t: 'q', id: 'N12', src: 'H&N p.11, 44', core: true,
    q: 'Which plain view shows the <b>maxillary sinuses</b> best?',
    o: ['Waters’ view', 'Caldwell’s view', 'Towne’s view', 'Skull lateral', 'Occipitofrontal view of the orbit'], a: 0,
    ex: 'The maxillary sinuses are outlined on Waters’ view: the petrous bones project below them, so they are clear.' },
  { t: 'q', id: 'N13', src: 'H&N p.44', core: true,
    q: 'Which sinuses are labelled on <b>Caldwell’s view</b> in the lecture?',
    o: ['Frontal, ethmoid and maxillary', 'Sphenoid only', 'Maxillary only', 'Frontal and sphenoid', 'Mastoid and sphenoid'], a: 0,
    ex: 'Caldwell’s view labels the frontal sinus, the ethmoid sinus and the maxillary sinus; Waters’ view labels the maxillary sinus.' },
  { t: 'tf', id: 'N14', src: 'H&N p.26, 44',
    q: 'The sphenoid sinus is best seen on a frontal (Caldwell) view.', a: false,
    ex: 'False. It sits under the sella in the middle of the skull and is shown on the lateral film (and on CT).' },

  { t: 'c', id: 'N-C5', title: 'The ostiomeatal unit on coronal CT', src: 'H&N p.45',
    html: '<div class="two">' + CVS.fig('hn-omu', 'Coronal CT of the sinuses, bone window, with labels.', 'hn', 45, 'tall') +
      '<div class="stack"><ul class="pts"><li>Coronal CT in a bone window is the plane for the sinus drainage paths.</li>' +
      '<li>Lateral nasal wall from top down: the {{ethmoid sinus}} cells → the {{ethmoidal bulla}} (a large anterior ethmoid cell) → the {{middle nasal concha}} → the {{inferior nasal concha}}.</li>' +
      '<li>The {{hiatus semilunaris}} is the curved slit below the bulla, opening into the middle meatus; the {{maxillary sinus}} drains through this region.</li>' +
      '<li>Together they form the {{ostiomeatal unit}} (circled), the shared drainage of the {{frontal}}, {{anterior ethmoidal}} and {{maxillary}} sinuses.</li></ul>' +
      '<p class="trap">One small blocked channel obstructs three sinuses. The posterior ethmoid and the sphenoid sinuses do not drain through it.</p></div></div>' },
  { t: 'q', id: 'N15', src: 'H&N p.45', core: true,
    q: 'The ostiomeatal unit drains which sinuses?',
    o: ['Frontal, anterior ethmoidal and maxillary', 'Sphenoid and posterior ethmoidal', 'All four sinuses', 'Maxillary only', 'Frontal and sphenoid'], a: 0,
    ex: 'The slide footnote: the OMU drains the frontal, anterior ethmoidal and maxillary sinuses.' },
  { t: 'q', id: 'N16', src: 'H&N p.45', core: true,
    q: 'On this coronal CT, what is label <b>6</b>?', fig: CVS.fig('hn-omu-num', 'Coronal CT of the sinuses, labels replaced by numbers.', 'hn', 45),
    o: ['Hiatus semilunaris', 'Ethmoidal bulla', 'Middle nasal concha', 'Inferior nasal concha', 'Nasolacrimal duct'], a: 0,
    ex: 'Label 6 points to the curved slit inside the circled OMU, below the bulla: the hiatus semilunaris.' },
  { t: 'q', id: 'N17', src: 'H&N p.45',
    q: 'What is label <b>2</b>?', fig: CVS.fig('hn-omu-num', 'Coronal CT of the sinuses, labels replaced by numbers.', 'hn', 45),
    o: ['Ethmoidal bulla', 'Middle nasal concha', 'Hiatus semilunaris', 'Crista galli', 'Maxillary sinus'], a: 0,
    ex: 'Label 2 points to the rounded air cell just above the hiatus: the ethmoidal bulla.' },
  { t: 'q', id: 'N18', src: 'H&N p.45',
    q: 'What is label <b>3</b>?', fig: CVS.fig('hn-omu-num', 'Coronal CT of the sinuses, labels replaced by numbers.', 'hn', 45),
    o: ['Middle nasal concha', 'Inferior nasal concha', 'Ethmoidal bulla', 'Nasal septum', 'Uncinate process of maxilla'], a: 0,
    ex: 'Label 3 points to the curled bony plate hanging from the ethmoid above the inferior concha: the middle nasal concha.' },
  { t: 'open', id: 'N19', src: 'H&N p.45',
    q: 'Mucosal swelling blocks the ostiomeatal unit. Which sinuses may become obstructed, and why that combination?',
    ans: 'The frontal, anterior ethmoidal and maxillary sinuses, because all three drain through the OMU into the middle meatus. One small channel serves three sinuses, so a single block can cause disease in all of them; the posterior ethmoid and sphenoid sinuses drain elsewhere and are spared.' },

  { t: 'c', id: 'N-C6', title: 'Sinuses on axial and sagittal CT', src: 'H&N p.46–47',
    html: CVS.fig('hn-sinus-axial', 'Axial CT at three levels, bone window, with labels.', 'hn', 46) +
      '<div class="two"><div class="stack"><ul class="pts"><li>Axial, top to bottom: the {{frontal sinus}} in the frontal bone above the orbits → the {{ethmoid sinus}} cells between the orbits, with the {{sphenoid sinus}} behind them in the midline → the {{maxillary sinuses}} at the lowest level, either side of the nasal cavity.</li>' +
      '<li>Sagittal: the front one sits high in the frontal bone; the back one fills the sphenoid body, under the {{sella turcica}} and above the {{nasopharynx}}.</li></ul></div>' +
      CVS.fig('hn-sinus-sag', 'Sagittal CT, bone window, with labels.', 'hn', 47) + '</div>' },
  { t: 'q', id: 'N20', src: 'H&N p.46', core: true,
    q: 'On axial CT, which sinus lies in the midline directly <b>behind</b> the ethmoid air cells?',
    o: ['Sphenoid sinus', 'Frontal sinus', 'Maxillary sinus', 'Mastoid antrum', 'Nasopharynx'], a: 0,
    ex: 'At the ethmoid level, the sphenoid sinus is the midline air space behind the ethmoid cells.' },
  { t: 'q', id: 'N21', src: 'H&N p.46',
    q: 'On the lowest axial slice through the face, the large air spaces on either side of the nasal cavity are the:',
    o: ['Maxillary sinuses', 'Ethmoid sinuses', 'Sphenoid sinuses', 'Frontal sinuses', 'Mastoid air cells'], a: 0,
    ex: 'The maxillary sinuses are the lowest and largest, beside the nasal cavity.' },
  { t: 'tf', id: 'N22', src: 'H&N p.47', core: true,
    q: 'On sagittal CT, the sphenoid sinus lies below the sella turcica and above the nasopharynx.', a: true,
    ex: 'True. The sphenoid sinus fills the sphenoid body, between the pituitary fossa above and the nasopharynx below.' }
]});
