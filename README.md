MyBet – Betting Matchup + Blog demo built with [Next.js](https://nextjs.org), Tailwind CSS, and shadcn/ui. Deployed at [my-bet.vercel.app](https://my-bet.vercel.app/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing by navigating to `src/app/matchups/[slug]/page.tsx` and `src/components/*`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- Matchups page with server components and Suspense streaming
- Sections: Match header with countdown, Last 10 Games, Odds, Related Articles, Signals
- Mock data layer with typed models and server actions
- Articles pagination (5 per page) with server paged fetch and client cache
- PWA/offline support with manifest and service worker
- Responsive design and improved accessibility (aria roles, live regions)

## Tech stack

- Next.js App Router (TypeScript)
- Tailwind CSS + shadcn/ui
- Server Actions for data fetching
- Deployed on Vercel

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. The current live deployment is available at [my-bet.vercel.app](https://my-bet.vercel.app/).
