---
title: "Animated Search View in React Native"
date: "2020-10-25"
description: "Lately I've been working more with animations in React Native. When it comes to that, React Native has its own API. There are some limitation though, as for example gesture handling or changing width and height of an element."
slug: "animated-search-view-in-react-native"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/Simulator-Screen-Shot-iPhone-11-2020-10-25-at-20.55.44.png"
---

Lately I've been working more with animations in React Native. When it comes to that, React Native has its own API. There are some limitation though, as for example gesture handling or changing width and height of an element. For that,  I can recommend using the [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) library.

`youtube:https://www.youtube.com/embed/l7_CsQY2kUQ`

The source code can be found [here](https://github.com/reime005/ReactNativeSearchAnimated). Note: this example uses react-native-reanimated v2. I will explain the most difficult points I had with this example.

## Libraries that I have used

- for querying data: [Open Food Facts](https://world.openfoodfacts.org) API
- for theming and styling components: [styled-components](https://styled-components.com)
- for icons: [react-native-svg](https://github.com/react-native-svg/react-native-svg) and [feather-icons](https://github.com/feathericons/feather)
- for faster and more performant image loading: [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
- for preventing (race condition) safe fetch: [use-async-effect](https://github.com/n1ru4l/use-async-effect)

## The thing about view positioning in React Native

Some things can be tricky in React Native. As is making your code work the same way on Android and iOS. For example, when applying `zIndex` and absolute view positioning to a component. You may run into problems when attempting to use a scroll view inside such a component. It may not be responsive on Android, but on iOS (as in my case).

I fixed this problem by playing with the `elevation` [property](https://github.com/feathericons/feather) and changing the order of the absolute positioned view. This property not just adds a drop shadow to the view, but also affects its z-order.

## Preventing Fetch Race Conditions

This is not just related to React Native, but to any software product. In fact, when your program relies on a specific order of executions in order to work properly, you may run into race conditions.

For example, take a button that gets pressed by a user. An each click, a request is started and on response, a counter is increased. This could lead to problem, because the counter may increase too often. Another case, specific to React, is related to its life cycle. Specifically when a request is still running, after the component has been unmounted.

`gist:reime005/85db5f2aaf55dfbe8ed05c1c796af0f7`

This code shows how to prevent fetch race conditions. It uses a generator function and cancels requests with the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController#Examples) when necessary.
