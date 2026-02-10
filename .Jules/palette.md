## 2026-02-10 - Decorative SVG Accessibility
**Learning:** The application uses inline SVGs for icons (like GitHub) inside links without `aria-hidden="true"`, which can cause screen readers to announce them redundantly or confusingly.
**Action:** When encountering inline SVGs that are purely decorative (next to text), always add `aria-hidden="true"` to improve the screen reader experience.

## 2026-02-10 - Legibility of Legal Text
**Learning:** The disclaimer text was set to 9px, which falls below recommended minimums for legibility, especially on high-DPI screens or for users with visual impairments.
**Action:** Ensure all text, even "fine print", maintains a minimum font size of 11px (or 0.75rem) to remain readable.
