# Genera la versión independiente (index.html) para GitHub Pages a partir de atelier-conjugaison.html
import re, sys
src = open('atelier-conjugaison.html', encoding='utf-8').read()
cut = src.index('</style>') + len('</style>')
head, body = src[:cut], src[cut:]
head = head.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')
out = ('<!doctype html>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n'
       '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
       '<meta name="description" content="Conjugue ! — entraînement à la conjugaison française pour le DELF B1">\n'
       '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ctext y=%22.9em%22 font-size=%2290%22%3E%F0%9F%87%AB%F0%9F%87%B7%3C/text%3E%3C/svg%3E">\n'
       + '<style>:root{color-scheme:light dark}html,body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>\n' + head + '\n</head>\n<body>\n' + body + '\n</body>\n</html>\n')
open(sys.argv[1], 'w', encoding='utf-8').write(out)
print(len(out))
