# 🚀 Demo Landing

Un projet **Next.js 14 + TailwindCSS** configuré avec **pnpm**, intégration **Husky + lint-staged + commitlint** pour appliquer les bonnes pratiques de code, et un workflow **CI GitHub Actions** qui vérifie lint, tests et build avant tout merge.

👉 Démo en ligne : [demo-landing sur Vercel](https://demo-landing-beryl.vercel.app/)

---

## 📂 Stack technique

- **[Next.js 14](https://nextjs.org/)** — Framework React moderne (App Router)
- **[TypeScript](https://www.typescriptlang.org/)** — Typage strict
- **[TailwindCSS](https://tailwindcss.com/)** — Utilitaires CSS pour design rapide
- **[pnpm](https://pnpm.io/)** — Gestionnaire de packages rapide & efficace
- **[Husky](https://typicode.github.io/husky/)** + **lint-staged** + **commitlint** — Qualité de code via hooks Git
- **[ESLint + Prettier](https://eslint.org/)** — Lint et formatage auto
- **[GitHub Actions](https://docs.github.com/en/actions)** — CI (lint + type-check + build)

---

## ⚙️ Installation & Setup

Clone le repo :
```bash
git clone git@github.com:WillyPottier/demo-landing.git
cd demo-landing
```

## Installez les dépendances :
```bash
pnpm install
```
## Lance le serveur de dev :
```bash
pnpm dev
```
## Build de prod :
```bash
pnpm build
```

## 🔑 Scripts disponibles
```bash
pnpm dev           # Lance le serveur Next.js (dev)
pnpm build         # Build de production
pnpm start         # Lance le serveur Next.js en mode prod
pnpm lint          # Vérifie le code avec ESLint
pnpm format        # Formatage avec Prettier
pnpm type-check    # Vérifie les types TypeScript
pnpm check         # Lint + format + type-check
```

## Utilisation

Lancez le projet en local puis ouvrez votre navigateur à l'adresse indiquée dans la console.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 🚀 Déploiement

Le projet est déployé sur [Vercel](https://vercel.com/) avec intégration continue.
Chaque PR déclenche un build automatique via GitHub Actions, validant lint + types + build.

✍️ Auteur : [@WillyPottier](https://github.com/WillyPottier)