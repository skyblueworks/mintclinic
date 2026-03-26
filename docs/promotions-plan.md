# Promotions Feature — Implementation Plan

**Status:** Awaiting approval
**Scope:** Option B (Dedicated page + site-wide banner, Sanity-managed)

---

## 1. Sanity — New Schema: `promotionType`

New document type added to `sanity/schemaTypes/promotionType.ts` and registered in `sanity/schemaTypes/index.ts`.

**Fields:**

| Field              | Type                    | Notes                                  |
| ------------------ | ----------------------- | -------------------------------------- |
| `title`            | `{ bg, en }`            | Promotion headline                     |
| `slug`             | slug                    | Auto-generated from title              |
| `badge`            | `{ bg, en }`            | Short label e.g. "20% OFF", "-100 лв." |
| `description`      | `{ bg, en }`            | Full rich-text description             |
| `image`            | image                   | Optional hero image for the card       |
| `originalPrice`    | `{ bgn, eur }`          | Original price strings                 |
| `promotionalPrice` | `{ bgn, eur }`          | Discounted price strings               |
| `linkedService`    | reference → serviceType | Optional link to a service page        |
| `ctaLabel`         | `{ bg, en }`            | Button text, default "Book Now"        |
| `startDate`        | datetime                | When to start showing it               |
| `endDate`          | datetime                | When to stop showing it                |
| `active`           | boolean                 | Manual on/off toggle                   |

**Active logic:** A promotion is live when `active === true` AND current date is between `startDate` and `endDate`.

---

## 2. Sanity — Lib Query

New file `lib/queries/promotionQueries.ts`:

- `activePromotionsQuery` — fetches all currently active promotions ordered by startDate desc
- `allPromotionsQuery` — fetches all (for the full page including expired)

---

## 3. Site-wide Announcement Banner

**File:** `components/PromotionBanner.tsx`
**Placement:** Inside `app/[locale]/layout.tsx`, above the main content, below the header.

- Fetches the **first active promotion** from Sanity (server component)
- Shows a slim coloured bar: badge + short title + "See offer →" link to `/promotions`
- Uses primary mint gradient background, white text
- Hidden when no active promotions exist
- Dismissible (client-side, session storage)

---

## 4. Promotions Page

**File:** `app/[locale]/promotions/page.tsx`

- Server component with `generateMetadata` for SEO
- Fetches all promotions (active + expired) from Sanity
- Passes to a client component for rendering
- Bilingual support via locale param

**File:** `app/[locale]/promotions/PromotionCards.tsx` (client component)

- Renders active promotions at the top
- Renders expired promotions below in a greyed section "Past Offers"
- Uses one of the 5 layouts chosen below

---

## 5. Promotions Page — 5 Layout Options

> All options use the existing brand: mint `#096b6a`, Comfortaa headings, DM Sans body,
> asymmetric rounded corners (`rounded-2xl rounded-bl-none rounded-tr-none`),
> mint-tinted shadows, fully-rounded buttons.

---

### Layout 1 — Grid Cards (Clean & Balanced)

```
┌─────────────────────────────────────────┐
│  PROMOTIONS          [mint gradient bg] │
│  Текущи оферти / Current offers         │
└─────────────────────────────────────────┘

┌───────────┐  ┌───────────┐  ┌───────────┐
│  [image]  │  │  [image]  │  │  [image]  │
│ ─────────  │  │ ─────────  │  │ ─────────  │
│ 20% OFF   │  │ -100 лв.  │  │  SPECIAL  │
│ Title     │  │  Title    │  │  Title    │
│ Desc...   │  │  Desc...  │  │  Desc...  │
│ ~~200лв~~ │  │ ~~150лв~~ │  │ ~~80лв~~  │
│  150 лв.  │  │  50 лв.   │  │  60 лв.   │
│ [Book Now]│  │ [Book Now]│  │ [Book Now]│
│ Until Apr │  │ Until May │  │ Until Jun │
└───────────┘  └───────────┘  └───────────┘
```

3-column grid on desktop, 1-column on mobile. Each card uses asymmetric corners.
Good for 3+ simultaneous promotions.

---

### Layout 2 — Featured Hero + Smaller Cards

```
┌───────────────────────────────────────────────────────┐
│  [Large image — full width]                           │
│                                  20% OFF              │
│                           Teeth Whitening             │
│                           Short description here      │
│                     ~~300 лв~~  240 лв.               │
│                           [Book Now]  Until: Apr 30   │
└───────────────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Small card  │  │  Small card  │  │  Small card  │
└──────────────┘  └──────────────┘  └──────────────┘
```

First promotion is featured in a large hero card.
Remaining promotions appear as smaller cards below.
Good when there's 1 main promotion + several secondary.

---

### Layout 3 — Alternating Rows (Magazine Style)

```
┌─────────────────────────────────────────────────────┐
│  [Image — left]  │  20% OFF                         │
│                  │  Title                           │
│                  │  Full description paragraph...   │
│                  │  ~~200лв~~  160 лв.              │
│                  │  [Book Now]      Until Apr 30    │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  -100 лв.        │  [Image — right]                 │
│  Title           │                                  │
│  Full desc...    │                                  │
│  ~~150лв~~ 50лв  │                                  │
│  [Book Now]      │                                  │
└─────────────────────────────────────────────────────┘
```

Left/right alternating rows with a large image and text block.
Editorial feel, works well with good photography.
Good for 2–5 promotions with longer descriptions.

---

### Layout 4 — Compact List with Badges

```
┌──────────────────────────────────────────────────────┐
│ [badge: 20% OFF]  Teeth Whitening      ~~300~~ 240лв │
│ Кратко описание на офертата...                       │
│ [Book Now]                         Until April 30 →  │
├──────────────────────────────────────────────────────┤
│ [badge: NEW]      Implant Package      ~~1200~~ 999  │
│ Кратко описание на офертата...                       │
│ [Book Now]                              Until May 1  │
├──────────────────────────────────────────────────────┤
│ [badge: -100лв]   Full Examination      ~~80~~ 80лв  │
│ ...                                                  │
└──────────────────────────────────────────────────────┘
```

Dense, information-rich list. No images (or optional small thumbnail).
Fast to scan. Good for clinics with many simultaneous promotions.

---

### Layout 5 — Full-width Banner Cards

```
┌──────────────────────────────────────────────────────┐
│  [Full-width background image with mint overlay]     │
│                                                      │
│   20% OFF                                            │
│   Teeth Whitening                                    │
│   Short description of the promotion                 │
│                                                      │
│   ~~300 лв~~   240 лв.      [Book Now]               │
│                             Valid until April 30     │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  [Full-width background image with mint overlay]     │
│  ...second promotion...                              │
└──────────────────────────────────────────────────────┘
```

Visually impactful full-width cards stacked vertically.
Maximum visual effect, great with professional photography.
Good for 1–4 promotions where each deserves full attention.

---

## 6. Navigation Update

Add "Promotions" link to the site nav. When promotions are active, show a small dot/badge indicator.

- Desktop nav: new item between Pricing and Blog (or wherever fits)
- Mobile nav: same

---

## 7. i18n

Add translation keys for:

- Page title, meta description
- "Current promotions" / "Past offers" section headings
- "Valid until", "Offer ended" labels
- Default CTA button text

---

## Checklist (implementation order)

- [ ] 1. Create `promotionType` Sanity schema
- [ ] 2. Add Sanity queries in `lib/queries/`
- [ ] 3. Build `PromotionBanner` component
- [ ] 4. Wire banner into locale layout
- [ ] 5. Build `PromotionCards` with chosen layout
- [ ] 6. Create `/promotions` page (server component)
- [ ] 7. Add nav link
- [ ] 8. Add i18n keys
- [ ] 9. Test with sample Sanity content

---

## Decisions needed before implementation

1. **Which page layout?** (1 Grid / 2 Featured / 3 Magazine / 4 List / 5 Banners)
2. **Show expired promotions** on the page, or hide them?
3. **Nav placement** for the Promotions link?

---

_Note: No Sanity MCP was found in the current tool setup. If you have a Sanity MCP plugin available, please share it and we can add it before starting. Otherwise we'll work directly with the schema files and GROQ queries as the rest of the project does._
