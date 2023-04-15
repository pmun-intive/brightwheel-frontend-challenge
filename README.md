# Brightwheel Challenge

This repo was with node v16.18.0. Probably only with version 16+ it is going to work properly.

## Running

To begin run:

```bash
  npm install
```

After this process is finished it is necessary run the project with the command:

```bash
  npm run dev
```

If the tests need to be run just try

```bash
  npm run test
```

If the api is using another route, just change the api location inside the environment variable at .env file.

Just insert whatever is the route after the `=`

```bash
NEXT_PUBLIC_API_ROUTE=
```

## Considerations

This project was done with styled-components as I had some previous knowledge using it.

The kiwi-components lib was added only to be easier to deal with tables and modal that were semantic.

The modules folder was created with the intention that each page should have its own folder there. So for each page we would have components and styles there. If there are hooks specific for that page it should be added there.

Utils folder was intended to have global data management and other utilities. In this scenario it was responsible to have the hooks for the index page and the creation of the context.

Context made it easier to access the star count and company data throuout the app.

The way error is handled is pretty basic and it has ways to make it better. Probably I should transform it into a notification component.

Every time a new data is entered the spinner appears again reloading. There is ways of improvements where I could do pagination or caching the data avoiding the loading icon to appear constantly.

Next js was used because it would help creating better SEO and it was fast configuring route changes, testing and typescript.

## Demo

A demo was deployed to vercel and can be found here

[https://brightwheel-frontend-challenge.vercel.app/](https://brightwheel-frontend-challenge.vercel.app/)
