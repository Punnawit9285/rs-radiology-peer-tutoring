# RS I Radiologic Anatomy · Peer support 82 deck

Question-first peer-tutoring material for the two RS I radiology lectures: **Radiologic Anatomy of Head and Neck** and **Radiologic Anatomy of Respiratory System** (Dr. Tanat Tabtieang, Department of Anatomy, MDCU).

## Open it

| | Link |
|---|---|
| **Student deck** (shown in the video) | https://punnawit9285.github.io/rs-radiology-peer-tutoring/student.html |
| **Tutor deck** (second screen: answers, Thai notes, script) | https://punnawit9285.github.io/rs-radiology-peer-tutoring/tutor.html |
| **Student handout PDF** | https://punnawit9285.github.io/rs-radiology-peer-tutoring/student.pdf?v=f43f92ee |

Open the student and tutor decks in the same browser and tick *Follow student* in the tutor deck: it jumps to whatever card the student deck shows.

## Sections

| ID | Section | Source slides |
|---|---|---|
| H | Imaging modalities of the head and neck | H&N 4–21 |
| S | The skull on radiographs | H&N 7–8, 23–27 |
| O | The orbit | H&N 28–37 |
| N | Temporal bone, nasal cavity and paranasal sinuses | H&N 38–47 |
| L | Pharynx and larynx | H&N 48–57 |
| C | Chest imaging and the plain chest film | RS 4–12 |
| A | Trachea, bronchi, lobes and fissures | RS 13–27, 33–38 |
| P | Silhouette sign and the pleura | RS 28–31, 33, 39–43 |
| M | Hilum, mediastinum, diaphragm and chest wall | RS 44–61 |

Questions are written from the slides and tagged with their slide page (e.g. `H&N p.26`, `RS p.31`). The radio-anatomy items of the AC79–AC81 past papers (9 items, tagged `AC79`, `AC80`, `AC81`) sit first after the card they test; their figures are cropped from the recall PDFs.

## Pages

- **`student.html`** (also `index.html`, `dist/deck.html`): Present and Browse modes, *Core only* filter, cloze blanks on every concept card (Space = next blank, Enter = all, R = hide, click a blank to flip it), click an option to see the answer, click a figure to zoom, L opens the Thai explanation, B toggles Browse. Swipe on phones.
- **`tutor.html`** (also `dist/notes.html`): the same cards with every answer and blank revealed, Thai bullets, a SAY line on each concept card and core question, the 5-video plan on the start card, an "Understand it: the 80%" summary on each section card, and Thai tutor notes beyond the slides.
- **`student.pdf`**: A4 handout. Each concept on one page with its blanks empty and numbered, then the quiz on that concept (no answers). At the back: the answer key with Thai explanations, the answers to every numbered blank, and each concept's Thai key points and explanation.

Figures are cropped from the two lecture handouts. Figures marked "labels replaced by numbers" are the same slides with each label covered by a number, for the identification questions.

## Building

```bash
tools/crops.sh     # crop figures from src-pdf/hn.pdf and src-pdf/rs.pdf (the handouts; not published) into img/, max 1100 px
tools/relabel.sh   # numbered versions of labelled figures for "what is label N?" questions (CHECK=1 tools/relabel ... keeps the slide labels beside the numbers, to verify the key)
node check.js      # IDs, answer keys, every Thai / tutor layer keyed to a real card, blanks, images
node build.js all  # student.html, index.html, tutor.html, dist/deck.html, dist/notes.html, dist/img/
tools/pdf.sh       # student.pdf: two headless-Chrome passes for real page numbers (CHROME=... to override);
                   # it embeds 800 px print copies of the figures (dist/pimg/, not committed)
```

Content lives in `data/<section>.js` (cards and questions), `src/thai-data.js` (Thai bullets, key points, section intros; shared by both decks and the PDF), `src/thai-explain.js`, `src/tutor-notes.js` and `src/tutor-script.js`. The engine is adapted from [cvs-peer-tutoring](https://github.com/Punnawit9285/cvs-peer-tutoring).
