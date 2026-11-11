/* Short concept cards: each card's body is written here as arrow chains and brief bullets.
   Loaded last (data/sections.json), so it rebuilds the html of every card listed below.
   The card's figures and flow widgets are taken from its original html in the section file;
   the text there is superseded. Block syntax (one string per block):
     '> A → B → C'      cause → effect chain          '- text'   bullet (consecutive bullets form one list)
     '## Heading'        small group label            '! text'   exam trap / past-paper note
     '| a | b |'         table row (first row = head)  '= text'   centered equation
     '@F1' '@F2'         place that figure here; figures not placed go to a column beside the text
     '@X1'               place that flow widget        {{...}}    cloze blank (keep 3–8 per card, key ideas only)
     '---'               what follows goes full width under the text and figure columns */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    /* figures in document order; a collapsed <details> that holds a figure (answers, extra slides) is kept whole */
    String(it.html).replace(/<details\b[\s\S]*?<\/details>|<figure\b[\s\S]*?<\/figure>/g, function (m) { if (/^<figure/.test(m) || /<figure\b/.test(m)) F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;

/* ---------- H · Head and neck imaging ---------- */
S_('H-C1', [
  '> Skull = many overlapping lines → {{CT and MRI}} have largely replaced plain films',
  '- Still helps: skull fracture · foreign body · screening for {{paranasal sinusitis}}',
  '- Pros: cheap, available, no preparation, low dose',
  '- Cons: {{two-dimensional}} (superimposed) · poor for {{base of skull}} and complex facial fractures'
]);
S_('H-C2', [
  '| View | Beam | Shows best |',
  '| Caldwell | prone, 15° | {{frontal sinus}}, orbit fracture |',
  '| Towne | supine, {{30°}} | {{occipital bone}}, mandible |',
  '| Waters | prone, chin up | {{facial fractures}}, paranasal sinuses |',
  '- AP and lateral: overview · lateral shows the sella and sinuses in profile'
]);
S_('H-C3', [
  '> Cross-sections → no overlap · contrast → vessels',
  '- First choice for the {{bony orbit}}, {{skull base}}, temporal bone',
  '- Best for the {{paranasal sinuses}} and nasal cavity',
  '- Pros: fast, MPR and 3-D · cons: {{high radiation}}, cost',
  '! Optic pathway → MRI (slide 13 lists it under CT)'
]);
S_('H-C4', [
  '| Tool | Does |',
  '| Windowing | picks which CT numbers fill the grey scale: {{soft tissue}} or {{bone}} window |',
  '| MPR | re-slices the {{axial}} stack into coronal and sagittal |',
  '| VRT | {{3-D}} view (facial fractures) |',
  '> Same data → no {{rescan}}, no extra dose'
]);
S_('H-C5', [
  '> Magnet + radiofrequency → {{no ionizing radiation}}',
  '- Best soft-tissue contrast · preferred for the {{optic pathway}}, face and neck soft tissue',
  '- Sees vessels without contrast (sensitive to {{blood flow}})',
  '- Cons: cost, {{long scan}} · not with a pacemaker, ear implant, claustrophobia'
]);
S_('H-C6', [
  '| Question | First choice |',
  '| Fracture, foreign body | {{plain film}} |',
  '| Sinusitis screen | {{Waters}} view |',
  '| Bony orbit, skull base, temporal bone | CT (bone window) |',
  '| Complex facial fracture | CT + MPR, VRT |',
  '| Optic pathway, neck soft tissue | MRI |',
  '| Child, repeated imaging | MRI ({{no radiation}}) |',
  '| Pacemaker, implant, claustrophobia | avoid MRI → CT |',
  '> Bone or air → CT · soft tissue → MRI · then check the patient'
]);

/* ---------- S · Skull ---------- */
S_('S-C1', [
  '| Cranial (“calvarium” on the slide) | Facial |',
  '| frontal, parietal, temporal, occipital, ethmoid, {{sphenoid}} | maxilla, mandible, zygomatic, palatine, lacrimal, {{vomer}}, nasal, {{inferior turbinate}} |',
  '- Middle concha belongs to the ethmoid, not the maxilla'
]);
S_('S-C2', [
  '- Midline: {{crista galli}} → nasal septum → mandible',
  '- Orbit: {{lesser wing}} = near-horizontal line · {{greater wing}} = oblique line',
  '- Below the orbits: maxillary sinuses · lateral edges: {{mastoid processes}}',
  '- Sphenoid = a bat: body in the middle, small wings on top, big wings below'
]);
S_('S-C3', [
  '- Vault: frontal → parietal → occipital',
  '- Sinuses front → back: frontal · ethmoid · {{sphenoid}} (under the sella) · maxillary (above the palate)',
  '> Central skull base: {{sella turcica}} on top → {{clivus}} slopes down and back',
  '- Behind: {{mastoid air cells}}, mandibular condyle in front of them',
  '- Hard palate = {{palatine process of the maxilla}}'
]);
S_('S-C4', [
  '> Front → back along the sphenoid: {{tuberculum sellae}} → pituitary fossa → {{dorsum sellae}}',
  '- Clinoid processes: anterior over the front · posterior on top of the dorsum',
  '- Below: {{sphenoid sinus}} · behind and down: clivus'
]);

/* ---------- O · Orbit ---------- */
S_('O-C1', [
  '- Paired cones: eyelids (anterolateral) → apex ({{posteromedial}})',
  '- Axes diverge ~{{45°}} · medial walls nearly parallel',
  '| Neighbour | Wall |',
  '| Anterior cranial fossa | roof |',
  '| Ethmoid cells, nasal cavity | medial |',
  '| {{Maxillary sinus}} | floor |',
  '> Thin shared walls → sinus disease or fracture reaches the orbit'
]);
S_('O-C2', [
  '| Wall | Mainly | With |',
  '| Roof | frontal | small sphenoid wing |',
  '| Medial ({{lamina papyracea}}) | ethmoid | maxilla, lacrimal, sphenoid |',
  '| Floor | {{orbital plate of maxilla}} | zygomatic, palatine |',
  '| Lateral | zygomatic | {{greater wing}} |',
  '| Apex | optic canal in the {{lesser wing}} | |',
  '- 7 bones · the temporal bone is not one'
]);
S_('O-C3', [
  '> Ball bigger than the rim → pushes the globe back → orbital {{pressure ↑}}',
  '> Thin {{floor}} breaks → into the {{maxillary sinus}}',
  '> Orbital fat + {{inferior rectus}} herniate',
  '- Rim stays intact → look on {{coronal}} CT · medial wall = lamina papyracea (“paper”)'
]);
S_('O-C4', [
  '- Rim: superior and inferior orbital margins',
  '- Inside: lesser wing above, greater wing below → dark cleft between = {{superior orbital fissure}}',
  '- Medial: {{lamina papyracea}} with {{ethmoid}} air cells beside it · septum in the midline'
]);
S_('O-C5', [
  '| Slice | Key structures |',
  '| Upper | levator + superior rectus · superior oblique · {{lacrimal gland}} (front, upper lateral) |',
  '| Mid | {{medial and lateral recti}} · optic nerve → {{optic canal}} |',
  '| Lower | inferior rectus · {{nasolacrimal duct}} (front of the medial wall) |'
]);
S_('O-C6', [
  '> Behind the globe: recti form a ring around the {{optic nerve sheath complex}}',
  '- {{Superior oblique}}: superomedial, outside the ring',
  '- Superior ophthalmic vein: just below the {{superior rectus}}',
  '- {{Inferior oblique}}: under the front of the globe',
  '- T2 MRI: fat bright, muscles dark'
]);

/* ---------- N · Temporal bone, nose, sinuses ---------- */
S_('N-C1', [
  '- Petrous = “stone-like”: dense pyramid holding the middle ear, inner ear, {{internal auditory canal}}',
  '| Ear | Parts |',
  '| External | auricle, canal → tympanic membrane |',
  '| Middle | {{epitympanum}} (top) · mesotympanum · hypotympanum |',
  '| Inner | bony and {{membranous labyrinth}} |'
]);
S_('N-C2', [
  '> Lateral → medial: {{external auditory canal}} → middle ear ({{malleus}}) → inner ear',
  '- Inner ear: {{cochlea}} in front · semicircular canals behind',
  '- {{Internal auditory canal}} runs medially',
  '- Behind: mastoid antrum (one space) + mastoid air cells',
  '- Bone window: air black, otic capsule white'
]);
S_('N-C3', [
  '- Floor = palate · roof = skull base · septum splits it',
  '> Front: nares · back: {{choanae}} → {{nasopharynx}}',
  '- Lateral wall: superior, middle, {{inferior}} conchae (each roofs its meatus)',
  '- On Caldwell: the lowest concha bulges from the lateral wall'
]);
S_('N-C4', [
  '| Sinus | Where | Plain view |',
  '| Frontal | above the orbits | {{Caldwell}} |',
  '| Ethmoid | between the orbits | same frontal view |',
  '| Maxillary | below the orbits | {{Waters}} |',
  '| Sphenoid | under the sella | {{lateral}} |',
  '> Normal sinus = dark (air) · sinusitis → grey, opaque or an {{air-fluid level}}'
]);
S_('N-C5', [
  '> Coronal CT, bone window → drainage paths',
  '- Top → down: ethmoid cells → {{ethmoidal bulla}} → middle concha → inferior concha',
  '- {{Hiatus semilunaris}}: slit below the bulla into the middle meatus',
  '> {{Ostiomeatal unit}} = shared drain of the frontal, anterior ethmoid and {{maxillary}} sinuses → one block, three sinuses',
  '- Posterior ethmoid and sphenoid don’t use it'
]);
S_('N-C6', [
  '> Axial, top → down: frontal → ethmoid (with {{sphenoid}} behind, midline) → {{maxillary}} (lowest, beside the nose)',
  '> Sagittal: the back sinus sits under the {{sella turcica}}, above the {{nasopharynx}}'
]);

/* ---------- L · Pharynx and larynx ---------- */
S_('L-C1', [
  '> Pharynx: skull base → lower border of the {{cricoid}} → cervical esophagus',
  '| Part | From → to |',
  '| Nasopharynx | skull base → {{soft palate}} |',
  '| Oropharynx | below the palate → valleculae, tongue base ({{hyoid}} level) |',
  '| Hypopharynx | pharyngoepiglottic fold → esophagus |'
]);
S_('L-C2', [
  '- Behind the nasal cavity, skull base → soft palate',
  '> Lateral wall, front → back: {{Eustachian tube opening}} → {{torus tubarius}} → {{fossa of Rosenmüller}}',
  '- Read it like a word: opening, bump, pocket'
]);
S_('L-C3', [
  '## Oropharynx',
  '- Soft palate → valleculae (hyoid level) · vallecula = pocket between the {{base of tongue}} and epiglottis',
  '## Hypopharynx',
  '- Behind the larynx: pharyngoepiglottic fold → {{cricoid}} → esophagus',
  '- {{Pyriform sinuses}}: anterolateral recesses, one each side of the larynx'
]);
S_('L-C4', [
  '| Level | Contains |',
  '| Supraglottis | epiglottis, {{false fold}} |',
  '| Glottis | {{vocal folds}} and the gap between them |',
  '| Subglottis | below the cords → inside the cricoid ring → trachea |',
  '> Top → bottom: vestibular fold → {{ventricle}} → vocal fold',
  '- Pyriform recess beside it belongs to the hypopharynx'
]);
S_('L-C5', [
  '> Top → bottom: nasopharynx → soft palate → oropharynx → {{vallecula}} → {{epiglottis}} → hypopharynx → larynx → trachea',
  '- {{Hyoid}} in front, at about the level of the fourth item',
  '- Airway = dark column in front of the spine'
]);

/* ---------- C · Chest imaging ---------- */
S_('C-C1', [
  '> White → black: {{metal}} → bone → soft tissue → {{fat}} → {{air}}',
  '- An edge shows only where two densities meet (heart against aerated lung)',
  '- {{CXR}} = first test for common respiratory problems'
]);
S_('C-C2', [
  '- Uses: {{consolidation}}, mass, cancer staging, {{interstitial lung disease}}',
  '| Window | Level | Width |',
  '| {{Lung}} | −500 | 1500 |',
  '| Bone | +500 | 2000 |',
  '| Mediastinum | +50 | 500 |',
  '= Range = level ± width ÷ 2'
]);
S_('C-C3', [
  '- Best soft tissue → heart, mediastinum, hilum, diaphragm, {{chest wall}}',
  '> Lung is mostly air → MRI {{limited}} for lung parenchyma',
  '| Question | Test |',
  '| First look | CXR |',
  '| Consolidation, mass, cancer, ILD | {{CT}} |',
  '| Heart, mediastinal, chest-wall soft tissue | MRI |'
]);
S_('C-C4', [
  '> Beam {{posterior → anterior}} · upright, anterior chest on the receptor · full inspiration',
  '> Elbows forward → {{scapulae}} move off the lungs',
  '> Heart near the receptor → {{least magnified}} → judge heart size here'
]);
S_('C-C5', [
  '- Lateral: side of the chest on the receptor · beam {{right to left}} · arms up',
  '- AP: {{supine or sitting}} · neonates, unstable or bedridden patients',
  '> AP → heart far from the receptor → {{magnified}} → judge heart size only on PA'
]);

/* ---------- A · Airways, lobes, fissures ---------- */
S_('A-C1', [
  '- Midline tube: subglottis (2 cm below the cords) → {{carina}}',
  '- About {{12 cm}} long',
  '> C-shaped rings ({{incomplete}}) on the front 2/3 · back 1/3 = {{membranous}} part'
]);
S_('A-C2', [
  '- Carinal angle ~{{60°}} (50–75°)',
  '> Right main bronchus: {{shorter}}, more vertical → gives the upper lobe bronchus early → {{bronchus intermedius}}',
  '> Left: longer, horizontal → upper and lower lobe bronchi',
  '> Inhaled object → right side → upright: {{right lower lobe}}'
]);
S_('A-C3', [
  '| | Right | Left |',
  '| Lobes | 3 | 2 |',
  '| Fissures | major + minor | oblique |',
  '| Segments | 10 | 8 |',
  '> PA: lower lobe reaches high {{behind}} the middle and upper lobes → lobes overlap',
  '> Right lower zone shadow → middle or lower lobe? → the {{lateral}} film decides',
  '- Middle lobe on the side view = {{anterior, inferior}} wedge'
]);
S_('A-C4', [
  '- Sagittal right: RUL top · {{RML}} front wedge · RLL back and base',
  '- Sagittal left: LUL front and top · {{LLL}} behind the oblique fissure',
  '- Coronal: middle lobe against the {{right heart border}} · lower lobes on the diaphragm',
  '> Lower lobes mostly {{posterior}} · middle lobe, lingula anterior'
]);
S_('A-C5', [
  '| Fissure | Separates | Seen on |',
  '| Right major | RUL + RML from {{RLL}} | lateral, CT |',
  '| Right minor | {{RUL from RML}} | PA and lateral |',
  '| Left oblique | LUL from LLL | lateral, CT |',
  '- Axial CT: minor fissure = curved line {{in front of}} the major'
]);

/* ---------- P · Silhouette sign, pleura ---------- */
S_('P-C1', [
  '> Border seen only because {{air-filled lung}} lies against it',
  '> Soft-tissue density against it → border {{disappears}}',
  '> Lost border → lesion in the lobe that {{touches}} it',
  '- Lesion in front or behind → border stays visible (RLL keeps the heart border)'
]);
S_('P-C2', [
  '| Border lost | Lobe |',
  '| Right paratracheal stripe, azygos | RUL |',
  '| Right heart border | {{RML}} |',
  '| Right hemidiaphragm | RLL |',
  '| Aortic knob | {{LUL}} |',
  '| Left heart border | {{lingula}} |',
  '| Descending aorta, left hemidiaphragm | {{LLL}} |',
  '> Upper lobes → upper mediastinum · middle lobe and its left partner → heart · lower lobes → diaphragm'
]);
S_('P-C3', [
  '> RUL: right upper zone dense · {{paratracheal stripe}} lost · lower edge = minor fissure',
  '> RML: right heart border lost · right hemidiaphragm {{visible}}',
  '> LLL: behind the heart · {{left hemidiaphragm}} lost · left heart border sharp'
]);
S_('P-C4', [
  '- {{Parietal}} lines the chest wall · {{visceral}} covers the lung',
  '- Pleural cavity = {{potential space}} · normal pleura not seen on CXR or CT',
  '> Fluid → effusion · air → pneumothorax'
]);
S_('P-C5', [
  '## Effusion',
  '> Fluid → blunts the {{costophrenic angle}} → hides the hemidiaphragm',
  '## Pneumothorax',
  '> Air → {{visceral pleural line}} visible → {{no lung markings}} beyond it'
]);
S_('P-C6', [
  '> {{Asbestos}} → {{parietal}} pleura thickens and calcifies',
  '- Face-on: patchy shadows · in profile: dense lines on the chest wall and {{diaphragm}}',
  '- Marks exposure, not lung disease'
]);

/* ---------- M · Hilum, mediastinum, diaphragm, chest wall ---------- */
S_('M-C1', [
  '- Root of the lung: {{pulmonary artery}}, pulmonary vein, {{bronchus}}, lymph nodes',
  '- Left hilum usually {{higher}}',
  '> Big hilum → vessels or nodes? → CT'
]);
S_('M-C2', [
  '- Between the lungs: sternum → {{thoracic spine}} · inlet → diaphragm',
  '> Plane of Ludwig: {{sternal angle}} → T4/5 → splits the {{superior}} from the inferior mediastinum'
]);
S_('M-C3', [
  '| Compartment | Contents |',
  '| Anterior | {{thymus}}, nodes, fat |',
  '| Middle | heart, great vessels, {{trachea and main bronchi}}, phrenic, vagus |',
  '| Posterior | esophagus, descending aorta, {{azygos}}, thoracic duct |',
  '- Middle back border = pericardium + posterior tracheal wall · no superior compartment in this scheme'
]);
S_('M-C4', [
  '| Compartment | Typical masses |',
  '| Anterior | {{thymoma}}, retrosternal goiter, germ cell tumor, nodes |',
  '| Middle | nodes, aortic arch aneurysm, {{enlarged pulmonary artery}}, cysts |',
  '| Posterior | {{neurogenic tumor}}, hiatal hernia, descending aortic aneurysm |',
  '> First decide the compartment → then use its list'
]);
S_('M-C5', [
  '- Right hemidiaphragm {{higher}} by 1–1.5 cm',
  '| Opening | Level | Passes |',
  '| Caval | T8 | {{IVC}} |',
  '| Esophageal | T10 | esophagus, left gastric vessels, vagus |',
  '| Aortic | T12 | aorta, {{thoracic duct}}, azygos |',
  '> Stomach through the esophageal hiatus → hiatal hernia → {{retrocardiac}} mass'
]);
S_('M-C6', [
  '- Intercostal layers: external, internal, {{innermost}}',
  '> Bundle under each rib: {{V-A-N}} top → bottom → needle just {{above}} the lower rib',
  '- Sternum: {{manubrium}} → body → xiphoid'
]);
