# 🧠 AI-Guided Architecture & Maintenance

This document provides high-level context for AI coding agents to understand, maintain, and expand the Nithyanantha Portfolio codebase.

## 🏛 Core Design Philosophy
- **Dark Luxury Aesthetic**: High contrast, minimal colors (#000000 background, #DEDBC8 primary).
- **Physics-First Interaction**: Use `motion/react` (Framer Motion) for all interactive states. Preference for `spring` transitions over `tween`.
- **Liquid Glass System**: UI elements should use the `.liquid-glass` class (defined in `index.css`) which provides backdrop-blur, subtle borders, and noise texture.

## 📂 Project Structure for AI Editing
- **`src/components/SectionProjects.tsx`**: The primary showcase component. When adding projects, update the `projects` array and import corresponding media from `src/assests/`.
- **`src/components/VideoPlayerModal.tsx`**: The custom media engine. Edits to playback speed, scrubbing logic, or UI overlay should happen here.
- **`src/components/SectionExperienceTimeline.tsx`**: Manages the Roadmap. Ensure alternating card logic is preserved when adding new entries.
- **`src/global.d.ts`**: Contains module declarations for `.mp4` and `.png`. Update this if adding new asset types.

## 🛠 Tech Stack Constraints
- **Vite**: The build tool. Always keep `base: './'` in `vite.config.ts` for GH Pages compatibility.
- **Tailwind 4**: CSS-first configuration. Utility classes are preferred, but complex glass effects are abstracted in `index.css`.
- **React 19**: Use modern hooks and functional components.

## 🚀 Deployment & CI
- GitHub Actions handles the build. **CRITICAL**: If the build fails on `@tailwindcss/oxide`, regenerate `package-lock.json` and ensure the CI uses Node 20+.

---

*This file is machine-readable and intended to maximize the efficiency of AI-assisted development.*
