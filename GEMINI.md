# Project Context: blogForReal

## Project Overview
This is a web application built with **React Router v7**, utilizing **Vite** as the build tool and **Tailwind CSS v4** for styling. The project currently features experimental visual effects, including a "Riso" print style and an interactive "Holographic Foil" pattern.

## Tech Stack
- **Framework:** React Router v7
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (configured via CSS `@theme`)
- **Build Tool:** Vite
- **Package Manager:** npm

## Building and Running

### Development Server
To start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build
To create a production-ready build:
```bash
npm run build
```
The output will be generated in the `build/` directory.

### Start Production Server
To preview the production build locally:
```bash
npm run start
```

## Key Files & Structure

- **`app/routes.ts`**: Defines the application routes.
    - `/` -> `routes/home.tsx`
    - `/foil` -> `routes/foil.tsx`
- **`app/routes/`**: Contains the route components.
    - **`foil.tsx`**: Implements the interactive holographic foil effect. It tracks mouse movement to update CSS variables (`--mouse-x`, `--mouse-y`, `--shine-angle`).
- **`app/app.css`**: Main stylesheet.
    - Contains Tailwind v4 configuration (`@import "tailwindcss";`, `@theme`).
    - Defines custom CSS variables for patterns (`--angle`, `--size`, `--c1`, etc.).
    - **`.foil-pattern-box`**: Styles for the static background pattern.
    - **`.foil-pattern-box::after`**: Styles for the dynamic holographic shine overlay using `mix-blend-mode: color-dodge`.

## Development Conventions

- **Routing:** New routes must be added to `app/routes.ts` using the `route` helper from `@react-router/dev/routes`.
- **Styling:**
    - Use Tailwind utility classes for layout and basic styling.
    - Use standard CSS in `app/app.css` for complex visual effects (gradients, blend modes, animations).
    - **Tailwind v4:** Note that configuration happens directly in CSS using the `@theme` directive, not `tailwind.config.js`.
