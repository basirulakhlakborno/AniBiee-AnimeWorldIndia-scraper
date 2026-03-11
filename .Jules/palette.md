## 2026-02-05 - Hidden Interactive Elements
**Learning:** Icon-only or text-only buttons without borders or backgrounds (ghost buttons) often fail affordance tests and disappear for keyboard users if no focus styles are defined.
**Action:** Always verify `focus-visible` states and ensure interactive elements have at least one visual cue (border/bg) that distinguishes them from static text.
