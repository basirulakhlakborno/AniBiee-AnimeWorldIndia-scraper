## 2024-03-06 - Dead-end Recovery and Dark Mode Focus States
**Learning:** Found that custom 403 and 404 pages often strand users if they lack explicit return paths, and default focus outlines are frequently invisible against custom dark backgrounds (e.g., `#ffffff` text on dark images).
**Action:** When designing error states, explicitly ensure an explicit 'Return to Homepage' interaction path exists. Universally enforce visible custom focus rings (e.g., `outline: 2px solid #ffffff; outline-offset: 2px;`) for interactive elements on dark themes to maintain keyboard accessibility.
