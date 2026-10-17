# Enregistre les textes hébreux de l'app avec la voix Phonikud « michael » (homme), en mp3.
# Les enregistrements des voix de femme (clés "f|...", Noa et Maya) sont conservés tels quels (voix MBROLA hb2).
# Usage : node liste-hebreu.js ../public/lessons.js > he.json
#         python3 generer-audio-phonikud.py he.json DOSSIER_MODELES [DOSSIER_AUDIO]
# DOSSIER_MODELES contient phonikud-1.0.int8.onnx, michael.onnx et model.config.json (huggingface.co/Phonikud).
# Modèles sous licence non commerciale (usage éducatif seulement).
import json, hashlib, subprocess, os, sys, re, tempfile
import numpy as np
import soundfile as sf
from phonikud_onnx import Phonikud
from phonikud import phonemize
from piper_onnx import Piper
HERE = os.path.dirname(os.path.abspath(__file__))
texts = json.load(open(sys.argv[1]))
MODELS = sys.argv[2]
OUT = sys.argv[3] if len(sys.argv) > 3 else os.path.join(HERE, "..", "public", "audio")
old = {}
src = open(os.path.join(OUT, "map.js"), encoding="utf-8").read()
old = json.loads(src[src.index("{"):src.rindex("}") + 1])
nak = Phonikud(os.path.join(MODELS, "phonikud-1.0.int8.onnx"))
tts = Piper(os.path.join(MODELS, "michael.onnx"), os.path.join(MODELS, "model.config.json"))
m = {}
for k, he in sorted(texts.items()):
    name = k[0] + "-" + hashlib.sha1(k.encode()).hexdigest()[:10] + ".mp3"
    m[k] = name
    if k.startswith("f|"):
        assert os.path.exists(os.path.join(OUT, old.get(k, name))), k
        m[k] = old.get(k, name); continue
    if not re.search("[ְ-ׇ]", he): he = nak.add_diacritics(he)
    ph = phonemize(he)
    # la voix varie un peu à chaque essai : 3 essais calmes (bruit réduit), on garde celui de durée médiane
    # (un essai presque muet est écarté et refait)
    essais = []
    while len(essais) < 3:
        e = tts.create(ph, is_phonemes=True, noise_scale=0.4, noise_w=0.4)
        if np.abs(e[0]).max() > 0.25: essais.append(e)
    samples, sr = sorted(essais, key=lambda e: len(e[0]))[1]
    # volume homogène : on mesure la force de la parole seule (silences retirés) et on la ramène à -16 dB
    x = np.asarray(samples, dtype=np.float64)
    act = x[np.abs(x) > 0.02 * np.abs(x).max()]
    gain = -16 - 20 * np.log10(np.sqrt(np.mean(act ** 2)) + 1e-9)
    with tempfile.TemporaryDirectory() as t:
        sf.write(t + "/a.wav", samples, sr)
        subprocess.run(["ffmpeg","-v","error","-y","-i",t+"/a.wav","-af",f"silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,volume={gain:.2f}dB,alimiter=limit=0.9:level=disabled,adelay=80,apad=pad_dur=0.25","-ac","1","-ar","22050","-codec:a","libmp3lame","-b:a","48k",os.path.join(OUT, name)], check=True)
for f in os.listdir(OUT):
    if f.endswith(".mp3") and f not in m.values(): os.remove(os.path.join(OUT, f))
with open(os.path.join(OUT, "map.js"), "w", encoding="utf-8") as f:
    f.write("// Généré par le script audio : voix|transcription -> fichier mp3\nwindow.AUDIO=" + json.dumps(m, ensure_ascii=False, indent=0) + ";\n")
print(len(m), "enregistrements")
