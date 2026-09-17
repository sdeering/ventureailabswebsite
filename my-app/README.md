# Venture AI Labs

Marketing website for [Venture AI Labs](https://ventureailabs.com/), showcasing AI innovation, intelligent automation, and startup solutions.

Built with [Next.js 14](https://nextjs.org/) (App Router), TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com/) components on top of Radix UI.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                Root layout, global styles, and the home page
components/
  header.tsx        Site navigation
  hero.tsx          Hero section
  services.tsx       Services offered
  ai-tools.tsx        AI tools/products section
  about.tsx           About Venture AI Labs
  contact.tsx         Contact section
  footer.tsx          Site footer
  theme-provider.tsx  Dark/light theme handling (next-themes)
  ui/                 Reusable shadcn/ui primitives
lib/                 Shared utilities
public/              Static assets (favicons, images)
```

## Scripts

| Command         | Description                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local development server |
| `npm run build` | Build the production bundle        |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Deployment

This is a standard Next.js app and can be deployed to [Vercel](https://vercel.com/new) or any platform that supports Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
