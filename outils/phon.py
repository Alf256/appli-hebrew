# Transcription latine (avec accent sur la syllabe forte) -> fichier .pho pour MBROLA (voix hébraïques hb1 / hb2)
import re, unicodedata
VOW = "aeiou"
ACC = {"á":"a","é":"e","í":"i","ó":"o","ú":"u"}
# sons par voix : hb2 (femme) et hb1 (homme) n'ont pas les mêmes noms
MAP = {"hb2": {"X":"X","R":"R","tS":"tS","Ts":"Ts"}, "hb1": {"X":"x","R":"r","tS":"TS","Ts":"Ts"}}

def tokens(word):
    """Découpe un mot en sons. Renvoie liste de (son, est_voyelle, accentué)."""
    w = word.lower()
    out, i = [], 0
    while i < len(w):
        c = w[i]; two = w[i:i+2]
        if two == "sh": out.append(["S",0,0]); i += 2; continue
        if two == "kh": out.append(["X",0,0]); i += 2; continue
        if two == "ts": out.append(["Ts",0,0]); i += 2; continue
        if two == "ch": out.append(["tS",0,0]); i += 2; continue
        if two == "dj": out.append(["dZ",0,0]); i += 2; continue
        if c in ACC: out.append([ACC[c],1,1]); i += 1; continue
        if c in VOW: out.append([c,1,0]); i += 1; continue
        if c == "'": out.append(["?",0,0]); i += 1; continue
        m = {"y":"j","r":"R","w":"v","q":"k","c":"k","x":"X","j":"dZ"}.get(c, c)
        if m in "bvgdhzXtjklmnspfR" or m in ("dZ",):
            if out and out[-1][0] == m and not out[-1][1]: i += 1; continue  # consonne doublée
            out.append([m,0,0])
        i += 1
    # accent par défaut : dernière voyelle
    if not any(t[2] for t in out):
        for t in reversed(out):
            if t[1]: t[2] = 1; break
    # y après voyelle et devant consonne/fin -> diphtongue (ai, ei, oi, ui)
    res = []
    for k, t in enumerate(out):
        nxt = out[k+1] if k+1 < len(out) else None
        if t[0] == "j" and res and res[-1][1] and res[-1][0] in VOW and (nxt is None or not nxt[1]):
            res[-1][0] += "i"; continue
        res.append(t)
    # "?" sans voyelle derrière : on l'enlève
    res = [t for k,t in enumerate(res) if not (t[0]=="?" and (k+1>=len(res) or not res[k+1][1]))]
    return res

def utter(text):
    """Découpe une phrase en groupes séparés par la ponctuation."""
    t = text.replace("…","").replace("«","").replace("»","").replace("\"","")
    t = t.replace("-", " ")
    parts = re.findall(r"[^,.!?;:]+[,.!?;:]*", t)
    groups = []
    for p in parts:
        punct = re.findall(r"[,.!?;:]+$", p)
        words = [w for w in re.split(r"\s+", re.sub(r"[,.!?;:]+$","",p).strip()) if w]
        if words: groups.append((words, punct[0] if punct else ""))
    return groups

def pho(text, voice="hb2"):
    M = MAP[voice]
    base, top = (200, 245) if voice == "hb2" else (112, 135)
    groups = utter(text)
    lines = ["_ 60"]
    seq = []  # (son, durée, voyelle, accent, fin_de_groupe_question)
    for gi, (words, punct) in enumerate(groups):
        q = "?" in punct
        for wi, w in enumerate(words):
            toks = tokens(w)
            if not toks: continue
            lastword = wi == len(words) - 1
            # mot qui commence par une voyelle : petit coup de glotte (la voix n'a pas _-i, _-o, _-u)
            if toks[0][1] and (not seq or seq[-1][0] == "_" or seq[-1][2]):
                toks.insert(0, ["?",0,0])
            for t in toks:
                if seq and seq[-1][2] and t[1]:   # deux voyelles de suite
                    seq.append(["?",35,0,0,0])
                if t[1]:
                    d = 150 if t[2] else 85
                    if t[2] and lastword: d = 185
                else:
                    d = {"S":95,"s":95,"Ts":110,"X":90,"f":85,"z":80,"tS":110}.get(t[0], 68)
                seq.append([t[0], d, t[1], t[2], 0])
        # pause entre groupes
        p = 0 if gi == len(groups)-1 else (170 if punct.startswith(",") else 260)
        seq.append(["_", p or 60, 0, 0, q])
    # intonation : pente descendante, pic sur les syllabes accentuées, montée à la fin des questions
    n = len(seq)
    out = ["_ 60"]
    for k, (s, d, v, a, q) in enumerate(seq):
        if s == "_":
            out.append(f"_ {d}"); continue
        f = base - 25 * k / max(1, n)
        name = M.get(s, s)
        if v:
            # la question monte sur la dernière voyelle du groupe
            rest = seq[k+1:]
            endq = False
            for r in rest:
                if r[0] == "_": endq = r[4]; break
                if r[2]: break
            else: pass
            lastv = all(not r[2] for r in rest[:next((i for i,r in enumerate(rest) if r[0]=="_"), len(rest))])
            if endq and lastv:
                out.append(f"{name} {d+40} 0 {int(f)} 100 {int(top+45 if voice=='hb2' else top+25)}")
            elif a:
                out.append(f"{name} {d} 0 {int(f+10)} 50 {int(top - 30*k/max(1,n))} 100 {int(f)}")
            else:
                out.append(f"{name} {d} 50 {int(f)}")
        else:
            out.append(f"{name} {d}")
    out.append("_ 120")
    if voice == "hb1":   # la voix homme n'a ni coup de glotte ni diphtongues
        fixed = []
        for l in out:
            p = l.split(" ")
            if p[0] == "?": continue
            if p[0] in ("ai","ei","oi","ui"):
                d = int(p[1]); p[0] = p[0][0]; p[1] = str(int(d*0.75)); fixed.append(" ".join(p)); fixed.append(f"j {int(d*0.35)}"); continue
            fixed.append(l)
        out = fixed
    return "\n".join(out) + "\n"

if __name__ == "__main__":
    import sys
    print(pho(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "hb2"))
