#!/bin/sh
# Construye la web: src/ → index.html (raíz del repositorio, publicada por GitHub Pages)
set -e
cd "$(dirname "$0")/src"
python3 build.py
python3 web.py ../index.html
