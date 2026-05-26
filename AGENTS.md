# MK Refrigeraciones — Project Tracker

## Stack
- **Framework:** Next.js 16.2.6 (App Router) + React 19.2
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4.3 + PostCSS
- **Linting:** ESLint 9 + eslint-config-next
- **Fonts:** Hanken Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Icons:** Google Material Symbols (CDN)
- **PM:** npm
- **Backend/DB:** Supabase (Postgres + Auth + RLS)
- **Hosting:** Vercel (recommended)

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
├── components/              # Shared UI
│   ├── AuthGuard.tsx        # CMS auth wrapper
│   ├── Header.tsx           # Nav bar + menú móvil funcional
│   ├── Footer.tsx           # Site footer
│   └── WhatsAppButton.tsx
├── lib/
│   └── supabase/
│       ├── client.ts        # Browser client (@supabase/ssr)
│       ├── server.ts        # Server client (cookies-based)
│       ├── admin.ts         # Direct client (build-time/API)
│       └── middleware.ts    # Session refresh middleware
└── app/
    ├── layout.tsx           # Root layout (fonts, GA4, Material Icons)
    ├── globals.css          # Tailwind v4 + custom tokens
    ├── middleware.ts        # Next.js proxy middleware
    ├── (marketing)/         # Public site
    │   ├── layout.tsx       # Header + Footer + WhatsAppButton
    │   ├── page.tsx         # Homepage (JSON-LD)
    │   ├── blog/
    │   │   ├── page.tsx     # Blog listing (client, fetches from Supabase)
    │   │   └── [slug]/
    │   │       └── page.tsx # Blog post (SSG, fetches from Supabase)
    │   ├── contacto/        # Form → Supabase `contactos` table
    │   ├── cotizacion/      # Form → Supabase `cotizaciones` table
    │   ├── instalaciones/   # Form → Supabase `instalaciones` table
    │   ├── equipos/
    │   ├── nosotros/
    │   └── casos-de-exito/
    ├── (cms)/               # Admin panel
    │   ├── layout.tsx       # AuthGuard wrapper
    │   ├── login/
    │   │   └── page.tsx     # Login form (Supabase Auth)
    │   └── panel-cms/
    │       └── page.tsx     # Dashboard con datos reales + CRUD blog
    └── api/
        ├── auth/
        │   ├── route.ts     # POST sign in
        │   └── logout/
        │       └── route.ts # POST sign out
        ├── blog/
        │   ├── route.ts     # GET/POST blog posts
        │   └── [slug]/
        │       └── route.ts # GET/PUT/DELETE by slug
        ├── contacto/        # POST → Supabase
        ├── cotizacion/      # POST → Supabase
        └── instalaciones/   # POST → Supabase
```

## Conventions
- All `<img>` tags → replaced with Next.js `<Image>` ✅
- Remote images configured in `next.config.ts` (`lh3.googleusercontent.com`)
- **Content stored in Supabase** (blog posts, form submissions)
- Phone numbers via `.env.local`
- Supabase env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Database tables defined in `supabase/migration.sql` (run in Supabase SQL Editor)
- RLS: public read on published content, public insert on forms, auth-only for everything else

## Project State
- Public marketing site: ~95% complete
- CMS panel: ~80% complete
- Git: 4 commits, main branch, clean working tree

---

## Task List

### 🔴 Fase 1 — Esencial (bloqueante)

- [x] **1. API routes para formularios** — Cotización, contacto e instalaciones almacenan en Supabase.
- [x] **2. SEO metadata por página** — `metadata` export, OG tags, JSON-LD (LocalBusiness) en homepage, títulos dinámicos vía `useEffect` en client components.
- [x] **3. Menú móvil funcional** — Drawer lateral con overlay, toggle con hamburguesa, links completos.
- [x] **4. Páginas individuales de blog** — `[slug]/page.tsx` con SSG, generateStaticParams desde Supabase, metadata dinámica.
- [x] **5. Reemplazar `<img>` por `<Image>`** — 13 imágenes migradas con `fill` + `sizes`, remotePatterns configurado.

### 🟡 Fase 2 — Importante

- [x] **6. Integrar CMS** — **Supabase como backend/DB**. Blog dinámico, formularios persistentes, API CRUD.
- [x] **7. Crear `.env.local`** — Teléfonos, WhatsApp, APIs, GA4, site URL + Supabase credentials.
- [x] **8. Validación de formularios** — Mensajes de error, campos requeridos visibles.
- [x] **9. `robots.txt` y `sitemap.xml`** — SEO.
- [x] **10. Google Analytics (GA4)** — Script en root layout con next/script.

### 🟠 Fase 3 — Mejora

- [x] **11. Autenticación CMS** — Supabase Auth con login page en `/login`, AuthGuard wrapper, RLS policies.
- [x] **12. CMS funcional** — Dashboard con métricas reales, CRUD de blog posts (crear/publicar/archivar/eliminar), tabla de cotizaciones.
- [x] **13. Mapa integrado** — OpenStreetMap iframe en contacto.
- [x] **14. Filtro de categorías blog** — Lógica de filtrado client-side funcional.
- [x] **15. Accesibilidad WCAG 2.1 AA** — Skip-to-content, ARIA labels, focus management.

### 🔵 Fase 4 — Pulido

- [x] **16. Copyright dinámico** — `new Date().getFullYear()`.
- [x] **17. Página 404 personalizada** — `not-found.tsx` en marketing layout.
- [ ] **18. Optimización rendimiento** — Core Web Vitals targets.
- [ ] **19. CI/CD** — Deploy a Vercel.

## Setup Instructions

### 1. Run Supabase Migration
1. Ir a [Supabase Dashboard](https://supabase.com/dashboard/project/wdcmkftufzsfbrjlrfuo)
2. SQL Editor → pegar contenido de `supabase/migration.sql` → Ejecutar
3. Authentication → Providers → Email → asegurarse que está habilitado

### 2. Crear Admin User
En Supabase Dashboard → Authentication → Users → Invite user
- Email: (el que quieras)
- Password: la contraseña que usarás para login

### 3. Login en CMS
Ir a `/login` y usar las credenciales del paso anterior.

## Relevant Files
- `AGENTS.md`: This file
- `.env.local`: Variables de entorno (teléfonos, WhatsApp, GA4, site URL, Supabase)
- `supabase/migration.sql`: Schema SQL + seed data + RLS policies
- `src/lib/supabase/client.ts`: Browser client
- `src/lib/supabase/server.ts`: Server client (cookies)
- `src/lib/supabase/admin.ts`: Direct client (build-time / API routes)
- `src/components/AuthGuard.tsx`: CMS auth wrapper
- `src/middleware.ts`: Session refresh middleware
