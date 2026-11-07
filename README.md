# amardia.ca

Portfolio d'Amar Dia, développeur full stack à Montréal. Le site est en français et en anglais : [amardia.ca](https://amardia.ca).

## Technologies

- [Astro](https://astro.build), pour des pages statiques rapides et bien référencées
- TypeScript et CSS, sans framework d'interface
- Vercel pour l'hébergement et Formspree pour le formulaire de contact

## Lancer le projet

Il faut Node.js 22 ou plus récent.

```
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321.

## Modifier le contenu

- **Textes du site :** tout est dans `src/content.ts`, avec le français et l'anglais côte à côte.
- **CV :** modifier `cv/cv-fr.md` et `cv/cv-en.md`, puis lancer `node scripts/cv-pdf.mjs` pour produire les PDF dans `public/`. Le script utilise Google Chrome.
