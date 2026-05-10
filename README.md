# ☕ Brew & Co — Café Landing Page

A responsive, multi-section landing page for a specialty café, built with pure HTML, CSS, and JavaScript — no frameworks or dependencies required.

---

## 📁 Project Structure

```
cafe-landing-page/
├── index.html     # Page structure and content
├── style.css      # All styles, theme variables, and responsive rules
├── script.js      # Menu rendering, tab switching, navbar scroll, mobile nav
└── README.md      # Project documentation
```

---

## Getting Started

1. **Download** all four files into the same folder.
2. **Open** `index.html` in any modern web browser.
3. No build tools, no npm, no server required.

---

##  File Overview

### `index.html`
- Semantic HTML5 structure
- Links to `style.css` and `script.js`
- Loads Google Fonts (Playfair Display, DM Sans) and Tabler Icons via CDN
- Sections: Navbar · Hero · About · Menu · Hours & Contact · Footer

### `style.css`
- CSS custom properties (variables) for the entire color theme and typography
- Warm coffee-toned palette: deep brown backgrounds, gold accents
- Responsive breakpoints at `768px` and `480px`
- Animations: scroll-hint bounce, open-dot pulse, card hover lift
- Mobile-first hamburger menu layout

### `script.js`
- `menuData` object — all menu items organised by category
- `renderMenu(category)` — dynamically builds menu cards from data
- Menu tab click handler — switches active tab and re-renders cards
- Navbar scroll effect — adds `.scrolled` class after 60px scroll
- Mobile nav toggle — opens/closes the nav link list
- `scrollTo(sectionId)` — smooth scroll helper used by hero buttons

---

##  Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.  
No Internet Explorer support (CSS variables and `scroll-behavior` not supported in IE).

---

## Author

**Shreyas S**
---


## Internship

Prodigy InfoTech Web Development Internship
---

