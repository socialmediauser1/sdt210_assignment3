# Personal Kanban Board

A React app for visual task organization with columns, WIP limits, and swimlanes.

## Description

Organize work on a Kanban board: create cards, move them through columns (e.g. To Do → In Progress → Done), set WIP limits per column, and view stats and archive history.

## Justification

I chose this theme because I built a Kanban board before in my first Java(101) course. At the time, I was still inexperienced and very underestimated the complexity of this project. Although it worked, I wasn’t fully satisfied with how it came out. Choosing this theme again is a way for me to revisit the same idea with better tools (not javafx) and more knowledge. In a way, it’s a personal challenge to build a cleaner, more structured version and prove to myself that I’ve improved.

**Features:**

- Create, edit, and delete cards (title, description, category)
- Configurable columns (e.g. todo, in-progress, done) with optional WIP limits
- Move cards between columns (drag-and-drop)
- Category labels: bug, feature, docs
- Swimlane grouping by category, assignee, or priority
- Filter by label, swimlane, or search
- Card age and time in current column
- Column and board statistics (counts, throughput)
- Archive completed cards with history view
- WIP limit warnings and column highlighting

## How to run the app

**Prerequisites:** Node.js 18+ and npm.

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (e.g. `http://localhost:5173`) in your browser.

3. **Build for production** (optional)

   ```bash
   npm run build
   ```

4. **Preview the production build** (optional)

   ```bash
   npm run preview
   ```

## Project structure

```
final project/
├── index.html              # HTML entry (Vite)
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── src/
    ├── main.tsx            # Entry point, BrowserRouter
    ├── App.tsx             # Route definitions
    ├── types.ts            # TypeScript types
    ├── components/         # Reusable UI
    │   └── Layout.tsx      # Shell + navigation
    └── pages/              # Route page components
        ├── Board.tsx
        ├── Archive.tsx
        └── Stats.tsx
```

## Tech stack

- React 18 + TypeScript
- Vite
- React Router

## AI usage

I used AI to generate type definitions from my description, to create simple pages and to write the technical part of README.