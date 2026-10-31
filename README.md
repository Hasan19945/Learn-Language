# Adım Adım 🇳🇴 🇬🇧

A step-by-step language learning app for Turkish speakers, with two courses:

- **Norsk**: Norwegian (Bokmål), A0–C1
- **English**: English, A0–C1

After signing in, pick the language you want to learn. Each language keeps its own progress, and you can switch at any time from the button at the top or from Settings.

## 🔗 Open the app

👉 **[Click here to start learning](https://hasan19945.github.io/Learn-Language/)**

No installation needed. It works in any browser, on both phone and computer.

## ✨ Features

- Lessons ordered by level, starting from A0
- Short grammar notes with Turkish explanations
- Pronunciation guide written with Turkish letters
- Example sentences and dialogues
- Flashcards for vocabulary
- Practice quizzes at the end of each lesson
- Progress tracking

## 💻 Run it locally

The app is built with React, TypeScript and Vite. You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

Other commands:

- `npm run build` checks the types and builds the site into `dist/`
- `npm run preview` serves the built site
- `npm run typecheck` only checks the types

## 🗂️ Project layout

```
src/
  main.tsx              entry point
  App.tsx               sign-in state, loading progress, choosing the screen
  types.ts              shared types (lessons, words, progress)
  styles.css
  data/
    helpers.ts          W, N, I, Q helpers used by the lesson files
    norwegian/          Norwegian lessons by level, interests, placement test
    english/            English lessons by level and course settings
    courses.ts          builds both courses
    options.ts          daily goal and lesson flow choices
  lib/                  logic without UI: progress, quiz building, saving, speech
  state/AppContext.ts   shared app state for all screens
  components/           reusable UI pieces (word rows, quiz question, nav, icons)
  views/                one file per screen; views/lesson/ holds the lesson steps
```

## 🚀 Deploying

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, **Pages → Source** must be set to **GitHub Actions**.

## 📝 Note

Your progress is saved in your own browser. Clearing your browser data will reset it.