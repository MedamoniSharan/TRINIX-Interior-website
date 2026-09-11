# TRINEX UI Guidelines

## Brand

- **Name:** TRINEX
- **Tagline:** TRINEX by TRINATH DESIGN STUDIO
- **Logo:** Use official file at `public/images/trinex-logo.png` — do not recreate or redesign

## Colors (CSS tokens in `styles/tokens.css`)

- Primary brand: `--color-brand` (#1e3a5f)
- CTA accent: `--color-accent` (#c17f3a)
- Surfaces: white and light gray sections

## Layout

- Use global utilities: `.container`, `.section`, `.section-title`, `.section-subtitle`
- One CSS module per component
- Mobile-first responsive design

## Accessibility

- Skip link to `#main`
- `:focus-visible` rings on interactive elements
- Respect `prefers-reduced-motion` for carousels and animations
- Minimum touch target: 44px
