---
title: "Structuring your React Application"
date: "2019-08-17"
description: "One of the most important and possibly difficult aspects of developing a real-world application is the project structuring. How you organize your components matters in terms of maintainability and reusability which are part of a high quality software."
slug: "structuring-your-react-application"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
cover_image: "https://mariusreimer.com/images/guillaume-bolduc-T1U_MKfLnZo-unsplash-copy.jpg"
---

One of the most important and possibly difficult aspects of developing a real-world application is the project structuring. How you organize your components matters in terms of maintainability and reusability which are part of a high quality software.

> _"Quality means doing it right even when no one is looking."_
>
> Henry Ford

You and your team should have a clear vision on how your project will be structured. Deciding this in the beginning of your project should be essential. Otherwise, not just code reviews might take longer than necessary.

There are different ways of structuring your React app. It can be useful to look out for an example of a real world app that fits your tech stack. For example, you may use [MobX](https://github.com/mobxjs/mobx) instead of [Redux](https://redux.js.org) for state management.

## A Simple Project Example

Let's consider the following abstract web application, which is separated into a `<Header />`, `<ShoppingList />` and `<Footer />` component. The footer itself contains a collection of menu links and social media buttons. These are called `<InfoLinks />` and `<Social />`.

![Abstract Website Component Separation](/images/website.png)

Please note that this is just an abstract example. A real world application is often more complex. In all structures, the source code is hosted in the `/src/` folder. Some people also name it `main`, `app` or `lib`.

![](/images/Screen-Shot-2019-08-17-at-4.28.52-PM.png)

Project Structuring By Separation And Purpose Naming (my preferred version)

Since React is all about components, they are hosted in a separate `src/components/` folder. They should be written as clear as possible (not too much code) and should not have too many dependencies. In a very simple project you may even put all the code in one folder.

**Nested components** contain one or more custom components. The Footer has two of them. There are two ways of hosting them: either in `components/footer` or separately in `components/`. If you decide on doing it the first way, you may end up with a very deeply nested project structure. If you do imports like `import { Button } from '../../../../../button'`, it might indicate that you already have a too-deeply nested hierarchy. If you don't use the deeply nested variant, you may care about component reusability.

Please note that it is also possible to have project structures like `components/footer/infolinks/InfoLinks.ts`.

![](/images/Screen-Shot-2019-08-17-at-4.30.34-PM.png)

Project Structuring By Nesting And Index Naming

**Naming your components** should also be quite consistent. There are two styles of naming:

- `Footer.ts`: Has the advantage of better usability in an editor (IDE) and being able to put it in one folder with other components.
- `index.ts`: Has the advantage of acting as the "default root import" of a folder, for example: `import Footer from '../components/footer'` (must be default exported then).

Some notes that can be helpful when naming your components:

- Rather use general names like `InfoLinks` rather than `FooterLeftLinks`. Try to be generic, so that you may reuse components in multiple places
- Make the names depending on their use case (like `ShoppingList`) rather than `ShoppingScrollViewList`
- Shorter names are better than longer ones (rather relative)

**Using containers** is the convention of separating the actual view-component from the connected-model-component. Sometimes it is very helpful to do this separation, especially if you use something like Redux. For example, it might be possible that you use one component in two different places; with and without Redux. In my experience this can be helpful if your app has a mocked (Sandbox) version, if you **test** your component without a configured Redux store.

## Conclusion

Many different ways lead to a working product, but only a consistent one leads to a maintainable product. You will probably use a complete different way of structuring your app. Things like reusing your code across different frameworks (like React, React Native, Electron) may affect your decision. Probably the best way is to research how others do it and then to check if this is still considered state of the art.
