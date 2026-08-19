# UNIQ TRADE INC. — Next.js website

Multi-page bilingual corporate website for UNIQ TRADE INCORPORATED.

## Pages

### English
- `/`
- `/products`
- `/industries`
- `/about`
- `/why-uniq`
- `/how-we-work`
- `/contact`

### Russian
- `/ru`
- `/ru/products`
- `/ru/industries`
- `/ru/about`
- `/ru/why-uniq`
- `/ru/how-we-work`
- `/ru/contact`

## Editing content

Most website copy is centralized in:

`src/lib/content.ts`

Company contact details, navigation, products, industries, benefits, process steps and English/Russian text can be changed there.

## Images

The design uses a consistent industrial photography direction from Pexels. Images are referenced from `images.pexels.com` and are configured in `next.config.ts`.

## Quote form

The request form is currently front-end only. It validates the basic fields and displays the company email after submission. A future backend/email service can be connected without redesigning the page.

## Deploy

Push to GitHub and connect the repository to Vercel. Build command:

`npm run build`
