# Mint Clinic — Studio Guide

This guide explains how to manage content on the Mint Clinic website using Sanity Studio.

**Studio URL:** https://mint-clinic.sanity.studio

---

## Table of Contents

1. [Logging in](#1-logging-in)
2. [Managing "Актуално" (What's On)](#2-managing-актуално-whats-on)
3. [The announcement banner](#3-the-announcement-banner)
4. [Site Settings](#4-site-settings)

---

## 1. Logging in

1. Go to **https://mint-clinic.sanity.studio**
2. Sign in with your Sanity account (Google or email)
3. You will land on the Studio dashboard

---

## 2. Managing "Актуално" (What's On)

### Finding promotions

In the left sidebar, click **Promotion**. You will see a list of all current and past promotions.

### Creating a new promotion

Click the **pencil / compose icon** (top right of the list) to create a new promotion. Fill in the fields:

| Field                           | What it does                                                                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Title (BG / EN)**             | The name shown on the card and page. The title also becomes a clickable link to the service page if a service link is set.                                                           |
| **Badge**                       | The label on the orange pill, e.g. `20% OFF`, `-200 лв.`, `FREE`. Keep it short.                                                                                                     |
| **Description (BG / EN)**       | Full description. Long text is automatically collapsed with a "Read more" button on the site.                                                                                        |
| **Image**                       | Optional photo for the card. Recommended size: at least 800×600 px.                                                                                                                  |
| **Original price**              | The price before the discount, e.g. `300 лв.`                                                                                                                                        |
| **Promo price**                 | The discounted price, e.g. `240 лв.`                                                                                                                                                 |
| **Savings**                     | What the patient saves, e.g. `60 лв.` — shown in grey below the price.                                                                                                               |
| **Valid from**                  | Start date. If this is in the future, the promotion appears in a separate "Coming Soon" section with a blurred image.                                                                |
| **Valid until**                 | End date shown on the card.                                                                                                                                                          |
| **Service page link**           | Path to the related service, e.g. `/uslugi/estetika/izbelvane-na-zabite`. When set, the title becomes a clickable link and a **"Learn more"** button appears next to **"Book Now"**. |
| **Active**                      | Toggle **off** to hide a promotion without deleting it. Useful for keeping a record of past offers.                                                                                  |
| **Show in announcement banner** | Toggle **on** to show this promotion in the teal banner at the top of every page. Only one promotion should have this on at a time.                                                  |
| **Banner text (BG / EN)**       | The short text shown inside the announcement banner. If left empty, the promotion title is used instead.                                                                             |
| **Display order**               | Controls the order promotions appear on the page. Lower number = shown first.                                                                                                        |

### Editing an existing promotion

Click any promotion in the list to open it. Make your changes and click **Publish** (bottom right) when done.

> ⚠️ **Important:** Changes are saved as a **draft** until you click **Publish**. The website only shows published content.

### Deactivating a promotion (without deleting)

Open the promotion → toggle **Active** off → click **Publish**.
The promotion disappears from the website but stays in Studio for your records.

### Deleting a promotion permanently

Open the promotion → click the **three dots menu** (top right) → **Delete**.

---

## 3. The announcement banner

The teal banner at the top of every page (below the navigation) is controlled by the **Show in announcement banner** toggle on a promotion.

**To show the banner:**

1. Open the promotion you want to feature
2. Toggle **Show in announcement banner** → on
3. Optionally fill in **Banner text** (BG and EN) — this is the short sentence shown in the banner. If empty, the promotion title is used.
4. Click **Publish**

**To hide the banner:**

- Toggle **Show in announcement banner** off on all promotions, or
- Toggle **Active** off on the featured promotion

> The banner automatically hides on the "Актуално" page itself to avoid repetition.

---

## 4. Site Settings

**Site Settings** is a single document that controls global text on the website.

In the left sidebar, click **Site Settings**.

| Field                            | What it does                                                                                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **No promotions text (BG / EN)** | The message shown on the "Актуално" page when there are no active promotions. Default: _"В момента няма активни оферти. Очаквайте скоро нови."_ |

After editing, click **Publish**.

---

## Quick reference — common tasks

| I want to…                      | Do this                                                                |
| ------------------------------- | ---------------------------------------------------------------------- |
| Add a new offer                 | Create a new **Promotion** document, fill in the fields, click Publish |
| Hide an offer temporarily       | Open the promotion → toggle **Active** off → Publish                   |
| Show the top banner             | Open a promotion → toggle **Show in announcement banner** on → Publish |
| Change the banner text          | Open the promotion → edit **Banner text** → Publish                    |
| Link an offer to a service page | Open the promotion → fill in **Service page link** → Publish           |
| Change the "no offers" message  | Open **Site Settings** → edit the text → Publish                       |

---

_Last updated: April 2026_
