/* node check.js: validate the deck data and every layer keyed to it. Exit code 1 on any error. */
const fs=require('fs'),vm=require('vm');
const ctx={window:{}};ctx.window=ctx;vm.createContext(ctx);
JSON.parse(fs.readFileSync('data/sections.json','utf8')).forEach(f=>vm.runInContext(fs.readFileSync('data/'+f+'.js','utf8'),ctx,{filename:f}));
['src/thai-data.js','src/thai-explain.js','src/tutor-notes.js','src/tutor-script.js'].forEach(f=>vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f}));
const S=ctx.CVS.sections,ids=new Set(),errs=[],warn=[];const tot={c:0,q:0,tf:0,open:0,core:0,blanks:0,figs:0};
const say=(sid,id)=>{const sc=(ctx.TUTOR_SCRIPT.sec||{})[sid];return !!(sc&&sc.say&&sc.say[id]);};
const plain=h=>String(h).replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ').replace(/\s+/g,' ').trim();
const imgs=new Set();
console.log('sec short                  c   q  tf open core blanks figs');
S.forEach(s=>{let n={c:0,q:0,tf:0,open:0,core:0,blanks:0,figs:0},seenC=false;
 ['id','short','title','kind','blurb'].forEach(k=>{if(!s[k])errs.push('section '+s.id+' missing '+k)});
 s.items.forEach((it,i)=>{
  if(ids.has(it.id))errs.push('dup '+it.id);ids.add(it.id);n[it.t]++;tot[it.t]++;if(it.core){n.core++;tot.core++;}
  const want=it.t==='c'?new RegExp('^'+s.id+'-C\\d+$'):new RegExp('^'+s.id+'\\d+$');
  if(!want.test(it.id))errs.push('id pattern '+it.id);
  if(it.t==='c'){seenC=true;
   const cz=(it.html.match(/<span class="cz">/g)||[]).length;n.blanks+=cz;tot.blanks+=cz;
   if(cz<5||cz>15)warn.push(it.id+' has '+cz+' blanks');
   (it.html.match(/<(h[1-6]|th|caption|figcaption)\b[\s\S]*?<\/\1>/g)||[]).forEach(m=>{if(m.includes('class="cz"'))errs.push('blank inside heading/caption '+it.id)});
   const outside=plain(it.html.replace(/<span class="cz">([\s\S]*?)<\/span>/g,' ')).toLowerCase();
   (it.html.match(/<span class="cz">([\s\S]*?)<\/span>/g)||[]).forEach(m=>{const w=plain(m).toLowerCase();if(w.length>=4&&new RegExp('(^|[^a-z0-9])'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'([^a-z0-9]|$)').test(outside))warn.push(it.id+' blank "'+w+'" also appears unblanked')});
   if(!ctx.THAI_CONCEPT[it.id])errs.push('no THAI_CONCEPT '+it.id);
   if(!ctx.THAI_EXPLAIN[it.id])errs.push('no THAI_EXPLAIN '+it.id);else if(ctx.THAI_EXPLAIN[it.id].length<4||ctx.THAI_EXPLAIN[it.id].length>7)warn.push(it.id+' THAI_EXPLAIN has '+ctx.THAI_EXPLAIN[it.id].length+' paragraphs');
   if(!ctx.TUTOR_NOTES[it.id])errs.push('no TUTOR_NOTES '+it.id);
   if(!say(s.id,it.id))errs.push('no SAY '+it.id);
  } else {
   if(!seenC)errs.push('question before any concept '+it.id);
   if(!it.q)errs.push('no stem '+it.id);
   if(!it.src)errs.push('no src '+it.id);
   if(it.t==='q'){if(!Array.isArray(it.o)||it.o.length<2)errs.push('options '+it.id);const A=Array.isArray(it.a)?it.a:[it.a];A.forEach(a=>{if(!(Number.isInteger(a)&&a>=0&&a<it.o.length))errs.push('bad ans '+it.id)});}
   if(it.t==='tf'&&typeof it.a!=='boolean')errs.push('tf ans '+it.id);
   if(it.t==='open'&&!it.ans)errs.push('open without ans '+it.id);
   if(!it.ex&&it.t!=='open')errs.push('no ex '+it.id);
   const tq=ctx.THAI_Q[it.id];if(!tq||!tq.length||tq.length>3)errs.push('THAI_Q 1-3 bullets '+it.id);
   if(it.core&&!say(s.id,it.id))errs.push('core question without SAY '+it.id);
  }
  ['q','ex','html','ans','flag','fig'].forEach(k=>{if(it[k]&&/\$\{|`|\{\{|\}\}/.test(it[k]))errs.push('template/cloze residue '+k+' '+it.id)});
  [it.html,it.fig].forEach(h=>{(String(h||'').match(/<img [^>]*>/g)||[]).forEach(tag=>{n.figs++;tot.figs++;
   const src=(tag.match(/src="([^"]+)"/)||[])[1],w=+(tag.match(/width="(\d+)"/)||[])[1],hh=+(tag.match(/height="(\d+)"/)||[])[1];
   if(!src||!fs.existsSync(src))errs.push('missing image '+src+' in '+it.id);else{imgs.add(src.replace(/^img\//,''));if(!w||!hh)errs.push('img without size '+src);}
   if(!/alt="[^"]+"/.test(tag))errs.push('img without alt '+it.id);});});
 });
 if(!n.core)errs.push('section without core questions '+s.id);
 const q=n.q+n.tf+n.open;console.log(s.id.padEnd(4),s.short.padEnd(20),String(n.c).padStart(3),String(n.q).padStart(3),String(n.tf).padStart(3),String(n.open).padStart(4),String(n.core).padStart(4),String(n.blanks).padStart(6),String(n.figs).padStart(4));
 if(!ctx.THAI_SEC[s.id])errs.push('no THAI_SEC '+s.id);
 if(!(ctx.TUTOR_SCRIPT.sec||{})[s.id])errs.push('no script for section '+s.id);
});
/* every key of every layer must name a real card */
const secIds=new Set(S.map(s=>s.id));
[['THAI_Q',ids],['THAI_CONCEPT',ids],['THAI_EXPLAIN',ids],['TUTOR_NOTES',ids],['THAI_SEC',secIds]].forEach(([k,set])=>Object.keys(ctx[k]).forEach(id=>{if(!set.has(id))errs.push(k+' key without card: '+id)}));
Object.keys(ctx.TUTOR_SCRIPT.sec||{}).forEach(sid=>Object.keys(ctx.TUTOR_SCRIPT.sec[sid].say||{}).forEach(id=>{if(!ids.has(id)||!id.startsWith(sid))errs.push('SAY key without card in its section: '+id)}));
Object.keys(ctx.TUTOR_SCRIPT.sec||{}).forEach(sid=>{const sc=ctx.TUTOR_SCRIPT.sec[sid];if(!sc.open||!sc.u||sc.u.length<5||sc.u.length>8)errs.push('section script needs open + 5-8 points: '+sid)});
Object.keys(ctx.TUTOR_SCRIPT.sec||{}).forEach(id=>{if(!secIds.has(id))errs.push('script section without section: '+id)});
(ctx.TUTOR_SCRIPT.plan||[]).forEach(p=>p[1].forEach(id=>{if(!secIds.has(id))errs.push('plan names unknown section '+id)}));
const planned=new Set([].concat(...(ctx.TUTOR_SCRIPT.plan||[]).map(p=>p[1])));secIds.forEach(id=>{if(!planned.has(id))errs.push('section not in video plan '+id)});
const unused=fs.readdirSync('img').filter(f=>/\.(jpg|png)$/.test(f)&&!imgs.has(f));
const Q=tot.q+tot.tf+tot.open;
console.log('TOTAL concepts',tot.c,'· questions',Q,'('+tot.q+' MCQ, '+tot.tf+' T/F, '+tot.open+' open) · core',tot.core,'· blanks',tot.blanks,'· figures',tot.figs);
if(unused.length)console.log('unused images:',unused.join(' '));
if(warn.length)console.log('warnings ('+warn.length+'):\n  '+warn.join('\n  '));
console.log('errors:',errs.length?'\n  '+errs.join('\n  '):'none');
if(errs.length)process.exit(1);
