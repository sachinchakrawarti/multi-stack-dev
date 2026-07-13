# CSS Specificity Demo

## Objective

Learn how **CSS Specificity** determines which style is applied when multiple CSS rules target the same HTML element.

Specificity is the browser's scoring system for resolving style conflicts.

Priority (Highest → Lowest)

```text
!important
↓

Inline Style
↓

ID Selector
↓

Class / Attribute / Pseudo-class

↓

Element / Pseudo-element

↓

Universal Selector
```

If two selectors have the same specificity, the rule written **later** in the stylesheet wins.

---

## Files

- `index.html` → HTML structure
- `style.css` → CSS specificity examples

---

## Topics Covered

- Universal Selector
- Element Selector
- Class Selector
- ID Selector
- Descendant Selector
- Inline Style
- `!important`
- Cascade Rule
- Specificity

---

## Learning Outcomes

After completing this example, you will understand:

- How browsers resolve CSS conflicts
- Which selector wins in different scenarios
- Why specificity matters
- How to avoid specificity issues