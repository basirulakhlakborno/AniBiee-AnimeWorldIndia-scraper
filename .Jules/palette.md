## 2026-03-03 - Dead End Error Pages
**Learning:** Static error pages (403/404) that tell a user to "return to the homepage" but don't provide a button create a frustrating dead end that traps the user.
**Action:** Always provide an explicit, keyboard-accessible escape hatch (like a "Return Home" button) on dead-end error pages. Ensure decorative SVGs within these buttons have `aria-hidden="true"`.
