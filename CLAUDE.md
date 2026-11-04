# Conjugue !

Aplicación web (una sola página) para practicar la conjugación francesa de cara al DELF B1.
Se publica con GitHub Pages desde la rama `main`: https://agartol.github.io/Conjuge-/

## Idiomas
- Toda la interfaz de la aplicación está en **francés**. No añadas textos en español a la página, salvo las **traducciones** que el usuario pidió: traducción de los verbos en las tarjetas y, más adelante, del vocabulario (`src/lexique.js`, con `lang="es"`).
- El usuario es hispanohablante: háblale en **español**.

## Estructura
- `index.html` — la web publicada. **No se edita a mano**: se genera con `./build.sh`.
- `src/app.template.html` — HTML, CSS y JS de la aplicación, con los marcadores `/*__ENGINE__*/`, `/*__BANK__*/`, `/*__BANK2__*/`.
- `src/engine.js` — motor de conjugación (tiempos, auxiliares, concordancia, pronombres reflexivos, género m./f. con `cell(inf, t, p, g)`).
- `src/verbs-data.js` — datos de los 158 verbos (generados con `src/gen.js` a partir de las librerías `french-verbs` y `french-verbs-lefff`).
- `src/bank.js`, `src/bank2.js` — bancos de ejercicios (frases, trampas, reglas, textos con huecos, transformaciones, hipótesis, consignas).
- `src/bank3.js` — **Grammaire**: grupos (`pronoms`, `connecteurs`) y temas, cada uno con ficha (`tip`, `fiche`, `note`, `links`) y ejercicios (`g` huecos, `q` opciones, `t` transformación). Para añadir un tema nuevo basta con añadir un objeto aquí; para un grupo nuevo, añadirlo a `groups`, a la navegación (`data-view`) y a `VIEWS`/`SEC` en la plantilla. Los ejercicios son originales: no copiar los de las webs que enlaza la profesora.
- `src/lexique.js` — traducciones al español (verbos; luego vocabulario).
- `docs/programme.md` — temario del curso según el blog de la profesora (qué falta por añadir).
- `src/build.py` — une todo en `src/atelier-conjugaison.html` (versión para el artefacto de Claude).
- `src/web.py` — convierte esa versión en un documento HTML completo e independiente (`index.html`). Añade los estilos base (`[hidden]{display:none!important}`, márgenes) que dentro de Claude ponía el envoltorio del artefacto.

## Flujo de trabajo
1. Edita los archivos de `src/`.
2. `./build.sh`
3. Pruebas (necesitan `cd src && npm install`; usan Playwright/Chromium):
   - `node test3.js` — rellena todas las tablas del conjugador (≈1900), todas las frases y los irregulares (tarda varios minutos).
   - `node test4.js` — textos, transformaciones, hipótesis, sesión diaria y examen (Claude simulado).
   - `node tvis.js` — busca texto en español visible en la página.
   - `node tgrade.js` — pruebas del corrector de frases.
   - `node tgram.js` — responde bien a todos los ejercicios de gramática y comprueba que se aceptan.
4. Commit y push a `main`: GitHub Pages publica en 1–2 minutos.

## Notas
- Fuera de Claude no existe `window.claude`: el progreso se guarda en `localStorage` (clave `atelier-conj-v1`) y las funciones con Claude (Écrire, Corriger une rédaction, frases nuevas) se desactivan solas.
- Corrección: los espacios no cuentan; mayúsculas, acentos y punto final sí (errores leves). Error de tiempo, forma o sujeto = error grave.
- Verbos pronominales: hay que escribir el pronombre reflexivo. En tiempos compuestos con être se pide un género concreto (etiqueta m. / f.; « vous » = plural).

## Versión dentro de Claude (artefacto)
Además de GitHub Pages, la aplicación está publicada como artefacto de Claude: https://claude.ai/artifact/3d6KFm1FE8kBvqQb5N7dpz
Es la versión que el usuario comparte con quien tiene cuenta de Claude, porque ahí sí funcionan las funciones con Claude (`sample`) y el progreso se guarda en la cuenta (`db`, `user`).
**Cada cambio debe publicarse en los dos sitios:** push a `main` (web) y publicar `src/atelier-conjugaison.html` con la herramienta Artifact pasando esa URL como `url` (leer antes el artefacto; las capacidades declaradas son `{db:{}, user:{}, sample:{}}` y se conservan si no se pasa `capabilities`).
