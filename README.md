# Nuxt 3 Skeleton Loading Tutorial Project

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/andrevandal/nuxt-skeleton-example)

This project demonstrates how to implement a superfast skeleton loading in Nuxt 3, which is an excellent practice for better user experience. It gives the impression that the page is loading content, preventing the notion of a broken page.

Navigate to [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt 3.

## About The Project

The tutorial leverages the Nuxt 3 Server Directory API that returns a list of Pokemons, granting us complete control over data fetching and loading times.

It utilizes the `@nuxthq/ui` module for the `USkeleton` component, paired with the `useLazyFetch` composable for fetching the data (Pokemons in this case) on the client side.

Lastly, optional transitions are added using the `TransitionGroup` component, enhancing the appearance of changes induced by the skeleton loading.

## Setup

Firstly, ensure that all the project dependencies are installed using either:

```bash
npm install
```

## Development Server

Next, start the development server which should then be accessible at http://localhost:3000. You can do this with:

```bash
npm run dev
```

## Production

When you are ready, build the application for production using:

```bash
npm run build
```

You can then locally preview the production build by running:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more comprehensive information on deploying Nuxt 3 applications.
