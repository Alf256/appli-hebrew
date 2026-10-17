// Liste tous les textes à enregistrer avec leur hébreu : { "voix|transcription": "hébreu avec nikoud" }
global.window = {};
const sp = x => { const i = x.indexOf("|"); return i < 0 ? [x, ""] : [x.slice(0,i), x.slice(i+1)] };
const out = {};
const add = (v, x) => { const [h,t] = sp(x); if(!t) throw new Error("pas de transcription : " + x);
  const k = v + "|" + t; if(out[k] && out[k] !== h) console.error("ATTENTION deux hébreux pour", k, out[k], h); out[k] = h };
global.E = x => { add("m", x); return "" };
require(require("path").resolve(process.argv[2]));
const M = window.MODULES, MALE = new Set(window.MALE);
for(const m of M) for(const st of m.steps){
  if(st.t === "words") st.items.forEach(([e,x]) => add("m", x));
  if(st.t === "phrases") st.items.forEach(([x]) => add("m", x));
  if(st.gram) st.gram.forEach(([x]) => add("m", x));
  if(st.t === "listen") add("m", st.say);
  if(st.t === "quiz" && st.he) add("m", st.c[st.a]);
  if(st.t === "build") add("m", st.he);
  if(st.t === "dialog"){ const them = MALE.has(st.who) ? "m" : "f";
    st.lines.forEach(L => { add(them, L.say); add("m", L.c[0]) }) }
}
console.log(JSON.stringify(out, null, 0));
