# appli-hebrew

« Shalom ! » : app pour apprendre l'hébreu en partant de zéro (alphabet, puis conversation). PWA installable sur iPhone et Android, copiée sur l'app d'anglais « Let's Talk! ».
Les fichiers de l'app sont dans `public/` (les leçons dans `public/lessons.js`). Hébergée sur Cloudflare Workers (`npx wrangler deploy`), sans étape de build.

## Voix
Les mots et phrases sont des mp3 dans `public/audio/`, fabriqués à partir de la transcription latine avec les voix MBROLA hébraïques (hb1 homme, hb2 femme).
Après avoir ajouté du texte hébreu (Ubuntu : `apt install mbrola mbrola-hb1 mbrola-hb2 ffmpeg`) :

    node outils/liste.js ./public/lessons.js > outils/list.json
    python3 outils/generer-audio.py
