# RaiseNest Brand Guidelines

Welcome to the official RaiseNest brand identity guidelines. This document ensures that our visual identity remains cohesive, premium, and recognizable across all platforms and touchpoints.

---

## 1. The Logo

The RaiseNest logo is the anchor of our visual identity. It combines an interlocking "R", an upward-sweeping "N" forming a growth arrow, and a gold coin denoting crowdfunding.

### Variants
- **Primary Logo:** Used on dark backgrounds. Features the white "R" and the cyan-to-blue gradient arrow.
- **Monochrome:** Used for internal documents, watermarks, or flat single-color print.
- **Icon Only:** Used for avatars, favicons, and social media profiles where space is limited.

### Safe Space & Minimum Size
- **Safe Space:** Always leave a margin equal to the height of the gold coin around the entire logo to ensure it breathes.
- **Minimum Size:** The logo should never be rendered smaller than `24px x 24px` on screen to maintain legibility of the dollar sign.

### Incorrect Usage
- ❌ Do not stretch, skew, or distort the logo proportions.
- ❌ Do not change the angle of the upward arrow.
- ❌ Do not replace the gold coin with a different currency symbol (unless localizing specific sub-brands).
- ❌ Do not place the primary logo on busy, high-contrast backgrounds without a dark overlay.

---

## 2. Color Palette

Our colors are designed to feel modern, trustworthy, and electric. They are derived directly from the Next.js `globals.css` Tailwind tokens.

### Primary Colors
- **Deep Navy (Background):** `#081021` (Tailwind: `222 47% 6%`)
- **Vibrant Blue/Cyan (Primary):** `#00F0FF` to `#003BFF` (Tailwind: `210 100% 50%`)
- **Gold (Accent):** `#FFD700` (Tailwind: `45 93% 47%`)

### UI Colors
- **Surface/Card:** `#000000` (Tailwind: `0 0% 100%` / `222 47% 6%`)
- **Text (Foreground):** `#F8FAFC` (Tailwind: `0 0% 98%`)
- **Muted Text:** `#94A3B8` (Tailwind: `215 20.2% 65.1%`)

---

## 3. Typography

RaiseNest uses clean, geometric sans-serif fonts to communicate clarity and precision.

- **Primary Font:** `Geist Sans` (Used for all UI elements, headings, and body copy).
- **Fallback Font:** `Inter` or `system-ui`.
- **Monospace:** `Geist Mono` or `Fira Code` (Used exclusively for code snippets or data tables).

### Hierarchy
- **H1 (Display):** Extra Bold (800), tight tracking (`tracking-tight`).
- **H2 (Section):** Bold (700), used for page sections.
- **Body:** Regular (400) or Medium (500) for standard readability, leading-relaxed.

---

## 4. UI Patterns & Styling

Treat the user interface as an extension of the brand.

- **Glassmorphism:** Use `backdrop-blur-md` with `bg-white/5` for floating panels, navbars, and modals to create depth against the Deep Navy background.
- **Borders:** Subtle white borders (`border-white/10`) should separate sections. Avoid harsh solid lines.
- **Gradients:** The primary cyan-to-blue gradient should be used sparingly for primary call-to-action buttons, key numbers, or active states.
- **Corners:** Use medium to large border radii (`rounded-xl` or `rounded-2xl`) for cards and modals to feel approachable.

---

## 5. Animations

Animations should be functional, buttery-smooth, and premium.
- **Hover States:** Elements should scale up slightly (`scale-105`) with a 300ms transition.
- **Loading States:** Use the official `<Logo animated />` component. Do not use generic spinners for full-page loads.
- **Page Transitions:** Utilize Framer Motion for subtle fade-ups (`y: 20, opacity: 0` to `y: 0, opacity: 1`) when mounting new views.

---

By adhering strictly to these guidelines, RaiseNest maintains the visual fidelity expected of a tier-one tech startup.
