This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Production link

[https://exercises-stephenrance.vercel.app/](https://exercises-stephenrance.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

```bash
npm run test
```

## Deployment

Pushing to `origin` automatically deploys the build to the [production link](https://exercises-stephenrance.vercel.app/) via Vercel.

## Missing

A list of things that were missed:

- A number of tests for one or two components.
- Tests for the `index.tsx` page bringing everything together.
- Showing the `transcript` when selecting an exercise.
- Sufficient documentation (e.g. comments).

## To-do

A list of things that could be improved:

- Animations and transitions (images fading, loading state, etc).
- Application congfiguration files could be better (Jest, React Test Library, etc)?
- Data fetched on page load is quite large, and the image replacement logic is fairly expensive.
- General page performance needs improvement - [GTmetrix result](https://gtmetrix.com/reports/exercises-stephenrance.vercel.app/lGFVJla1/).
- More and/or better `aria` and `role` attributes.
- Typing could be better?
