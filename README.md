# Mini XSS Lab (local et légal)

Ce mini-projet fournit **deux pages** :
- `index.html` : version **vulnérable** (à ouvrir **en local uniquement**). Sert à comprendre une faille XSS réfléchie.
- `index_safe.html` : version **corrigée** montrant des contre-mesures simples.

## Comment l'utiliser
1. Téléchargez et décompressez l'archive.
2. Ouvrez `index.html` avec votre navigateur **sans** la publier sur Internet.
3. Tapez un nom et validez. Pour la démo, cliquez sur le bouton "Lancer la démo XSS".
4. Comparez avec `index_safe.html` pour voir le correctif.

## Mises en garde importantes
- Ne déployez **jamais** `index.html` sur un serveur accessible depuis Internet.
- Utilisez uniquement dans un contexte d'apprentissage local.
- Préférez toujours l'encodage/sanitation des entrées, l'usage de `textContent` plutôt que `innerHTML`, et une **CSP** restrictive.

## Idées d'exercices
- Implémentez une **Content-Security-Policy** sur `index_safe.html` (par ex. `default-src 'self'; script-src 'self'`).
- Ajoutez une sanitation côté serveur si vous faites un équivalent en Node/Express, Python/Flask, etc.
- Remplacez `innerHTML` par un templating sûr (par ex. lit-html, React avec props, etc.).
