# Service Pages Component Mapping

This document maps out the component structure for each service page on mintclinic.com.

## Available MDX Components

### Layout Components

1. **TwoColumn** - Responsive 2-column layout (stacks on mobile)
   - Use for image + text sections
   - Image can be on left or right by changing order of Column components

2. **ThreeColumn** - Responsive 3-column layout (1 col mobile → 2 cols tablet → 3 cols desktop)
   - Use with Card components for feature grids

3. **Column** - Individual column wrapper for layout components
   - Use inside TwoColumn or Grid

4. **Card** - Bordered card component with gradient background
   - Use for feature boxes, callouts

5. **Grid** - Flexible responsive grid with customizable breakpoints
   - Use for materials grid, image galleries, or any custom grid layout
   - Supports 1-4 columns at different breakpoints

### Content Components

6. **Process** - Step-by-step numbered process component
   - Displays numbered steps with title and description
   - Responsive grid layout (1 col → 2 cols → 3 cols)

7. **Video** - Responsive video embed (YouTube, Vimeo, etc.)
   - Automatically maintains 16:9 aspect ratio

8. **RelatedServices** - Grid of service cards with links
   - Use at bottom of service pages
   - Supports 3, 4, or 6 column layouts

9. **Gallery** - Image gallery with lightbox viewer
   - Clickable images with navigation

10. **FAQ** - Accordion-style FAQ component

11. **BeforeAfter** - Before/after image slider

12. **CTA** - Call-to-action button/section

13. **Testimonial** - Customer testimonial display

### Standard Markdown

Use standard markdown for:
- **Headings** - Use `##`, `###` for section titles
- **Paragraphs** - Regular text
- **Lists** - Use `-` or `*` for bulleted lists
- **Images** - Use `![alt](image.jpg)` for standalone images
- **Links** - Use `[text](url)` for links

---

## Естетика (Aesthetics)

### 1. Фасети (Veneers)
**URL:** `/uslugi/estetika/faseti/`

1. Heading + Paragraph (Hero intro with markdown)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What are veneers")
4. Markdown list ("Advantages")
5. Process ("Veneer Placement Process" - 4 steps)
6. Markdown heading + paragraph ("Who are veneers for")
7. Markdown image (full-width)
8. RelatedServices (3 columns - Related services)

### 2. Digital Smile Design
**URL:** `/uslugi/estetika/digital-smile-design/`

1. Heading + Paragraph (Hero intro)
2. TwoColumn (Image + text - Transformation overview)
3. Markdown heading + paragraph ("DSD explanation")
4. TwoColumn (Image + text - Mock-up section)
5. Process ("Transformation Process" - 5 steps)
6. Markdown list ("Advantages")
7. RelatedServices (3 columns - Related services)

### 3. Избелване на зъбите (Teeth Whitening)
**URL:** `/uslugi/estetika/izbelvane-na-zabite/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("Tooth Whitening Options")
4. Markdown heading + list ("In-Clinic Whitening")
5. Markdown heading + list ("Home Whitening")
6. Markdown heading + list ("Combined Method")
7. Markdown heading + list ("When Whitening is Not Appropriate")
8. Markdown image (full-width)
9. Video
10. RelatedServices (3 columns - Related services)

### 4. Бондинг (Bonding)
**URL:** `/uslugi/estetika/bonding/`

1. TwoColumn (Text left, Image right - Hero)
2. Markdown heading + paragraph ("What is Bonding")
3. Markdown list ("Advantages")
4. Markdown heading + paragraph ("Maintenance")
5. Markdown list ("Durability")
6. Video
7. RelatedServices (3 columns - Related services)

---

## Хирургия (Surgery)

### 5. Дентални импланти (Dental Implants)
**URL:** `/uslugi/hirurgiya/dentalni-implanti/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What Are Dental Implants")
4. Markdown list ("Advantages")
5. Process ("Implant Process" - 4 steps)
6. Markdown heading + paragraph ("Candidate Eligibility")
7. Markdown image (full-width)
8. Video
9. RelatedServices (3 columns - Related services)

### 6. Екстракции (Extractions)
**URL:** `/uslugi/hirurgiya/ekstrakczii/`

1. Heading + Paragraph (Hero intro)
2. Process ("Extraction Process" - 4 steps)
3. Video
4. RelatedServices (3 columns - Related services)

### 7. Оформяне на венеца (Gum Shaping)
**URL:** `/uslugi/hirurgiya/oformyane-na-venecza/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What is Gum Contouring")
4. Markdown list ("When gum contouring is necessary")
5. Process ("Procedure Steps" - 4 steps)
6. Markdown list ("Post-Procedure Care")
7. RelatedServices (3 columns - Related services)

### 8. Покриване на рецесии (Recession Coverage)
**URL:** `/uslugi/hirurgiya/pokrivane-na-reczesii/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown list ("Causes of Recession" - 4 points)
4. Markdown heading + paragraph ("What is Recession Coverage")
5. Markdown list ("Post-procedure care")
6. Video
7. RelatedServices (3 columns - Related services)

---

## Протетика (Prosthetics)

### 9. Коронки (Crowns)
**URL:** `/uslugi/protetika/koronki/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What is a Crown")
4. Grid (4-column - Crown Materials using Card components)
5. Process ("Crown Placement Process" - 5 steps)
6. Video
7. RelatedServices (6 columns - Related services - 6 items)

### 10. Мостове (Bridges)
**URL:** `/uslugi/protetika/mostove/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What is a Dental Bridge")
4. Markdown list ("Implant advantages")
5. Grid (4-column - Bridge Materials using Card components)
6. Process ("Bridge Placement Process" - numbered steps)
7. Video
8. RelatedServices (6 columns - Related services - 6 items)

### 11. Інлей и Онлей (Inlay & Onlay)
**URL:** `/uslugi/protetika/inlej-i-onlej/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What are Inlay and Onlay")
4. Markdown list ("Differences between inlay and onlay")
5. Process ("Placement Process" - numbered steps)
6. Markdown list ("When are Inlays/Onlays Needed")
7. Markdown list ("Advantages")
8. RelatedServices (3 columns - Related services)

### 12. Функционална рехабилитация (Functional Rehabilitation)
**URL:** `/uslugi/protetika/funkczionalna-rehabilitacziya/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown list ("When is Functional Rehabilitation Necessary")
4. Process ("Functional Rehabilitation Process" - 4 steps)
5. Markdown list ("Advantages")
6. Markdown image (full-width)
7. Video
8. RelatedServices (6 columns - Related services - 6 items)

### 13. Шини за бруксисти (Bruxism Splints)
**URL:** `/uslugi/protetika/shini-za-bruksisti/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What are Bruxism Braces")
4. Markdown heading + paragraph ("When to Seek Treatment")
5. Gallery (6 images - Procedure images)
6. RelatedServices (6 columns - Related services - 6 items)

### 14. Протези (Prostheses)
**URL:** `/uslugi/protetika/protezi/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown list ("Types of Dental Prostheses")
4. Markdown list ("Disadvantages of Dental Prostheses")
5. Markdown heading + paragraph ("Prostheses on Implants")
6. RelatedServices (3 columns - Related services)

---

## Консервативна терапия (Conservative Therapy)

### 15. Професионално почистване и профилактика (Professional Cleaning)
**URL:** `/uslugi/konservativna-terapiya/profesionalno-pochistvane-i-profilaktika/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown heading + paragraph ("What is Professional Teeth Cleaning")
4. Process ("Main Procedure Steps" - 3 steps: Ultrasound, Polishing, Fluoride)
5. Markdown list ("Benefits")
6. Markdown heading + paragraph ("Frequency Recommendation")
7. Video
8. RelatedServices (3 columns - Related services - 3 items)

### 16. Обтурации (Dental Fillings)
**URL:** `/uslugi/konservativna-terapiya/obturaczii/`

1. Heading + Paragraph (Hero intro)
2. TwoColumn (Image + text - Main content)
3. Markdown heading + paragraph ("Filling Placement Process")
4. Markdown list ("Disadvantages of Composite Fillings" - 3 points)
5. Markdown heading + paragraph ("Alternative Solutions - ceramic inlays/onlays")
6. RelatedServices (3 columns - Related services)

### 17. Кореново лечение (Root Canal Treatment)
**URL:** `/uslugi/konservativna-terapiya/korenovo-lechenie/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. TwoColumn (Image + text - "What is Root Canal Treatment")
4. Markdown list ("Why Choose Our Clinic - technological advantages")
5. Process ("Treatment Process" - 2 steps with CTA button)
6. Video
7. Markdown heading + paragraph ("Post-Treatment Information")
8. Markdown list (Additional info)
9. Markdown heading + paragraph ("Relining/Re-treatment")
10. RelatedServices (3 columns - Related services)

---

## Ортодонтия (Orthodontics)

### 18. Алайнери (Aligners)
**URL:** `/uslugi/alajneri/`

1. Heading + Paragraph (Hero intro)
2. TwoColumn (2 images side-by-side or use Gallery)
3. Markdown heading + paragraph ("What are Aligners")
4. Markdown list ("Advantages" - 4 benefits)
5. Process ("How Aligners Work" - step-by-step)
6. Markdown list ("Aligner Maintenance" - 2 points)
7. Markdown list ("Aligner Disadvantages" - 2 points)
8. RelatedServices (3-4 columns - Other services - 5 cards)

---

## Спешна помощ (Emergency)

### 19. Спешна дентална помощ (Emergency Dental Help)
**URL:** `/uslugi/speshna-dentalna-pomosth/`

1. Heading + Paragraph (Hero intro)
2. Markdown image (hero image)
3. Markdown list ("When Emergency Dental Help is Needed")
4. Process ("What to Do in Emergency" - guidance steps)
5. RelatedServices (3 columns - Other services)
6. Markdown heading + paragraph (Call to action encouragement)

---

## Component Usage Summary

### Most Common Components (in order of frequency):
1. **Markdown heading + paragraph** - Hero intro on every page (19/19)
2. **RelatedServices** - Used for related services on every page (19/19)
3. **Markdown image** - Hero images and full-width images (18/19)
4. **Markdown lists** - Used for advantages/disadvantages (17/19)
5. **Process** - Used for step-by-step procedures (13/19)
6. **Video** - Used on many pages (10/19)
7. **TwoColumn** - Used for image/text layouts (6/19)
8. **Grid** - Used for materials/features with Card components (4/19)
9. **Gallery** - Used for multiple images (1/19)

### Common Page Patterns:

**Pattern A: Standard Service Page**
1. Markdown heading + paragraph (Hero intro)
2. Markdown image (Hero image)
3. Markdown heading + paragraph (What is X)
4. Markdown list (Advantages)
5. Process (How it works)
6. Video (optional)
7. RelatedServices (3 columns)

**Pattern B: Prosthetic Page**
1. Markdown heading + paragraph (Hero intro)
2. Markdown image (Hero image)
3. Markdown heading + paragraph (What is X)
4. Grid with Card components (Materials - 4 columns)
5. Process (Placement process)
6. Video (optional)
7. RelatedServices (6 columns)

**Pattern C: Simple Service Page**
1. Markdown heading + paragraph (Hero intro)
2. Markdown lists or Process
3. Video (optional)
4. RelatedServices (3 columns)

**Pattern D: Image-Heavy Service Page**
1. TwoColumn (Text + Image for hero)
2. Markdown heading + paragraph (Explanation)
3. Process or markdown lists
4. Gallery or markdown images
5. RelatedServices
