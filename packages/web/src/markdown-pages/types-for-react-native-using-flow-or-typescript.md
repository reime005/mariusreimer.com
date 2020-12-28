---
title: "Types for React Native using Flow or TypeScript"
date: "2018-12-03"
description: "React Native is a library that enables mobile developers to build native apps mainly for Android and iOS using React. This has the advantage of having one team working on one product, rather than two teams working on one product."
slug: "types-for-react-native-using-flow-or-typescript"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
  - "types"
cover_image: "https://mariusreimer.com/images/cody-davis-253928-unsplash.jpg"
---

React Native is a library that enables mobile developers to build native apps mainly for Android and iOS using React. This has the advantage of having one team working on one product, rather than two teams working on one product. Permanent communication between developers may result in extremely bad productivity, since your focus is interrupted. In React Native, your app will include a `jsbundle` file that describes how your app will be rendered and behave (business logic).

One of the biggest drawbacks (or the one of the best things) about JavaScript is its weakly / dynamic type system. The common error message `TypeError: 'undefined' is not an object` or `TypeError: 'undefined' is not a function` probably happens to every JavaScript developer sooner or later. This is why a language like [TypeScript](https://www.typescriptlang.org) (TS) was created. The syntax and semantic is mostly the same as in JavaScript. TypeScript has one big aspect that you have to know: It compiles to JavaScript code that is supposed to run in any runtime engine that supports ECMAScript 3 or newer.

Using TypeScript in a React Native project [is possible](https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native). Since React Native version 0.57 with the Babel compiler 7 is out, it has built-in TypeScript support. Also, Expo, a key successor and toolchain built around React Native, has announced to [move away from Flow to TypeScript](https://blog.expo.io/expo-for-professionals-218b7937fafb). I personally set up a React Native project with TypeScript and it looked and worked pretty well. The configuration happens using a `.tsconfig` file. One point of TypeScript is the object oriented flavour, other than flow, which has a more functional approach.

In React Native you have to notice that your JavaScript source code is bundled. This is done by the [metro bundler](https://facebook.github.io/metro/docs/en/concepts). The Metro bundler resolves all modules and dependencies that are required for your app, transforms them (transpiling using Babel) and serializes the result into one big jsbundle. If the transpiler does not support TypeScript, it would mean your code has to be transpiled into JavaScript first, before the transformation can happen.

Flow has been widely supported by React. The React flow type definitions feel pretty good. Eslint plugins for IDEs provide static analysis possibilities, which means you could also do things like flow type coverage. It is based on the Babel compiler, so the integration in various toolchains is very good since most React projects already integrate Babel. In addition, an eslint plugin can automatically format your code on file save. One thing about flow is that you have to configure it correctly (same as in TypeScript of course). In my case (I've been using VSCode), I had issues since the IDE has TypeScript already built-in. You could deactivate it, but it did not help. In the end the issue was a version mismatch between the version defined in `.flowconfig` and the locally/globally installed ones. I personally use flow in React Native projects and it works pretty well. Sometimes you have to declare library methods that have no flow type definition, as you can see [here](https://github.com/fbsamples/f8app/blob/master/js/flow-lib.js).

My opinion about the two type systems is that if you don't use any type system, it is better to use any than none of them. If you come from an Angular/TypeScript world and are used to it, you could stick to that. When your project uses an old React Native version and the upgrade will not be that easy, use flow. In general, flow feels more like an 'enhancer' of JavaScript rather than being a new language system like TypeScript. This is a big plus point in my opinion. In the end you source code will be transformed/polyfilled anyway, so this does not really matter.
