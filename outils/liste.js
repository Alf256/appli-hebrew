// Liste tous les textes à enregistrer : "voix|transcription"
global.window = {};
const sp = x => { const i = x.indexOf("|"); return i < 0 ? [x, ""] : [x.slice(0,i), x.slice(i+1)] };
const keys = new Set();
global.E = x => { keys.add("m|" + sp(x)[1]); return "" };
require(require("path").resolve(process.argv[2]));
const M = window.MODULES, MALE = new Set(window.MALE);
const add = (v, x) => { const t = sp(x)[1]; if(!t) throw new Error("pas de transcription : " + x); keys.add(v + "|" + t) };
const problems = [];
for(const m of M) for(const st of m.steps){
  if(st.t === "words") st.items.forEach(([e,x]) => add("m", x));
  if(st.t === "phrases") st.items.forEach(([x]) => add("m", x));
  if(st.gram) st.gram.forEach(([x]) => add("m", x));
  if(st.t === "listen") add("m", st.say);
  if(st.t === "quiz" && st.he) add("m", st.c[st.a]);
  if(st.t === "build"){ const [h,t] = sp(st.he); add("m", st.he);
    if(h.split(" ").length !== t.split(" ").length) problems.push("build : nombre de mots différent : " + st.he);
    st.extra.forEach(x => { if(!sp(x)[1]) problems.push("piège sans transcription : " + x) }) }
  if(st.t === "dialog"){ const them = MALE.has(st.who) ? "m" : "f";
    st.lines.forEach(L => { add(them, L.say); add("m", L.c[0]); L.c.forEach(c => { if(!sp(c)[1]) problems.push("choix sans transcription : " + c) }) }) }
  if(st.t === "quiz" && st.he) st.c.forEach(c => { if(!sp(c)[1]) problems.push("choix sans transcription : " + c) });
}
if(problems.length){ console.error(problems.join("\n")); process.exit(1) }
console.log(JSON.stringify([...keys].sort(), null, 0));
