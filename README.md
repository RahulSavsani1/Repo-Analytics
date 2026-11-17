# Repo Analytics

Repo Analytics is a React + TypeScript + Vite dashboard that analyzes a public GitHub profile using the GitHub REST API.

## Current implementation plan

1. **Foundation** — Vite project, TypeScript types, responsive visual system, and reusable metric/panel components.
2. **API integration** — Fetch a user profile and up to 100 recently updated repositories with parallel requests.
3. **Data transformation** — Calculate repository count, stars, forks, and the top language mix from API data.
4. **User experience** — Add username search, loading state, API errors, retry behavior, and responsive layouts.
5. **Portfolio polish** — Keep the API boundary clear so a backend proxy, GitHub OAuth, caching, and tests can be added as later milestones.

## Run locally

```bash
npm install
npm run dev
```

The first version is frontend-only and uses the public GitHub API, so no API key or database is required. Check the production build with `npm run build`.

## Project structure

```text
src/
├── components/       Reusable page and dashboard components
├── services/         External API clients and request handling
├── types/            Shared TypeScript domain types
├── utils/            Formatting and repository calculations
├── App.tsx           Page composition and application state
└── App.css           Dashboard visual system
```

The UI components do not know how GitHub data is fetched. The API service does not know how data is displayed. This separation makes it straightforward to replace the GitHub client, add tests, or reuse the metric and panel components in another dashboard.

## Next milestones

- Add repository search and sorting controls.
- Add GitHub contribution activity using authenticated requests.
- Add a small Node/Express or Next.js proxy to demonstrate server-side API handling and caching.
- Add unit tests for language statistics and API error states.
