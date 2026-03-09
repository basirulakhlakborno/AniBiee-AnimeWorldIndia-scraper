## 2024-05-24 - Dead-End Error Pages (404/403)
**Learning:** Static HTML error pages (like 404.html and 403.html) often lack explicit navigation paths back to the main application, creating a dead-end user flow. When users encounter an error on a standalone static page, relying solely on browser back buttons is a poor UX pattern, especially if they landed there directly via a broken link or restricted access.
**Action:** Always verify that error pages (404, 403, 500) include an accessible, clear Call-To-Action (CTA) to return to the application's homepage or previous safe state.
