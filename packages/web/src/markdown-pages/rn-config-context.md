---
slug: 'rn-config-context'
date: '2021-01-23'
title: 'Typed Config via Context in React Native'
description: I show to create and share typed settings in your React Native App using React Context plus Environment Secrets via react-native-config
tags: react, reactnative, javascript, typescript
cover_image: https://mariusreimer.com/images/rn-config-context-thumb.jpeg
---

![Typed Config via Context in React Native](/images/rn-config-context-hq.jpeg)

Contexts are common in most programming languages or frameworks. They are mostly used to contain and share specific information or functionality across different parts of an application. Sometimes they are used to inject behavior depending on the use case, like testing or production. I explain how I have used React Context to share configuration data across a React Native app with TypeScript support.

In **Android** app development, the context is used to access [application environment specific information](https://developer.android.com/reference/android/content/Context). Things like starting new activities (app instances), services/broadcasts (like alarm clocks) or theme data is handled by that.

In **Flutter**, the purpose of the context property is to [localize the widget](https://api.flutter.dev/flutter/widgets/State/context.html) inside the app's hierarchy tree. With that, you could also perform media queries to get the device size, or to retrieve theme data.

## React Context

In React, same applies to **React Native**, context helps you with [sharing data between](https://reactjs.org/docs/context.html) different parts (components) of your application. It is to say that this has to happen top-down, so you have to **provide** data "early" in your application in order for child components to **consume** that data. This explain the two important concepts: Context.Provider and Context.Consumer.

As docs also state that you should only use React Context for global app information, such as user information or language settings. It generally helps you to share data between different nesting levels. Otherwise, you could pass data via `props` and/or compose different components, so that these components share specific state.

### Frequent changes

Important to highlight is the fact of component re-rendering. You have to be careful about unnecessary rendering of components that consume a context that changes often. This could be solved by context splitting, means that you keep rarely changing data in the global context and create further contexts that only contain specific, frequently changing data.

In this example I used `react-native-config` to add environment specific that I then added to a app config via context. You can then easily put information to the `.env` file and consume that in the app. This could also be combined with a dynamic replacement of secrets for your application, so that you can keep sensitive data in your CI/CD for example. You can see an example in [one of my apps](https://github.com/reime005/SpaceSeek/blob/master/.github/workflows/ci.yml#L35). Please note that secrets will still appear in your application, since they are inside your JavaScript bundle. The benefit is that you can hide it in your version control.

`gist:reime005/807b9cd3a74afe8c94c5ca59690030df`

Since we want to use the benefits of TypeScript, we will create an interface for the shared `Config` data. This will include some arbitrary data and a set of the secrets that we put in the `.env` file.

`gist:reime005/1f5d86e773e72e91345a9ee5ddbe953d`

When setting up the context data, you want to have specified the `initialStore` for passing it to the context creator. From there on, we can export and later use the `Context.Provider` as a component wrapper. You could then export the created context and consume it using `React.useContext` or make it simpler by creating a wrapper hook called `useConfig`.

`gist:reime005/03e8316ade92ddbe6dc278112cca440e`

Finally, on top of wrapping your app in the context provider, you actually create its state and pass it to the provider. That way the context can be used to share the data. There you could also perform asynchronous loading of config data (often called hydration), for example to load changed theme or language preferences from the device.

`gist:reime005/3bb076567f9231cfdc5eda7327f01763`

And finally, you will see the usage of `useConfig` in the `Example` component. This way you can easily access config variables from any component of your React Native app.

`gist:reime005/3b0edb9b283362ae8492b387a3bae523`

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on January 23, 2021.
