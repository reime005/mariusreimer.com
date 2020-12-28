---
title: "What I learned from 2 years with JavaScript and React"
date: "2019-03-10"
description: "React does not have a strict architectural pattern. This is the point where it got interested. If you don't have any pattern to follow as a software engineer, what do you do? You simply chose whatever you want."
slug: "what-i-learned-from-2-years-with-javascript-and-react"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
cover_image: "https://mariusreimer.com/images/dan-gold-195891-unsplash-copy.jpg"
---

I'm a software engineer. I come from a Java world. So when I was bored, I hacked some side projects. The problem was, that I had to chose a language plus library/framework as a building block. I know that I also worked with python a bit, but that was nothing I would use to make frontend stuff.

Especially because I've been working a lot on mobile apps, I decided to give React Native a try. Since that was in the beginning/mid of 2017, the library was relatively young. And I never really worked with JavaScript before, except one small 'integrate bar charts' site thing. The good thing about React in general is, that the learning curve is great - it is very easy to learn. In this article I will roughly describe the experience I made with focus on React in the last years, also some small code snippets to make it a code article.

## React

I come from a model view controller kind of development world. This also includes, that the development style was very object oriented. So completely different than JavaScript and React. I would describe React as a simple, easily to learn and extendible **library** for building User Interfaces in JavaScript. Very important to add here is that since React is not a framework, you may have to include additional modules for your use case. For example, adding navigation or state management to your project, or simply just a component library to have nice-looking buttons.

Usually, when you create software, you use an architectural pattern to have a common structure and solve your problem. Furthermore, I would also add the term design patterns to that, which help you solve problems for a specific context of your architecture. A very common architectural pattern is the **Model View Controller** (MVC). In short, this separates the view part from the control (user input) and model part (main logic), so that these three decoupled components can take the benefits of code reusing and parallel development. Angular, for example has an MVC-like structure.

React does not have a strict architectural pattern. This is the point where it got interested. If you don't have any pattern to follow as a software engineer, what do you do? You simply chose whatever you want. If you want to build a small website one-pager thing, you usually don't wan to think about separating your components and stuff. With React, you have a simple library that provides you with basic instructions for building a User Interface.

Another very cool thing about React is its wide-spread alternatives. You learn the concept of props, state, lifecycle / rendering once, and you can basically build any major web app you can think of. For building native mobile apps there is React Native and [Electron](https://electronjs.org/apps) could be used for desktop apps (that's how Slack is built). Thus, the learned concepts can be reused, or even code shared between projects.

You could now think that React is a glue-together kind of library. That is not completely true (or not necessarily bad). React uses the JavaScript and XML (JSX) style. In short, this means your HTML code will live alongside the JavaScript code (same file). That sounds strange first, but is kind of awesome when you got used to it. So that would basically mean that your view, controller and model may be in one file/component. If your application stays small, everything might be fine using this approach. But if it gets bigger and bigger and more people start working on the same codebase, things get interesting.

### Project Setup

Before you do any project that should make it to a real product or you work with more than just yourself on it - set up your project correctly. This involves finding the right toolchain that has what you need. This could include a process for executing tests, building production/development builds and optimally also linter integration.

#### Setup Linter before you start in a team

That is something I definitely learned when I worked with multiple people in a JavaScript project. Besides proper documentation, a good setup for preventing access to undefined variables is a must in my opinion. If you use TypeScript rather than JavaScript, most of these things should already be setup.

Linters assure that the code you've written always looks the way you want it. [Eslint](https://eslint.org) is a very popular linting utility for JavaScript, that you configure for your project's needs. The great thing is that once you have set that up, you may use IDE plugins that automatically checks your code and gives you hints/errors/warnings if the code does not apply to a rule. Also fix linter errors on file save is a good idea. If you combine the linting processes with git-hooks, you can assure that the project's source code has a certain quality standard.

#### Use Types when you work in a team

Even if you don't work in a team, coming back to your code after months of not looking into it - do you still know what you did? Especially in JavaScript, I mostly don't. That's where Types may be very helpful.

In JavaScript, there are things like [Flow](https://flow.org), that function as a **static type checker** for your project. Static type checking means that errors are found while coding, but it could theoretically still miss errors that you don't know about (in deep nested objects for example). In addition to that, there are **runtime type checkers** like [PropTypes](https://github.com/facebook/prop-types) for React that will catch some more errors on runtime (but only for props!), which is interesting for testing.

TypeScript has, compared to Flow, a lot of things already configured upfront. That does not necessarily mean Flow is better or worse than TypeScript, but I made better experience with TypeScript. It 'forced' me to write Type definition for most things, which was not the case for Flow (maybe I configured it wrong). Also, Flow sometimes consumed a lot of battery life on my MacBook, which completely concurs with this [great article](https://levelup.gitconnected.com/flow-vs-typescript-in-react-my-two-cents-d4d0c657d236).

#### Code Reviews > TypeScript

In general, adding types to JavaScript is a good thing, especially since it catches some errors upfront and does most of the documentation for your code (see [typedoc](https://github.com/TypeStrong/typedoc)). Interestingly, if you read the study about _['To Type or Not to Type: Quantifying Detectable Bugs in JavaScript"](http://earlbarr.com/publications/typestudy.pdf)_, which I found in [this awesome article](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b), **around 80% of bugs are not detectable by TypeScript**. Type errors make up around 20% of bugs in your project (on average), the rest is mostly related to specification errors! So in conclusion, TypeScript (or other JavaScript type additions) will not be enough to catch all errors (or even half) in your code.

Code reviews and test driven development (TDD, write test before you code) and event pair programming, may resolve up to 80% of common bugs. Another interesting statement of that article that I recommend to read is, that **[an hour of code review saves 33 hours of maintenance on average](http://www.ifsq.org/finding-ia-2.html)**. I made similar experience that by reviewing (your own) code together with a college lead to a huge amount of bug-findings.

#### Project structure

It is really important that you decide how your project structure should look before you start the project (makes sense). Especially when you work in a team. In my opinion best practices for that should be documented somewhere, even if it's just in the readme file. There are more things that I've questioned myself some time:

- Naming the file Dashboard.js or index.js and just place it in a components/Dashboard folder?
- Have a logical file structuring like src/components src/container src/config or more behavioural, like src/usercontrols src/adminelements src/utils
- When writing tests: E2E tests are usually placed in the projects root/e2e folder or similar. But what about unit- and integration test? Put them into a \_\_test\_\_ folder under src/ or in the hierarchy of the tested element?

In general, boilerplate code or example projects can help with choosing a project structure. I personally like naming the files as its component name, similar to Java.

### Testing environment

In general, more testing gives you more confident that your system has less bugs. There are different levels of testing, starting from unit- and integration tests, up until End-To-End (E2E) and acceptance tests. I wrote an [article about E2E testing in React Native](https://mariusreimer.com/2018/11/react-native-end-to-end-testing/). I would like to share some of my testing experience here anyway.

In general, unit tests are helpful for having confidence that your recent changes did not break a part of your app. User Interface testing is often difficult, since they require a lot of work to configure and maintain. Also, they just don't work really well. But having them is always a good thing.

One of the most common bugs in my last projects was trying to access undefined variables. This could have been prevented by using any kind of type addition, or correctly setup linters.

Most of the bugs are not preventable of course. Let's say you decrease the minSDK build version for your Android app, since a new library requires/recommends that. But what you forgot is that your app must have a specific minSDK version, leading to a build that will not run on every device. This could been prevented by letting your changes be reviewed by a different person, or even together (peer reviews). Pull requests are a very common technique here.

### Continuous Integration and Continuous Delivery

Most of the time, developers have to do recurring tasks for a release. This often includes things like running tests/linters, bundling, acceptance tests and uploading. Without question this takes times and nerves, but can be minimized by using external CI/CD services. For sure you can get a DevOps Engineer who sets that up to you, but often this requires a lot of time and experience. An exception would be that you handle privacy sensitive data (your customers trust you) and thus must do it on your own.

## Redux

When the project gets bigger, you could (should) add a library that enables unidirectional data flow for your application. One very famous pattern for that is [Flux](https://github.com/facebook/flux). Since it is just a pattern, you can chose from different library implementations like [Redux](https://github.com/reduxjs/redux) or [MobX](https://github.com/mobxjs/mobx). I personally only worked with Redux in the past and it is really great after you got used to the core concepts.

The most important concept of redux is its one-way (unidirectional) data flow. This is very interesting, since you will not have any duplicate states in your application, but rather a single source of truth. You could now think that this can be done by binding the data to the function that need it, or whatever. This is for sure a very good point, so in relation you could also build a house without an architect. If it is a small house like a garden thing, everything might be okay - but the bigger it gets, the harder it is to maintain.

Also, testing will become easier with redux compared to managing state on your own. This is because there are defined processes for where the state changes, in the sense that only specific methods (actions) can mutate the state. The state is part of your redux store and can be separated into different parts. Let's say you want to have app/settings and app/userProfile separated. This makes sense, especially since one reducer only has access to that particular sub-state.

### Redux middleware

Redux middlewares are configured 'between' your app and the redux store to do things. One thing could be to persist parts of your store so that your app is capable for offline usage. Another thing, which definitely makes sense is a logger middleware (redux-logger). With that you can see which action has which impact on your store, including timestamps and state differences before/after the action was dispatched.

Now that managing the app state is handled, what about handling side effects, like simply fetching the user profile after they got successfully authenticated with the server? This can be done by using a redux middleware like redux-saga or redux-thunk. In short, in gives you a way of fetching data, view data of the redux store and firing redux actions to change the store/state of your app. All that could also be done in the app components of course, but sooner or later your code will become a mess and not testable anymore.

To conclude that: you can not (and should not) make calls to a server or similar in a redux reducer. A redux action is dispatched by a redux reducer, which then does changes to its store without waiting seconds for a server request to be resolved. That's what a middleware is for.

## Async/await

One thing many JavaScript developers like is the async/await syntax that highly improves readability of Promise.then() statements. Especially when you have nested then() statements, it can be quite helpful to use async/await. I don't want to explain how async/await works, there are many great article out there that does that.

`gist:reime005/d340ab32111b0f1dd756bdb33139415a`

The interesting thing here is that the resolving of these three promises only take about 1 second, its highest timeout. Sure, this is not related to async/await but Promises. What I learned recently is that you can use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), which resolves when all passed promises have resolved.

## Rest Spread Operator

The rest **spread operator** let you extend objects and arrays or simpler: concat them. The operation will create a new object or array:

`gist:reime005/91145c98706bd06cd5ea94bbfe00121e`

Another example is extending objects. The important thing here is, that you don't forget about deep nested objects, otherwise they will be overridden:

`gist:reime005/37767939e7b8179162797d546253f0c5`

This should not be confused with **rest parameters**, that have the purpose of collecting all remaining parameters passed to a function into an array:

`gist:reime005/ff9a3dc8f294f9691782cc9b27e6b87f`

This method simply takes parameters, that will be transformed to an array and returns the sum of its values.

## React Performance

React has a component lifecycle, which is very important to understand if you want to get the maximum performance out of your application. React native has some special things to consider, because it obviously needs to communicate with the native side (iOS or Android) via a message-bridge, so everything is kind-of serialized from JavaScript into JavaScript Object Notation (JSON) and interpreted by the native side. But I'm not going into detail here.

The react component lifecycle is very [well documented here](https://reactjs.org/docs/react-component.html) and describe the different events that happen around the DOM and a component.

The most important method is render() which does exactly what is says. It is called when the props or state have changed. So it only evaluates (not changes) the values of this.props and this.state and returns an element to be used in the DOM.

[This article describes](https://medium.com/@arikmaor/react-redux-performance-tuning-tips-cef1a6c50759) many must-known things about React (and Redux) performance. One of the most common things that I also ran into was binding methods. React uses shallowCompare (in its render() method). This means every key is checked for strict equality. If you follow that, if even just the ref of an object changes, the objects are not equal. This is the case for functions and array, so they create new refs every time:

`gist:reime005/1168d15b46c896f759d8da3f54bfdded`

What you can see is that functions and arrays are never 'equal', since there is always gonna be a new one created, so the 'internal reference' differs. And here it does not matter if you do a strict equality check as I did or the weak one (==). That is because we do not 'downgrade' any type as we would do if we would check for example (42 == '42'). [Immutable.js](https://immutable-js.github.io/immutable-js/) can be very useful in these cases.

Actually the reason behind this 'creates a new object' is, that you have to be careful when you do this. If you create new functions every time the render() method is invoked (which I think could potentially happen 60 times per second), this might kill performance. That is why you **bind functions to the class/component in the constructor**, so that will not happen. If you try to access state or props from a function that is not bound to **this**, it will result in an error (obviously because **this** is unknown).

This also counts for subscriptions / observations to state changes when using redux. Let's say every time the state of your app changes, you filter, map and reduce an array of this state. Each time you do that, you create a new array. Especially if this array has not changed, you create unnecessary work, leading to work for the garbage collector, leading to eventual memory leaks, bad performance and so on.

In addition to prevent the creation of new objects or function calls in the render() method, you can also prevent that method to be invoked, using [shouldComponentUpdate](https://reactjs.org/docs/optimizing-performance.html). Another big thing is the understanding of the [setState](https://reactjs.org/docs/react-component.html#setstate) method. Most important is that it does not immediately change the state of the component, but rather gives a request to it - which can be delayed, batched or whatever by React. You can still react to changes of your state by using the setState callback or [componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate).

### React Native and Performance

As I already mentioned, I will not go too detailed into React Native in this article. React Native in general is great and I've built many apps with it already. Many people complain about its errors that pop up when working with integrated modules or upgrading something. I've experienced that too, but after some time you know how to work with it and it gets easier. It helps when you've worked on multiple different native modules in react native.

Another thing people may complain about is the performance in react native. Apps like games or just computationally intensive ones may not be the most performant ones. The reason for that is react native has a message queueing bridge that is used for all kind of interaction between the native- and JavaScript side. It is also recommended to develop your App for Android first, since iOS is mostly easier in terms of integration of modules and performance.

There are many different reasons why your react native app is slow and also many ways to debug that. I guess most of the times the app uses the bridge too extensively. With what I mean that rendering is triggered too often, too much data is passed over the bridge, too many listeners in the background or whatever.
