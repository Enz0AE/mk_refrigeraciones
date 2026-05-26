# MK Refrigeraciones — Project Tracker

## Stack
- **Framework:** Next.js 16.2.6 (App Router) + React 19.2
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4.3 + PostCSS
- **Linting:** ESLint 9 + eslint-config-next
- **Fonts:** Hanken Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Icons:** Google Material Symbols (CDN)
- **PM:** npm

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Structure
```
src/
├── components/          # Shared UI
│   ├── Header.tsx       # Nav bar + menú móvil funcional
│   ├── Footer.tsx       # Site footer
│   └── WhatsAppButton.tsx
└── app/
    ├── layout.tsx       # Root layout (fonts, metadata, Material Icons)
    ├── globals.css      # Tailwind v4 + custom tokens
    ├── (marketing)/     # Public site
    │   ├── layout.tsx   # Header + Footer + WhatsAppButton
    │   ├── page.tsx     # Homepage
    │   ├── instalaciones/
    │   ├── equipos/
    │   ├── contacto/
    │   ├── nosotros/
    │   ├── cotizacion/
│   ├── blog/
│   │   └── [slug]/page.tsx
│   └── casos-de-exito/
    └── (cms)/
        ├── layout.tsx
        └── panel-cms/page.tsx
```

## Conventions
- All `<img>` tags → replaced with Next.js `<Image>` ✅
- Remote images configured in `next.config.ts` (`lh3.googleusercontent.com`)
- All content is hardcoded (no CMS integration)
- Phone numbers hardcoded → should be env vars
- No `.env` files exist
- Copyright year hardcoded to "2024"
- Images use external CDN (`aida-public`)

## Project State
- Public marketing site: ~95% complete
- CMS panel: ~60% complete
- Git: 4 commits, main branch, clean working tree

---

## Task List

### 🔴 Fase 1 — Esencial (bloqueante)

- [x] **1. API routes para formularios** — Cotización, contacto e instalaciones ya envían a `/api/*` con validación y feedback.
- [x] **2. SEO metadata por página** — `metadata` export, OG tags, JSON-LD (LocalBusiness) en homepage, títulos dinámicos vía `useEffect` en client components.
- [x] **3. Menú móvil funcional** — Drawer lateral con overlay, toggle con hamburguesa, links completos.
- [x] **4. Páginas individuales de blog** — `[slug]/page.tsx` con SSG, generateStaticParams, metadata dinámica.
- [x] **5. Reemplazar `<img>` por `<Image>`** — 13 imágenes migradas con `fill` + `sizes`, remotePatterns configurado.

### 🟡 Fase 2 — Importante

- [ ] **6. Integrar CMS** — Sanity.io o Strapi para contenido dinámico.
- [ ] **7. Crear `.env.local`** — Teléfonos, WhatsApp, APIs como variables de entorno.
- [ ] **8. Validación de formularios** — Mensajes de error, campos requeridos visibles.
- [x] **9. `robots.txt` y `sitemap.xml`** — SEO.
- [ ] **10. Google Analytics (GA4)** — Como especifica el PRD.

### 🟠 Fase 3 — Mejora

- [ ] **11. Autenticación CMS** — Login para `/panel-cms`.
- [ ] **12. CMS funcional** — Sidebar navegación, datos reales, CRUD.
- [ ] **13. Mapa integrado** — Google Maps o Leaflet en contacto.
- [x] **14. Filtro de categorías blog** — Lógica de filtrado client-side funcional.
- [ ] **15. Accesibilidad WCAG 2.1 AA** — Skip-to-content, ARIA labels, focus management.

### 🔵 Fase 4 — Pulido

- [x] **16. Copyright dinámico** — `new Date().getFullYear()`.
- [x] **17. Página 404 personalizada** — `not-found.tsx` en marketing layout.
- [ ] **18. Optimización rendimiento** — Core Web Vitals targets.
- [ ] **19. CI/CD** — Deploy a Vercel.
