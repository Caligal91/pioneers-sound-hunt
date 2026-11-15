#!/usr/bin/env python3
"""Make Sophia (Australian) voice clips and check single words with speech-to-text.
   python3 clips.py clips.json      where clips.json = {"w-igloo": "Igloo.", "f-igloo": "Find the igloo.", "intro-i": "...", ...}
   Existing files are kept. Word clips (w-*) are re-tried with other spellings until STT hears the word; failures are listed
   at the end -> drop those words from the game (do not ship a clip that STT cannot hear)."""
import json, os, re, subprocess, sys, urllib.request, urllib.error, shutil
key = os.environ['ELEVENLABS_API_KEY']; V = 'LtPsVjX1k0Kl4StEMZPK'; OUT = '/home/openclaw/projects/sound-hunt/voice-au'
def tts(text, path, stab=0.6):
    body = json.dumps({'text': text, 'model_id': 'eleven_multilingual_v2', 'voice_settings': {'stability': stab, 'similarity_boost': 0.8, 'speed': 0.85}}).encode()
    req = urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{V}?output_format=mp3_44100_64', data=body, headers={'xi-api-key': key, 'Content-Type': 'application/json'})
    import time
    for a in range(8):
        try: open(path, 'wb').write(urllib.request.urlopen(req, timeout=90).read()); return
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503) and a < 7: time.sleep(5 * (a + 1)); continue
            raise
def stt(path):
    r = subprocess.run(['curl', '-s', 'https://api.elevenlabs.io/v1/speech-to-text', '-H', 'xi-api-key: ' + key, '-F', 'model_id=scribe_v1', '-F', 'language_code=en', '-F', 'file=@' + path], capture_output=True, text=True)
    try: return json.loads(r.stdout).get('text', '')
    except Exception: return ''
norm = lambda t: re.sub(r'[^a-z]', '', t.lower())
clips = json.load(open(sys.argv[1])); bad = []
for name, text in clips.items():
    dst = f'{OUT}/{name}.mp3'
    if os.path.exists(dst): continue
    if not name.startswith('w-'):
        tts(text, dst); continue
    want = norm(text); ok = False
    for i, (t, st) in enumerate([(text, 0.6), (text.rstrip('.!') + '!', 0.6), ('"' + text.rstrip('.!').lower() + '"', 0.8), (text, 0.85), (text.rstrip('.!') + '.', 0.45)]):
        tmp = f'/tmp/clip_{os.getpid()}_{name}_{i}.mp3'; tts(t, tmp, st)
        heard = norm(stt(tmp))
        if heard == want or heard.rstrip('s') == want.rstrip('s'):
            shutil.move(tmp, dst); ok = True; break
    if not ok: bad.append((name, text, heard))
print('made/checked', len(clips), '| STT failures (drop these words):', bad)
