# Citrana MVP Frontend

AI Agent Operating System UI — Next.js (App Router), TypeScript, Tailwind, Framer Motion, Zustand.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000); the app redirects to `/app/dashboard`.

## Routes

- `/app/dashboard` — System overview, KPIs, live agent cards, execution timeline
- `/app/agents` — Agent list with status filter
- `/app/agents/[id]` — Agent detail (config, logs, ZK badge)
- `/app/intent-studio` — Natural language intent → structured plan → Deploy
- `/app/activity` — Live terminal-style execution feed (mock events)

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **UI:** Tailwind v4, CSS variables theme (dark, Citrana orange + electric blue)
- **Typography:** Space Grotesk (headings), Inter (body), JetBrains Mono (terminal)
- **Animation:** Framer Motion (route transitions, list stagger, reduced-motion aware)
- **State:** Zustand; mock realtime events in Activity Monitor

## Project layout

- `app/` — Root layout, redirect; `app/app/` — OS shell layout and pages
- `components/os/` — Sidebar, Topbar, NavItem, PageTransition
- `components/citrana/` — KpiCard, AgentCard, ExecutionTimeline, TerminalFeed, ZkProofBadge, RiskSlider
- `lib/store/agents.ts` — Agents and execution logs state
- `lib/mock/events.ts` — Mock activity event stream for Activity Monitor
