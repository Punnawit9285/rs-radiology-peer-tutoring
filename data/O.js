/* Section O: the orbit (H&N radiology handout, slides 28–37). */
CVS.add({ id: 'O', short: 'Orbit', title: 'The orbit', kind: 'Lecture',
  blurb: 'Shape and neighbours, the seven bones and four walls, the blow-out fracture, and the orbit on radiograph, CT and MRI.',
  items: [
  { t: 'c', id: 'O-C1', title: 'Shape, axes and neighbours of the orbit', src: 'H&N p.29',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>Paired {{conical}} bony cavities in the facial skeleton.</li>' +
      '<li>Each runs from the eyelids {{anterolaterally}} to the orbital apex {{posteromedially}}.</li>' +
      '<li>The two orbital axes diverge at about {{45°}} (green dashed lines on the MRI); the medial walls (blue) are nearly parallel.</li></ul>' +
      '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Neighbour</th><th>Across</th></tr></thead><tbody>' +
      '<tr><td>{{Anterior cranial fossa}}</td><td>Above (roof)</td></tr>' +
      '<tr><td>{{Nasal cavity and ethmoid air sinuses}}</td><td>Medial wall</td></tr>' +
      '<tr><td>{{Maxillary sinus}}</td><td>Below (floor)</td></tr></tbody></table></div>' +
      '<p class="note">Thin walls are shared walls: disease of the sinus next door (or a fracture) reaches the orbit through them.</p></div>' +
      CVS.fig('hn-orbit-axes', 'The orbit from the front with its neighbouring sinuses, and the orbital axes on axial MRI.', 'hn', 29) + '</div>' },
  { t: 'q', id: 'O1', src: 'H&N p.29', core: true,
    q: 'Which structure lies directly <b>below</b> the orbit?',
    o: ['Maxillary sinus', 'Anterior cranial fossa', 'Ethmoid air cells', 'Sphenoid sinus', 'Frontal sinus'], a: 0,
    ex: 'Above: anterior cranial fossa. Medial: nasal cavity and ethmoid air sinuses. Below: maxillary sinus.' },
  { t: 'q', id: 'O2', src: 'H&N p.29',
    q: 'At about what angle do the two orbital axes diverge?',
    o: ['10°', '25°', '45°', '90°', '120°'], a: 2,
    ex: 'The slide gives about 45° between the two orbital axes, while the medial walls stay nearly parallel.' },
  { t: 'tf', id: 'O3', src: 'H&N p.29',
    q: 'The orbit runs from the eyelids posteromedially to an apex that lies anterolaterally.', a: false,
    ex: 'False, it is reversed: from the eyelids anterolaterally to the apex posteromedially.' },
  { t: 'c', id: 'O-C2', title: 'Seven bones, four walls and an apex', src: 'H&N p.30–32',
    html: '<div class="two"><div class="tblwrap"><table class="tbl"><thead><tr><th>Wall</th><th>Mainly</th><th>With</th></tr></thead><tbody>' +
      '<tr><td><b>Roof</b> (superior)</td><td>Orbital part of the {{frontal bone}}</td><td>The smaller sphenoid wing</td></tr>' +
      '<tr><td><b>Medial wall</b> ({{lamina papyracea}})</td><td>Orbital plate of the {{ethmoid}}</td><td>Frontal process of maxilla, {{lacrimal}}, sphenoid</td></tr>' +
      '<tr><td><b>Floor</b> (inferior)</td><td>{{Orbital plate of maxilla}}</td><td>Zygomatic and {{palatine}}</td></tr>' +
      '<tr><td><b>Lateral wall</b></td><td>{{Frontal process of zygomatic}} bone</td><td>{{Greater wing of sphenoid}}</td></tr>' +
      '<tr><td><b>Apex</b></td><td>{{Optic canal}}</td><td>In the {{lesser wing of sphenoid}}</td></tr></tbody></table></div>' +
      CVS.fig('hn-orbit-bones', 'Bones of the right orbit seen from the front.', 'hn', 30) + '</div>' +
      '<p class="note">Seven bones in all. Roof, medial wall and floor are each “mainly” one bone; the sphenoid turns up in the roof, the medial wall, the lateral wall and the apex.</p>' },
  { t: 'q', id: 'O4', src: 'H&N p.31', core: true,
    q: 'The <b>lamina papyracea</b> is mainly the orbital plate of which bone?',
    o: ['Ethmoid', 'Lacrimal', 'Maxilla', 'Sphenoid', 'Frontal'], a: 0,
    ex: 'The medial wall (lamina papyracea) is mainly the orbital plate of the ethmoid, with the frontal process of maxilla, lacrimal and sphenoid.' },
  { t: 'q', id: 'O5', src: 'H&N p.31', core: true,
    q: 'The orbital <b>floor</b> is formed mainly by:',
    o: ['The orbital plate of the maxilla', 'The zygomatic bone', 'The palatine bone', 'The greater wing of sphenoid', 'The ethmoid'], a: 0,
    ex: 'Floor: mainly maxilla, with zygomatic and palatine. That is why a floor fracture opens into the maxillary sinus.' },
  { t: 'q', id: 'O6', src: 'H&N p.32',
    q: 'Which pair forms the <b>lateral wall</b> of the orbit?',
    o: ['Zygomatic bone and greater wing of sphenoid', 'Frontal bone and lesser wing of sphenoid', 'Ethmoid and lacrimal bones', 'Maxilla and palatine bones', 'Greater and lesser wings of sphenoid'], a: 0,
    ex: 'Lateral wall: frontal process of the zygomatic bone and the greater wing of sphenoid.' },
  { t: 'q', id: 'O7', src: 'H&N p.32', core: true,
    q: 'The optic canal at the orbital apex lies in the:',
    o: ['Lesser wing of sphenoid', 'Greater wing of sphenoid', 'Ethmoid', 'Frontal bone', 'Palatine bone'], a: 0,
    ex: 'Apex: optic canal in the lesser wing of sphenoid. The greater wing forms the lateral wall.' },
  { t: 'q', id: 'O8', src: 'H&N p.30',
    q: 'Which bone is <b>NOT</b> one of the seven bones of the orbit?',
    o: ['Temporal', 'Palatine', 'Lacrimal', 'Ethmoid', 'Zygomatic'], a: 0,
    ex: 'The seven: frontal, zygomatic, maxillary, ethmoid, lacrimal, sphenoid, palatine. The temporal bone is not part of the orbit.' },
  { t: 'c', id: 'O-C3', title: 'Weak walls and the blow-out fracture', src: 'H&N p.31',
    html: '<div class="two"><div class="stack"><ul class="pts"><li>The medial wall is paper-thin: its name, {{lamina papyracea}}, means “paper layer”.</li>' +
      '<li>A ball bigger than the orbital rim pushes the globe back and raises the {{pressure inside the orbit}}.</li>' +
      '<li>The thin {{floor}} gives way downward into the {{maxillary antrum}}: a <b>blow-out fracture</b>.</li>' +
      '<li>{{Orbital fat}} and the {{inferior rectus}} (with the {{inferior oblique}}) can herniate through the gap.</li></ul>' +
      CVS.fig('hn-squash', 'Squash ball injury: the force on the globe, the pressure rise and the fracture.', 'hn', 31) + '</div>' +
      CVS.fig('hn-blowout', 'Front-view diagram of a blow-out fracture on one side.', 'hn', 31) + '</div>' +
      '<p class="trap">The rim usually stays intact; the break is in the wall behind it, so look for it on {{coronal}} CT, where the bottom wall is seen edge-on.</p>' },
  { t: 'q', id: 'O9', src: 'H&N p.31', core: true,
    q: 'In the blow-out fracture drawn on the slide, which wall breaks, into which space, and what can herniate?',
    o: ['Floor → maxillary sinus; orbital fat and inferior rectus', 'Medial wall → ethmoid air cells; medial rectus', 'Roof → frontal sinus; superior rectus', 'Lateral wall → temporal fossa; lateral rectus', 'Floor → nasal cavity; superior oblique'], a: 0,
    ex: 'The pressure rise breaks the thin floor into the maxillary antrum, and orbital fat with the inferior rectus (and inferior oblique) can herniate into it.' },
  { t: 'tf', id: 'O10', src: 'H&N p.31', core: true,
    q: 'The lamina papyracea is the thin medial wall of the orbit.', a: true,
    ex: 'True. It separates the orbit from the ethmoid air cells.' },
  { t: 'open', id: 'O11', src: 'H&N p.31',
    q: 'Explain, step by step, how a ball larger than the orbital rim produces a blow-out fracture.',
    ans: 'The rim stops the ball, but the globe is pushed backward, so the pressure inside the orbit rises. The force escapes through the weakest wall: the thin floor breaks downward into the maxillary antrum, and orbital fat and the inferior rectus (with the inferior oblique) can herniate or be trapped in the gap.' },
  { t: 'c', id: 'O-C4', title: 'The orbit on an occipitofrontal radiograph', src: 'H&N p.33',
    html: CVS.fig('hn-orbit-of', 'Occipitofrontal radiograph of both orbits with labels.', 'hn', 33) +
      '<ul class="pts"><li>The rim: {{superior orbital margin}} above, {{inferior orbital margin}} below.</li>' +
      '<li>Inside the circle: the {{lesser wing}} of sphenoid above and the {{greater wing}} below and lateral; the dark cleft between them is the {{superior orbital fissure}}.</li>' +
      '<li>Medially: the thin {{lamina papyracea}} with the {{ethmoid sinus}} air cells beside it, and the {{nasal septum}} in the midline.</li></ul>' },
  { t: 'q', id: 'O12', src: 'H&N p.33', core: true,
    q: 'On the occipitofrontal view, the dark cleft between the lesser and greater wings of the sphenoid is the:',
    o: ['Superior orbital fissure', 'Inferior orbital fissure', 'Optic canal', 'Nasolacrimal canal', 'Infraorbital foramen'], a: 0,
    ex: 'The superior orbital fissure is the gap between the lesser wing (above) and the greater wing (below).' },
  { t: 'tf', id: 'O13', src: 'H&N p.33',
    q: 'The ethmoid air cells lie medial to the lamina papyracea, between the orbit and the nasal cavity.', a: true,
    ex: 'True. The lamina papyracea is the orbital (lateral) wall of the ethmoid labyrinth.' },
  { t: 'c', id: 'O-C5', title: 'The orbit on axial CT', src: 'H&N p.34',
    html: CVS.fig('hn-orbit-axial', 'Axial CT at three levels: soft tissue window above, bone window below.', 'hn', 34) +
      '<div class="cols3"><div class="mini"><h4>Upper slice</h4><ul><li>{{Levator palpebrae superioris & superior rectus}} on top of the globe</li><li>{{Superior oblique}} along the upper medial wall</li><li>{{Lacrimal gland}} at the front, upper lateral</li><li>Behind: the {{superior orbital fissure}} beside the greater wing</li></ul></div>' +
      '<div class="mini"><h4>Mid slice (optic nerve)</h4><ul><li>{{Medial rectus}} and {{lateral rectus}} along the walls</li><li>The {{optic nerve sheath complex}} runs back to the apex and leaves through the {{optic canal}}</li><li>Medial wall: lamina papyracea</li></ul></div>' +
      '<div class="mini"><h4>Lower slice</h4><ul><li>{{Inferior rectus}} under the globe</li><li>{{Nasolacrimal duct}} at the front of the medial wall</li><li>{{Inferior orbital fissure}} at the back</li></ul></div></div>' },
  { t: 'q', id: 'O14', src: 'H&N p.34', core: true,
    q: 'On axial CT at the level of the optic nerve, which muscles lie along the medial and lateral orbital walls?',
    o: ['Medial and lateral recti', 'Superior and inferior obliques', 'Levator palpebrae and superior rectus', 'Inferior rectus and inferior oblique', 'Temporalis and masseter'], a: 0,
    ex: 'At the optic nerve level the medial and lateral recti run along the walls on either side of the optic nerve sheath complex.' },
  { t: 'q', id: 'O15', src: 'H&N p.34',
    q: 'On the upper axial slice, which structure sits at the front of the orbit, upper and lateral?',
    o: ['Lacrimal gland', 'Superior oblique', 'Nasolacrimal duct', 'Medial rectus', 'Optic nerve'], a: 0,
    ex: 'The lacrimal gland lies in the upper outer front of the orbit. The superior oblique is upper medial; the nasolacrimal duct is low and medial.' },
  { t: 'q', id: 'O16', src: 'H&N p.34',
    q: 'On the lowest axial slice, the small canal at the front of the medial wall is the:',
    o: ['Nasolacrimal duct', 'Optic canal', 'Inferior orbital fissure', 'Superior orbital fissure', 'Ethmoid air cell'], a: 0,
    ex: 'The nasolacrimal duct runs down at the front of the medial wall, from the lacrimal sac to the nose.' },
  { t: 'q', id: 'O17', src: 'H&N p.32, 34', core: true,
    q: 'The optic nerve leaves the orbit through the:',
    o: ['Optic canal', 'Superior orbital fissure', 'Inferior orbital fissure', 'Nasolacrimal canal', 'Infraorbital foramen'], a: 0,
    ex: 'The optic nerve sheath complex runs to the apex and passes through the optic canal in the lesser wing of sphenoid.' },
  { t: 'c', id: 'O-C6', title: 'The orbit in the coronal plane: CT and MRI', src: 'H&N p.35–37',
    html: '<div class="two">' + CVS.fig('hn-orbit-cor1', 'Coronal CT through the globes, soft tissue window.', 'hn', 35) + CVS.fig('hn-orbit-mri2', 'Coronal T2-weighted MRI behind the globe.', 'hn', 37) + '</div>' +
      '<ul class="pts"><li>At the globe: the {{lacrimal gland}} superolateral; the recti hug the globe.</li>' +
      '<li>Behind the globe the muscles form a ring around the {{optic nerve sheath complex}}: levator and superior rectus on top, {{medial rectus}}, {{inferior rectus}}, {{lateral rectus}}, and the {{superior oblique}} superomedially.</li>' +
      '<li>Veins: the {{superior ophthalmic vein}} lies just below the superior rectus; the {{inferior ophthalmic vein}} lies low in the fat.</li>' +
      '<li>The {{inferior oblique}} runs under the front of the globe (MRI, p.36).</li>' +
      '<li>On T2 MRI the {{orbital fat}} is bright and the muscles are dark. Toward the apex the cone narrows and the muscles crowd around the nerve.</li></ul>' },
  { t: 'q', id: 'O18', src: 'H&N p.35, 37', core: true,
    q: 'On a coronal image behind the globe, what lies in the centre of the ring of rectus muscles?',
    o: ['Optic nerve sheath complex', 'Superior ophthalmic vein', 'Lacrimal gland', 'Inferior oblique', 'Ethmoid air cell'], a: 0,
    ex: 'The four recti and the levator form a cone around the optic nerve sheath complex.' },
  { t: 'q', id: 'O19', src: 'H&N p.37',
    q: 'Which muscle lies <b>superomedially</b>, apart from the four recti, on coronal MRI behind the globe?',
    o: ['Superior oblique', 'Inferior oblique', 'Lateral rectus', 'Levator palpebrae superioris', 'Inferior rectus'], a: 0,
    ex: 'The superior oblique runs along the upper medial wall, above the medial rectus.' },
  { t: 'tf', id: 'O20', src: 'H&N p.37',
    q: 'On the coronal T2 MRI, the superior ophthalmic vein lies just below the inferior rectus.', a: false,
    ex: 'False. The superior ophthalmic vein lies just below the superior rectus; the inferior ophthalmic vein is low in the inferolateral fat.' },
  { t: 'q', id: 'O21', src: 'H&N p.36',
    q: 'Which muscle is seen under the front of the globe on coronal MRI, but is not part of the cone of recti at the back?',
    o: ['Inferior oblique', 'Inferior rectus', 'Superior oblique', 'Medial rectus', 'Levator palpebrae superioris'], a: 0,
    ex: 'The inferior oblique arises at the front of the orbital floor and passes under the globe; it does not run back to the apex.' }
]});
