
## 2024-05-18 - Missing Escape Hatches on Error Pages
**Learning:** Full-screen static error pages (like 403 and 404) without explicit navigation links trap users, relying solely on browser back buttons. This is especially problematic if the user landed there from an external link.
**Action:** Always provide an accessible "Return to Homepage" link on terminal states like 403/404 pages. Ensure high contrast focus states (`focus-visible`) on dark themes for keyboard navigability.
