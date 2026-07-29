# Portfolio React + Vite

## Arborescence du projet

```text
proj/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── translations.js
    ├── assets/
    │   ├── CV_Rafael_Antunes_oliveira.pdf
    │   ├── rose.svg
    │   ├── certif/
    │   │   ├── DIF.png
    │   │   ├── PSC-ANTUNES-Rafael.pdf
    │   │   └── PSSM.png
    │   └── projets/
    │       ├── 203/
    │       │   └── 4.png
    │       ├── 303/
    │       │   └── 3.png
    │       ├── BlackJack/
    │       ├── poker/
    │       │   ├── 1.png
    │       │   └── 2.png
    │       ├── portfolio_sylvain/
    │       ├── python/
    │       │   ├── pong/
    │       │   │   └── 6.png
    │       │   ├── snake/
    │       │   │   └── 7.png
    │       │   └── tetris/
    │       │       └── 8.png
    │       ├── tictactoe/
    │       │   └── 5.png
    │       ├── Que-regarder-ce-soir/
    │       │   ├── quereg1.png
    │       │   └── quereg2.png
    │       └── wiki/
    ├── components/
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── Projects.jsx
    │   └── Skills.jsx
    ├── context/
    │   ├── LanguageContext.jsx
    │   └── useLanguage.js
    ├── hooks/
    │   └── usePageMeta.js
    └── pages/
        ├── AccessibilitePage.jsx
        ├── HomePage.jsx
        └── MentionsLegalesPage.jsx
```

## Pages

Le site est une SPA routée avec `react-router-dom` :

- `/` : portfolio (accueil, à propos, skills, projets, contact)
- `/accessibilite` : déclaration d'accessibilité
- `/mentions-legales` : mentions légales (loi LCEN, article 6-III)

Les deux dernières sont accessibles depuis le lien en pied de page. Au changement de route, le titre de l'onglet et le focus clavier sont mis à jour (`usePageMeta`) pour rester utilisable au lecteur d'écran.

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Accessibilité (RGAA / WCAG 2.1 AA)

Le site a été revu pour respecter le RGAA : lien d'évitement, navigation clavier complète, labels de formulaire visibles, modale de projet accessible (focus trap, `Échap`, restitution du focus), contrastes de texte ≥ 4.5:1, `lang` HTML synchronisé avec la langue choisie, et respect de `prefers-reduced-motion`.

### Tester automatiquement

```bash
npm run lint       # analyse statique (règles eslint-plugin-jsx-a11y)
npm run test:a11y  # build + preview + audit axe-core (WCAG 2.1 A/AA) sur la page réelle
```

`npm run test:a11y` lance le serveur de preview et exécute `axe-core` dessus ; il termine en erreur (`--exit`) si une violation est détectée. Si `axe` échoue avec une erreur de version ChromeDriver (ex. `ENOENT` sur un chemin `chromedriver`), exécuter une fois :

```bash
npx browser-driver-manager install chrome
```

Ça installe une paire Chrome/ChromeDriver synchronisée dans `~/.browser-driver-manager/` ; le script `scripts/run-a11y-audit.mjs` lit automatiquement ce dossier à chaque exécution, donc aucune variable d'environnement à exporter manuellement.

### À vérifier manuellement (non détectable par les outils automatiques)

- **Clavier seul** : parcourir tout le site à la touche `Tab`/`Shift+Tab`/`Entrée`/`Échap`, sans souris (menu, filtres projets, ouverture/fermeture de la modale, formulaire de contact).
- **Zoom 200 %** : vérifier qu'aucun texte n'est coupé ni tronqué.
- **Lecteur d'écran** : tester au moins une page avec NVDA (Windows) ou VoiceOver (Mac) pour confirmer que les intitulés de liens/boutons sont compréhensibles hors contexte.
- **`prefers-reduced-motion`** : activer "Réduire les animations" dans l'OS et vérifier que les animations sont désactivées.
- **Lighthouse** (Chrome DevTools → onglet Lighthouse → Accessibility) pour un second avis et un score global.

Ces tests automatiques ne couvrent qu'une partie du RGAA (environ 20 à 50 % des critères selon Deque/axe) : ils rattrapent les erreurs techniques (labels manquants, contrastes, ARIA invalide...) mais pas le jugement humain (pertinence des textes alternatifs, ordre de lecture logique, cohérence...).
