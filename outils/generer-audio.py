# Enregistre tous les textes hébreux de l'app (voix MBROLA hb1 homme / hb2 femme) en mp3.
# À relancer après avoir ajouté du texte : node liste.js ../appli-hebrew/public/lessons.js > list.json && python3 generer-audio.py
import json, hashlib, subprocess, os, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from phon import pho
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "audio")
VOICE = {"m": "hb1", "f": "hb2"}
keys = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "list.json")))
m, warn = {}, []
def make(k):
    v, text = k.split("|", 1)
    name = v + "-" + hashlib.sha1(k.encode()).hexdigest()[:10] + ".mp3"
    dst = os.path.join(OUT, name)
    if not os.path.exists(dst):
        db = VOICE[v]
        with tempfile.TemporaryDirectory() as t:
            r = subprocess.run(["mbrola", "-e", f"/usr/share/mbrola/{db}/{db}", "-", f"{t}/a.wav"], input=pho(text, db).encode(), capture_output=True)
            if r.stderr.strip(): warn.append((k, r.stderr.decode().strip()[:200]))
            subprocess.run(["ffmpeg","-v","error","-y","-i",f"{t}/a.wav","-af","adelay=80,apad=pad_dur=0.25,loudnorm=I=-16:TP=-1.5:LRA=11","-ac","1","-ar","22050","-codec:a","libmp3lame","-b:a","48k",dst], check=True)
    return k, name
with ThreadPoolExecutor(8) as ex:
    for k, name in ex.map(make, keys): m[k] = name
for f in os.listdir(OUT):
    if f.endswith(".mp3") and f not in m.values(): os.remove(os.path.join(OUT, f))
with open(os.path.join(OUT, "map.js"), "w") as f:
    f.write("// Généré par le script audio : voix|transcription -> fichier mp3\nwindow.AUDIO=" + json.dumps(m, ensure_ascii=False, indent=0) + ";\n")
for w in warn: print("ATTENTION", w)
print(len(m), "enregistrements")
