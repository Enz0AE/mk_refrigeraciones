---
name: MKRefrigeraciones Design System
colors:
  surface: '#faf9fb'
  surface-dim: '#dbd9dc'
  surface-bright: '#faf9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#efedf0'
  surface-container-high: '#e9e8ea'
  surface-container-highest: '#e3e2e5'
  on-surface: '#1b1c1e'
  on-surface-variant: '#43474d'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f2f0f3'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607e'
  primary: '#000f22'
  on-primary: '#ffffff'
  primary-container: '#0a2540'
  on-primary-container: '#768dad'
  inverse-primary: '#b0c8eb'
  secondary: '#006877'
  on-secondary: '#ffffff'
  secondary-container: '#00e0ff'
  on-secondary-container: '#005f6d'
  tertiary: '#0c1011'
  on-tertiary: '#ffffff'
  tertiary-container: '#212527'
  on-tertiary-container: '#898c8e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b0c8eb'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#314865'
  secondary-fixed: '#a5eeff'
  secondary-fixed-dim: '#00daf8'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#faf9fb'
  on-background: '#1b1c1e'
  surface-variant: '#e3e2e5'
  safety-orange: '#FF4D00'
  frost-blue: '#E2E8F0'
  industrial-gray: '#475569'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  unit: 4px
  gutter-sm: 16px
  gutter-md: 24px
  margin-edge: 32px
  section-gap: 80px
---

## Brand & Style

The visual identity of the design system is anchored in **Industrial Professionalism**. It reflects 20 years of expertise in Garupá, Misiones, by utilizing a structural, modular aesthetic that mirrors the physical construction of cold storage panels and refrigerated containers.

The style is a blend of **Corporate Modern** and **Industrial Brutalism**, characterized by:
- **Modular Grid Logic:** Elements are organized in clear, functional blocks, reminiscent of walk-in cooler assembly.
- **Technical Precision:** Use of sharp corners and hairline strokes to evoke a sense of engineering accuracy.
- **Cold-Chain Aesthetic:** High-contrast surfaces (Deep Navy vs. Stark White) that simulate the professional environment of industrial refrigeration.
- **Authority:** A heavy emphasis on legibility and data density to serve both high-conversion B2B leads and complex CMS administrative tasks.

## Colors

The palette is designed to feel "chilled" and authoritative.
- **Primary (Deep Industrial Blue):** Used for headers, primary navigation, and grounding containers. It establishes trust and stability.
- **Secondary (Cyan/Electric Blue):** The "active" cold signal. Used for interactive elements and highlights within the CMS to indicate "on" states or cooling.
- **Tertiary (Appliance White):** The base surface color, providing a clean, hygienic backdrop typical of pharma and food environments.
- **Safety Orange (Named):** Reserved strictly for critical warnings, emergency CTAs, or "Request Quote" buttons to stand out against the cold blue palette.
- **Industrial Gray:** Used for technical metadata, borders, and secondary text.

## Typography

Typography focuses on technical clarity. 
- **Headlines:** Hanken Grotesk provides a sharp, modern, and high-impact feel for marketing headers.
- **Body:** Inter is the workhorse for long-form content and technical specs, chosen for its exceptional legibility on screens.
- **Technical Labels:** JetBrains Mono is introduced for labels, serial numbers, and dimension specs (e.g., "40ft Reefer") to reinforce the industrial, engineered nature of the products.
- **Hierarchy:** Large display sizes are used for the 20-year anniversary callouts and primary value propositions on the landing page.

## Layout & Spacing

The layout philosophy follows a **Fixed-Width Grid** for the landing page (max-width 1280px) and a **Fluid Hybrid** for the CMS.

- **The 4px Baseline:** All spacing is derived from a 4px increments (4, 8, 16, 24, 32...).
- **Modular Blocks:** Content is housed in "Panels." Sections on the landing page should have generous vertical padding (80px+) to maintain a high-end, professional feel.
- **Data Density:** In the CMS, the spacing tightens to 8px and 12px margins to allow for maximum information visibility without scrolling.
- **Breakpoints:**
  - **Mobile (< 768px):** Single column, 16px margins.
  - **Tablet (768px - 1024px):** 6-column grid, 24px margins.
  - **Desktop (> 1024px):** 12-column grid, 32px margins.

## Elevation & Depth

To mirror the flat, interlocking surfaces of cold storage panels, the design system avoids heavy, organic shadows.

- **Low-Contrast Outlines:** Surfaces are primarily separated by 1px solid borders (`#E2E8F0`). 
- **Technical Insets:** Instead of shadows, use subtle inner shadows or tonal changes (light gray to white) to indicate buttons being pressed or inputs being active.
- **Stacking:** For the CMS, use "Tonal Layers." The background is `#F8FAFC`, and active cards are `#FFFFFF` with a 1px border.
- **Elevation Z-Index:** Modals and "Request Quote" popovers use a sharp 4px offset shadow with 0% blur and 10% opacity in `#0A2540` to maintain the industrial feel.

## Shapes

The shape language is strictly **Sharp (0px)**. 

- **Rationale:** Modular refrigeration units, containers, and display freezers are defined by right angles and precision. Rounded corners contradict the industrial "Heavy Duty" promise of the brand.
- **Exceptions:** Very small (2px) radius may be used for internal form inputs within the CMS to improve digital usability, but all primary buttons, cards, and image containers must remain sharp.

## Components

### Buttons
- **Primary (CTA):** Sharp corners, Background: Safety Orange, Text: White (Bold).
- **Secondary (Technical):** Sharp corners, Background: Primary Blue, Text: White.
- **Ghost:** 1px Primary Blue border, Transparent background.

### Cards
- **Product Cards:** No shadow. 1px `#E2E8F0` border. Title in Hanken Grotesk. Specs (Dimensions/Temp) in JetBrains Mono.
- **Dashboard Widgets:** White background, left-aligned accent bar in Primary Blue (4px width).

### Inputs & Forms
- **Multi-step Quote Form:** Large, clear inputs with JetBrains Mono labels. Active state indicated by a 2px Secondary (Cyan) bottom border.
- **Progress Indicator:** Linear, step-based bar using the Secondary Cyan color for completion.

### Chips & Status Indicators
- **Status Tags:** Rectangular (0px radius). 
  - *Available:* Light Cyan background, Dark Blue text. 
  - *Out of Stock:* Light Gray background, Industrial Gray text.
  - *Emergency/Urgent:* Light Orange background, Safety Orange text.

### Navigation
- **Header:** Sticky, Deep Navy background with white text. High contrast for immediate utility.
- **CMS Sidebar:** Dark mode by default (Deep Navy) to differentiate the management environment from the public-facing site.