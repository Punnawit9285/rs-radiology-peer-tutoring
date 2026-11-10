/* node build.js [deck|notes|all]: bundle each page into one self-contained HTML file (inline CSS and JS).
   Root pages load figures from img/; the copies in dist/ load them from dist/img/ (kept in step here). */
const fs=require('fs'),vm=require('vm'),path=require('path');
const rd=f=>fs.readFileSync(f,'utf8');
const FONTS='<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap">';
const DATA=JSON.parse(rd('data/sections.json')).map(f=>rd('data/'+f+'.js')).join('\n');
const TITLE='RS I Radiologic Anatomy &#183; Peer support 82';
function page(title, cssFiles, body, appFiles){
  appFiles=[].concat(appFiles);
  const js=DATA+'\n'+appFiles.map(rd).join('\n');
  new vm.Script(js,{filename:appFiles.join('+')}); // syntax check
  if(/<\/script/i.test(js)) throw new Error('script close tag inside JS');
  return '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>'+title+'</title>\n<meta name="description" content="Question-first peer-tutoring deck: radiologic anatomy of the head, neck and chest (RS I).">\n'+FONTS+'\n<style>\n'+cssFiles.map(rd).join('\n')+'\n</style>\n</head>\n<body>\n'+body+'\n<script>\n'+js+'\n</script>\n</body>\n</html>\n';
}
function syncImg(){
  fs.mkdirSync('dist/img',{recursive:true});
  const want=new Set(fs.readdirSync('img'));
  for(const f of want){const a='img/'+f,b='dist/img/'+f;if(!fs.existsSync(b)||fs.statSync(a).mtimeMs>fs.statSync(b).mtimeMs)fs.copyFileSync(a,b);}
  for(const f of fs.readdirSync('dist/img'))if(!want.has(f))fs.unlinkSync('dist/img/'+f);
}
const which=process.argv[2]||'deck';
if(which==='deck'||which==='all'){
  const html=page(TITLE,['src/base.css','src/deck.css'],rd('src/deck-body.html'),['src/thai-data.js','src/thai-explain.js','src/deck-app.js']);
  fs.writeFileSync('dist/deck.html',html); fs.writeFileSync('student.html',html); fs.writeFileSync('index.html',html);
  console.log('deck.html / student.html / index.html',html.length,'bytes');
}
if(which==='notes'||which==='all'){
  const html=page(TITLE+' (Tutor)',['src/base.css','src/notes.css'],rd('src/notes-body.html'),['src/thai-data.js','src/thai-explain.js','src/tutor-notes.js','src/tutor-script.js','src/notes-app.js']);
  fs.writeFileSync('dist/notes.html',html); fs.writeFileSync('tutor.html',html);
  console.log('notes.html / tutor.html',html.length,'bytes');
}
syncImg();
