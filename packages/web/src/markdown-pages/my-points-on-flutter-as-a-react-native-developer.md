---
title: "My Points on Flutter as a React Native Developer"
date: "2019-05-12"
description: "I spent some days with Flutter, a new toolset for building hybrid mobile apps in the Dart programming language. Since I have quite some experience with React Native, I will compare these two frameworks and give my opinion on both of them."
slug: "my-points-on-flutter-as-a-react-native-developer"
categories:
  - "blog"
tags:
  - "flutter"
  - "javascript"
  - "react"
  - "react-native"
cover_image: "https://mariusreimer.com/images/raquel-martinez-96648-unsplash-copy.jpg"
---

I spent some days with Flutter, a new toolset for building hybrid mobile apps in the Dart programming language. Since I have quite some experience with React Native, I will compare these two frameworks and give my opinion on both of them.

`gist:reime005/dfa171afec1634f081b27d0071227a55`

As you see in this table, I made a rough comparison between the two frameworks, to give you an overview of my thoughts. In short: As a pure web developer, it currently makes more sense to rather start with React Native than with Flutter, because of its similarities regarding programming language and styling / layout. Flutter has a great developer experience including debugging and building block integration, for things like navigation or testing.

## Getting Started & Documentation

One of the most important things when you get started with a new framework is its **setup**. Especially for less experienced developers it matters quite a lot, how much time you have to spend setting up a development environment, configuring paths, etc. React Native has an easy and straight forward way of doing this, since is relates on the NPM ecosystem. For Flutter I needed to download the SDK, unzip it and add it to my `PATH`.

Another really important fact is **upgrading** your project. No matter if the upgrade only fixes minor bugs, patches security issues or includes new features. This process can get really ugly in React Native, since the framework has a lot of independent sub-dependencies or other things. In my experience this always lead problems, for example that your End-To-End test setup would be broken and you had to wait for the maintainers to fix its project. Also, simply the upgrade process itself could get ugly in terms that new config files were needed that you just missed ([rn-diff-purge](https://github.com/react-native-community/rn-diff-purge) should help with that). Flutter has a really straight-forward upgrade process. You should only need to run `flutter upgrade` and that's it.

To get started with React Native, you can find plenty of **example projects** (my favourite) , tutorials or courses. This makes it easy to get started building things. As in 2019, the community is way bigger than the one behind Flutter.

## Developer Experience

A very big thing when it comes to using a new framework is the developer experience. Not every developer knows everything, and especially not every programming **language**. When it comes to React Native, you will use JavaScript or TypeScript, so it should be pretty easy to get started if you have skills in web development. However, I made the experience that you sometimes need to (depending on the project) work with native code (Java/Kotlin and Objective C / Swift). The reason why could be the requirement to use a very specific feature that is not at all or only partly available as a React Native module. Lastly would mean that you eventually need to fork the repository and create a pull request, which is great from a community perspective. Flutter requires you to use the [Dart](https://dart.dev) programming language which is developed by Google and Lars Bak, who was involved in the development of the V8 JavaScript engine. Dart has a C-style syntax (without pointers) and some similarities to JavaScript. Since Dart can transpile into JavaScript, you could run it in a browser.

As already mentioned before, adding libraries / **dependencies** to a React Native project can be tricky. Sometimes the linking command `react-native link module` can lead to several problems (double linking or only partly). Note that this is not necessarily related to React Native, but rather your project configuration or the module you want to link. So you would need to open the Android and iOS projects to manually link the module. With Flutter, this process feels way simpler. Adding the dependency to your yaml file followed by a `flutter get packages` should be enough. This to be said, there is no node package server that you often have to restart our cache-clean, as in React Native.

Own native or **platform specific code** can be used in both frameworks. In React Native, you would need to create a module that you would link, as mentioned before. The communication between JavaScript and your native module happens via a message queuing bridge and JSON objects. Flutter follows a similar approach, called [platform channels](https://flutter.dev/docs/development/platform-integration/platform-channels). However, I've never used that feature before so I cannot say much about it.

**Hot reloading** is a development feature that allows you make changes and see them immediately while to app is running. This means that the app does not have to restart, which can be really nice especially when developing UI features. Both frameworks have this features, but React Native can sometimes make it difficult to configure. Flutter felt a bit better in this regard. If you ever worked with stateful hot reloading, you never want to work without anymore.

Styling and layout of the **User Interface** is pretty easy in React Native. However, it can still take some effort to make both Android and iOS look pretty. Flutter has a complete different and own approach than React Native. Things like centering a progress spinner can get really interesting in Flutter, in my experience.

**State management** is the definition of how your app handles data and related flows. In React Native, Redux is a very popular library that does exactly that. It helps you centralize your app's state and prevents data mutations that may lead to very hard bug hunting. [Redux](https://redux.js.org) consists of a store with your app's state, actions, reducers and dispatchers. When you click a button, an action is fired and dispatched by the store. The store decides which reducer dispatches this action. A reducer then simply takes the current state of your app, does something with it (depending on the action) and returns a new state. On this way, the state stays immutable. Since Flutter also supports Redux, state management can be quite similar.

When you do requests to a server, you often have to work with **JSON** data. In React Native, you can make use of the built-in JSON parse and stringify support. This was a very big disadvantage when I worked with Flutter, since I had to write these transform function by myself.

**Debugging** is a feature that should be a must for every framework. It helps you analyze issues in your application by stepping through the source code and optimally shows as much state information as possible. Both frameworks have debugging built-in. In React Native you have the fact that while debugging, the JavaScript code is executed in the browser's engine, which means performance can differ. Also, I made the experience that it is very hard to get debugging to work with React Native, when some dependencies slow down the process. Flutter has a very good debugging integration and I even managed to fully debug an app straight from VS Code. This is a huge advantage in my opinion.

When it comes to **testing**, configuration can get ugly in React Native. Sometimes, the test runner's transformation broke at some point (code could not be transpiled), and you have to know why it happens and how to fix that. This often includes adding or removing babel plugins / presets, which can take some time figuring out. I have not done much testing in Flutter yet, but it seems to work well. You probably don't need to worry too much about configuring your test suites. Keeping tests simple is always a good thing, and nobody wants to worry about that.

## Performance

React Native and Flutter are both better in terms of performance, compared to other frameworks that rely on a WebView. React Native renders native views instructed by your JavaScript code that it receives via a bridge. This also has the benefit that you could potentially provide app updates over the air, so that only your app's JavaScript bundle(s) are updated without having a app store process in-between.

Flutter is different to React Native in terms that in has its own rendering engine. Since there is only a thin layer of C/C++ code, everything else is written in Dart, which gives developers more control and better performance. Flutter might be a better choice than React Native in terms of performance.

## Conclusion

Both Flutter and React Native are great frameworks for developing high performant mobile apps in one programming language. As of now (04/2019), it is difficult to make a decision on which one to choose. If you come from a web developer world, it will be easier to get started with React Native. Otherwise, if you are an Android or iOS developer, Flutter might be perfect for you. If you have a majority of JavaScript developers in your team and you don't have the capacity to switch to Dart and Flutter, React Native might be the better choice for you.
