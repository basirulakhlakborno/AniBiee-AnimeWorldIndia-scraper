## 2026-02-27 - Glassmorphism on Error Pages
**Learning:** Glassmorphism style (semi-transparent background with blur) works exceptionally well on the dark, image-heavy backgrounds used in this app, but requires sufficient contrast and clear borders for accessibility.
**Action:** When adding secondary actions on dark backgrounds (like "Return Home" buttons), use `rgba(255, 255, 255, 0.1)` with `backdrop-filter: blur(4px)` and a subtle border to maintain visibility without distracting from the main error message. Ensure hover states increase opacity for feedback.
