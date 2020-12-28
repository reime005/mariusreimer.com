---
title: "TikTok Animation in React Native"
date: "2020-12-10"
description: "The TikTok app has a pretty interesting loading animation. It has two horizontally aligned circles that seem to rotate its positions, seemingly in a circle. I wanted to create a similar behavior in React Native."
slug: "tiktok-animation-in-react-native"
categories:
  - "blog"
tags:
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/tiktok-0.png"
---

The TikTok app has a pretty interesting loading animation. It has two horizontally aligned circles that seem to rotate its positions, seemingly in a circle. I wanted to create a similar behavior in React Native. The source code can be found [here](https://github.com/reime005/ReactNativeTikTokComments/blob/master/src/components/Spinner/Spinner.tsx).

`youtube:https://www.youtube.com/embed/HiFhYtRElD0`

Initially, the spinner consists of two colored circles.

![](/images/tiktok-1.png)

As soon as the red circle moves "below" the blue one, its overlapping shape turns into the background color. A similar "black" effect could be achieved by using the [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) CSS property, if you are on the web. However, this does not exist in React Native.

![](/images/tiktok-2.png)

The red circle moves all the way through the blue circle.

![](/images/tiktok-3.png)

At half time, the red circle is left to the red circle. This triggers the back animation, so that the red circle moves back to its initial position.

![](/images/tiktok-4.png)

## The Code

First, we need to declare the shared variables. For managing the animated values, we use the `useSharedValue` hook. This has a behavior similar to `React.useRef`, means that is does not trigger re-render of the component. The react-native-reanimated library uses the JavaScript Interface (JSI), which means good performance due to synchronous JavaScript <--> Native calls.

`gist:reime005/03537de3b3acc5887fd039826833d944`

The following code shows how to change a shared animated value. After the component has been mounted, we start the animation timer. Using a combination of `withRepeat`, `withSequence` and `withTiming`, the timer counts from 1 to -1 and back, in a loop.

`gist:reime005/605da4f5b43b78b877103bed3a660c0d`

Depending on the current time value, we need to change the `x` and `radius` values. The library changes values automatically, means that you do not need to trigger most things, following the declarative concept. However, you need to put those changes (to change animated style or props) in specific hooks. In this example, we only need to change the component's props, so we will use `useAnimatedProps`.

To actually change `radius` and `x`, we will use interpolation. We will simply "map" the input range from -1 to 1 to a specific output range. For `x`, we switch both circle's positions. For the `radius`, we change according to the initial value. Similar things apply to the second circle.

`gist:reime005/d97a3b23988d9365b33e1c972cc62510`

### Animate React Native SVG

In order to change component props via animated shared values, you need to pass the `useAnimatedProps` output to the component. This will only work, when the component is actually animated via `Animated.createAnimatedComponent` and you change native props of native views.
https://gist.github.com/reime005/7228c88cfe4d3baffa7024d2de4c8e38#file-tiktok-spinner-animated-circle-jsx
The circles are now animated, but still need to have the clipping effect. In order to achieve this, we need to define a `ClipPath` mask, that includes both animated circles.

`gist:reime005/6d717be8a4c5499e6718ddeee7f3db2f`

Finally, we will render three circles. First is for the render red circle. The last two are for the green one and its background, which have the same position and size. The green circle applies the clip path. As you might notice, one output of `useAnimatedProps` could only be applied to one component, so the props had to be duplicated. This feels like a hack, but makes sense if you view it from a native perspective.
