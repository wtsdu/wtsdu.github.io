# WTSDU Website — Agent Guide

This is a **hybrid site**: a React SPA (CRA) with a Jekyll static site deployed alongside it to GitHub Pages at `wtsdu.com`.

## Commands

| Command | Purpose |
|---|---|
| `npm start` | Dev server at `localhost:3000` |
| `npm run build` | CRA production build to `build/` |
| `npm test` | Test runner (watch mode) |
| `npm run deploy` | `predeploy` (build) + `gh-pages -d build` (push to `gh-pages` branch) |

No `lint` script exists. ESLint config (`react-app` preset) runs via the dev server only.

## Architecture

- **React SPA**: `src/` — CRA with React 18, react-router-dom v7, `HashRouter` (required for GitHub Pages SPA routing — no server-side redirect).
- **Jekyll site**: `public/` has `_config.yml`, `_posts/`, `_includes/` — processed independently for blog/gallery pages.
- **Build output**: `build/` is *committed to `main`* and contains both CRA output and Jekyll content. Not gitignored.
- **Routes**: defined in `src/App.js:28-38`. Catch-all `*` routes to Home.

## Content & Data

- **Events**: edit `public/events.json` (date, event, location).
- **Blog posts**: add Markdown files to `public/_posts/` with Jekyll front matter. Triggers a separate CI deploy workflow.
- **Gallery**: `gallery-config.json` configures an external gallery tool (`input: ./public/_gallery`, `output: ./build_output`). Not part of the CRA build.
- **Instructor photos**: `public/images/` — referenced by components.
- **Grades**: `src/components/Grades/` — individual grade-step components (currently `Grade_Gup_10to9.js`, `Grade_Gup_9to8.js`).

## Testing

- `App.test.js` tests for `"learn react"` text which does **not** appear in the actual `App.js`. Test may fail.
- No test data fixtures or integration test setup needed.

## CI

Two GitHub Actions workflows:
- `deploy.yml` — on push/PR to `main`, uses `omkartapale/react-deployment-gh-pages` action to build + deploy React app.
- `update-blog.yml` — on push to `main` touching `public/_posts/**`, publishes posts directly to `gh-pages/_posts`.

## Local Setup

No special env vars, services, or Docker required. Standard Node/npm install.
