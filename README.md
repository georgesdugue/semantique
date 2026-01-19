# Sémantique

**Just write HTML. We'll handle the style.**

Sémantique is a **classless CSS framework** designed for developers who want to build clean, professional websites without writing a single line of CSS or memorizing complex utility classes.

## Why Sémantique?

- **Zero Classes:** No `class="btn btn-primary"`. Just use `<button>`.
- **Semantic First:** Encourages best practices by styling standard HTML5 tags.
- **Automatic Dark Mode:** Swaps themes based on user system settings.
- **Responsive by Design:** Grids and typography that "just work" on mobile.
- **Lightweight:** ~6KB minified with no dependencies.

## Quick Start

### Option 1: Download
Download `semantique.css` or `semantique.min.css` and add it to your project:

```html
<link rel="stylesheet" href="semantique.css">
```

### Option 2: npm
```bash
npm install semantique
```

Then import in your project:
```html
<link rel="stylesheet" href="node_modules/semantique/semantique.min.css">
```

## Usage Examples

### Typography
```html
<h1>Main Heading</h1>
<p>Body text with <strong>bold</strong>, <em>italic</em>, and <a href="#">links</a>.</p>
<p>Use <code>inline code</code> and <kbd>Ctrl</kbd>+<kbd>S</kbd> keyboard shortcuts.</p>
<blockquote>Blockquotes are styled with an accent border.</blockquote>
```

### Buttons
```html
<button>Click Me</button>
<a href="#" role="button">Link as Button</a>
```

### Forms
```html
<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">

  <label><input type="checkbox"> Subscribe to newsletter</label>

  <button type="submit">Submit</button>
</form>
```

### Automatic Card Grid
Wrap `<article>` elements in a `<section>` for an automatic responsive grid:

```html
<section>
  <article>
    <h3>Card One</h3>
    <p>Content goes here.</p>
  </article>
  <article>
    <h3>Card Two</h3>
    <p>Content goes here.</p>
  </article>
  <article>
    <h3>Card Three</h3>
    <p>Content goes here.</p>
  </article>
</section>
```

### Sidebar Layout
Add an `<aside>` and Sémantique will automatically create a two-column layout on larger screens:

```html
<body>
  <main>
    <h1>Main Content</h1>
    <p>Your content here...</p>
  </main>
  <aside>
    <h3>Sidebar</h3>
    <p>Secondary content...</p>
  </aside>
</body>
```

### Dialog Modal
```html
<button onclick="document.getElementById('my-dialog').showModal()">
  Open Modal
</button>

<dialog id="my-dialog">
  <h3>Modal Title</h3>
  <p>Modal content goes here.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>
```

## Dark Mode

Sémantique automatically respects `prefers-color-scheme`. To manually toggle themes, use the `data-theme` attribute:

```html
<html data-theme="dark">
```

Include `theme.js` for a toggle button:
```html
<script src="theme.js"></script>
<button id="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
```

## Customization

Override CSS variables to customize colors:

```css
:root {
  --accent: #8b5cf6;       /* Change accent color */
  --bg: #fafafa;           /* Background color */
  --text: #1a1a1a;         /* Text color */
  --max-width: 70ch;       /* Content width */
  --radius: 4px;           /* Border radius */
}
```

## Browser Support

Sémantique uses modern CSS features including `:has()`, `:focus-visible`, and CSS custom properties. Supported in:

- Chrome/Edge 105+
- Firefox 121+
- Safari 15.4+

## License

MIT License - see [LICENSE](LICENSE) for details.
