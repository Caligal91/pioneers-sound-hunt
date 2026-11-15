#!/usr/bin/env python3
"""Download Fluent 3D pictures: python3 fluent.py "word=Asset name" ...   e.g. "igloo=Igloo" "ink=Black nib"
   python3 fluent.py --find octo     -> lists matching asset names.  Saves img3d/<slug(word)>.png (people: Medium-Light skin)."""
import sys, re, os, urllib.request, urllib.parse
P = [l.strip() for l in open('/home/openclaw/projects/sound-hunt/tools/fluent_paths.txt')]
OUT = '/home/openclaw/projects/sound-hunt/img3d'
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
if sys.argv[1] == '--find':
    q = sys.argv[2].lower(); print('\n'.join(sorted({p.split('/')[1] for p in P if q in p.split('/')[1].lower()}))); sys.exit()
for a in sys.argv[1:]:
    w, asset = a.split('=', 1)
    c = [p for p in P if p.startswith(f'assets/{asset}/') and '/3D/' in p and p.endswith('.png')]
    c = [p for p in c if '/Medium-Light/' in p] or [p for p in c if '/Default/' in p] or c
    if not c: print('NOT FOUND', w, asset); continue
    dst = f'{OUT}/{slug(w)}.png'
    if os.path.exists(dst): print('exists', w); continue
    open(dst, 'wb').write(urllib.request.urlopen('https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/' + urllib.parse.quote(c[0]), timeout=30).read())
    print('ok', w, '<-', c[0])
