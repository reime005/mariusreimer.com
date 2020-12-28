---
title: "Redux Essentials"
date: "2019-08-26"
description: "Redux is a Library to centrally manage the state of your application. Due to its unidirectional data flow, predictable, reproducible and thus testable applications are possible."
slug: "redux-essentials"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
cover_image: "https://mariusreimer.com/images/redux.png"
---

Redux is a Library to centrally manage the state of your application. Due to its unidirectional data flow, predictable, reproducible and thus testable applications are possible.

You can think of it as a global, generic container that contains a state and a bunch of specific, self-defined functions. Only these functions are allowed to change that state, thus there will never be more than one value for a specific use case. Immutability is the important key concept there.

## Immutability

In short, Immutability means that an object cannot be changed once it is created ("burned into memory"). The opposite of that is mutabilty, which means that you actually can change the object (mutate it).

One benefit of Immutability is predictability, meaning that you can predictably say how an object changed over the past. 

Another benefit (there derivate more, like memoization) is concurrency, meaning that you can share an object safely between two different entities (processes, threads, users,...). This prevents changing an object while someone else is using it, which relates to predictability.

Redux uses Immutability for changing the state based on actions. This brings benefits like the already explained predictability, as well as extendabilty by addons or storing your application state for a better developer experience. For example, you could save a lot of time in your development process by simply persisting your state and rehydrating them when rebuilding. One example for such a Redux addon is Redux saga, which enables app side effects such as requests or other long running, asynchronous operations.

In JavaScript, you could simply use `Object.freeze(foo)` to make an object immutable. Libraries like [immutable-js](https://github.com/immutable-js/immutable-js) could also be used.

It is important to understand the core concepts of Redux. They are also very good described on their [website](https://redux.js.org/introduction/core-concepts).

## Concept #1: Store

The most crucial part of Redux is its store. It contains a state, that cannot just be modified from outside, but read. The way you modify the state (or parts of it) is by dispatching actions to the store. This also means there is some kind of dispatcher function "included" in the store.

Configuring the store includes defining an initial state, reducer functions (that may be responsible for separate parts of the state) and middlewares. Once configured, you usually pass the store to a [Provider](https://react-redux.js.org/api/provider), that is wrapped around the part of your app that needs Redux. You could also define multiple stores. With React Hooks in combination with the React [Context API](https://reactjs.org/docs/context.html), you may have a really nice [state management solution](https://github.com/ctrlplusb/easy-peasy).

## Concept #2: Actions

An action, like a click on a button, is an object that has to be dispatched by Redux and then consumed by a reducer or Middleware. This also means that an action can look like however you want to. Usually, it contains a unique type and optional payload with data.

## Concept #3: Reducer

A reducer is a function that takes the current state plus an action and returns a new state based on that action. It should finish that operation quickly, without side effects like requests. You can configure your redux store in a way that specific reducers only access specific parts of the store.

## Plain JavaScript Redux In 50 Lines Of Code

In an interview process for a frontend position at one of the world's biggest e-commerce companies I had the task to write a small web app without using any JavaScript library (Vanilla JS). For managing the state of the application I wanted to use Redux, which was not allowed. So I wrote a very simple class that more-or-less does what Redux does.

`gist:reime005/ac59255663e93012dc0f51dc1375ac7c`

The basic class `Store` dispatches actions to manipulate its internal state. To get notified when the state changed (which can only happen after an action was dispatched), you may subscribe to the store. This helped me to understand the concept behind Redux.
