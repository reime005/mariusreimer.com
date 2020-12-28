---
title: "Faster React Page Loads With Lazy and Suspense"
date: "2020-07-26"
description: "Third-party libraries, images and huge amount of static data can all influence your application bundle size. This can cause unexpected high loading times, which may lead to a bad first site impression. React.Lazy and React."
slug: "faster-react-page-loads-with-lazy-and-suspense"
categories:
  - "blog"
cover_image: "https://mariusreimer.com/images/holger-link-K7yZ-CsDvRU-unsplash_s.jpeg"
---

Third-party libraries, images and huge amount of static data can all influence your application bundle size. This can cause unexpected high loading times, which may lead to a bad first site impression. **React.Lazy** and **React.Suspense** are common techniques (as of mid 2020), to perform code splitting for bundle size reduction and speeding up page load. In this article I want to show quick you may add code splitting to your React application, highlighting the differences in performance (Lighthouse benchmark/check).

## The base application

The idea is that we have a React component, that just displays some static data from a JSON file. I have chosen the [programming-quotes-api](https://github.com/skolakoda/programming-quotes-api "https://github.com/skolakoda/programming-quotes-api") in order to have some data that makes sense. This data is not being fetched at runtime, but put into a local JSON file, which means it will be bundled into the application. To make the data a bit bigger, I have duplicated its content.

The app boilerplate was created by the common `create-react-app` tool as described [here](https://reactjs.org/docs/create-a-new-react-app.html "https://reactjs.org/docs/create-a-new-react-app.html"). From there on, I have created a React component, call it `VeryBigJokesList`, that displays the static content.

`gist:reime005/f175e4a7a3bbe173e48c4d2160a17f81`

## The non-lazy (eager) case

Usually, I would just import the `VeryBigJokesList` component and render it in the `App` component, created by the boilerplate.

`gist:reime005/08ca0e6821d635ad0fa4cc25d5a6260a`

This causes to the user load all content from `VeryBigJokesList` when loading `App`, since it will be "placed" in the same final bundle. When building the application via `yarn build` or `npm run build`, you will see a list of all bundled files of your application.

![](/images/Screenshot-2020-07-26-at-14.40.47.png)

As you can see, the main bundle is yellow highlighted, indicating that its size may be too big. This makes sense, since the JSON data that `VeryBigJokesList` includes is roughly this size. When running a Lighthouse performance check, you should also see some loading specific issues.

![](/images/Screenshot-2020-07-26-at-14.40.07.png)

## The lazy case

When planning to use [React.Lazy](https://reactjs.org/docs/code-splitting.html#reactlazy "https://reactjs.org/docs/code-splitting.html#reactlazy"), you mostly need to consider the fact that `VeryBigJokesList` is being exported via `export default` and is put as a child (of any depth) of a React.Suspense component. Suspense allows you to render a fallback component (like a loading indicator), while its content is loading.

`gist:reime005/b07417a087bfee006b5b579e2f8bd0bd`

Adjusting `VeryBigJokesList` to load lazily was rather simple. If everything worked well, you should see a loading text, before the list is displayed. When building the application, you should also see a difference.

![](/images/Screenshot-2020-07-26-at-14.42.09.png)

The main bundle size has decreased dramatically, since the static JSON content has moved to a different chunk of the bundle. When running a Lighthouse performance check, you should see a difference in loading times.

![](/images/Screenshot-2020-07-26-at-14.32.40.png)
