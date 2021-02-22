---
title: "Tinder Swipe in React Native"
date: "2020-09-06"
description: "Tinder is a dating app that shows you profiles as a card stack. You drag and swipe the card left in order to dismiss (nope) or swipe right in order to agree (like) the other person."
slug: "tinder-swipe-in-react-native"
categories:
  - "blog"
tags:
  - "animations"
  - "javascript"
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/thumb_small.png"
---

Tinder is a dating app that shows you profiles as a card stack. You drag and swipe the card left in order to dismiss (nope) or swipe right in order to agree (like) the other person. I will describe how to implement these animations in a React Native app.

The source code can be found [here](https://github.com/reime005/react-native-tinder-demo "https://github.com/reime005/react-native-tinder-demo").


`youtube:https://www.youtube-nocookie.com/embed/goZrjnemJgU`

## In Short

- `react-native-fast-image` for better performing images
- Render 2 images, where the front image is actively animated, and the one behind (next on the stack) static
- `PanGestureHandler` for tracking drag movements
- Change of position (dragging) of the image via `translationX` and `translationY` transform property (on active pan gesture)
- Rotation of the image via `rotationZ` transform property. Gets closer to 20° the further the image is to an edge, tracked via `translationX`
- Swipe end animations via `spring` where the destination can get back to initial, or far over the screen to the left/right

## #1 The Basic App

Since the app is based on React Native, we can quite easily specify the user interface. The most critical component is the image view, here showcasing random (static, not fetching anything) picture from Unsplash's [flower category](https://unsplash.com/images/nature/flower). In the end, these pictures will be hold in an array, and an `index` will be used to track the current (and next) image shown. I call it "Card Stack", since it will render two images behind another.

In order for the image stack to render correctly, you may later need to adjust the `zIndex`, `elevation` and `key` props of the animated component. The latter prop may be especially critical here, if you run into render performance issues. That `key` prop is used by React to tell whether or not to re-render a specific component, which means it must be unique. You can read more about the `key` prop [in React's docs](https://reactjs.org/docs/lists-and-keys.html#keys "https://reactjs.org/docs/lists-and-keys.html#keys").

## #2 The Animation Setup

We need some kind of tracker that allows us to decide whether the card should be moved or swiped in a certain direction. Also, the "like" and "nope" label boxes and rotation of the image card should be rotated and displayed according to the swipe direction.

For the animation in React Native we will use `react-native-reanimated` (v2). It provides a `PanGestureHandler` for dragging movement gestures. It has an "onStart" callback, that is triggered when the finger (or multiple) has been placed on the screen. From there on, we know that the animation (movement of the finger / dragging) is running. Also, we can keep the initial touch coordinates. These are useful for tracking and calculating the distance that the image has moved, via the "onActive" callback.

When the finger has been released, the "onEnd" callback will be fired. From there on we can decide whether to swipe/snap to the right, left or "jump back" to the initial positions. For the left/right decision we specify a threshold of 40 percent of the screen's width. In relation to the initial x touch coordinate, we can calculate the absolute distance (in px) we have swiped. For example if you swipe to the left, the distance will be negative (since 0 is in the screen's center).

The **Spring** animation performs a movement from a to b with the option to specify physical properties, like velocity or mass. This is pretty useful for the three swipe/snap movements described before.

`gist:reime005/53626b084900dd7e72a93e391f020367`

The **Interpolation** animation allows us to map a specific value from a range (input range) to an output range. For example, in relation to the distance in x (translationX) from 0 to half the screen width, we can rotate the image by up to 10 degrees (z axis).

By extending the interpolation, we can use the same call for both directions, meaning left and right swipe. This also means, that the z rotation would extend over 10 degrees. That is okay, since the image card would also be out of screen.

`gist:reime005/91a96e77c48c9820612655fa3599ea98`

When putting it into code, it would look like the following. Note, that the `-1` relates to a different angle, depending on where the user dragged the image from. If they touch the upper part, the rotation would be the opposite to touching the lower part.

`gist:reime005/cc5ef097b038a60a7e85d9bb4dabf3bf`

Styling the actual `Animated.View` plus using `useSharedValue` requires using `useAnimatedStyle`. This can be easy to mismatch.

`gist:reime005/15c13df8219746df4f49001b3258f442`

## #3 The Final Swipe Part

As soon as the user swiped a certain amount to the left or right, a specific animation will be triggered. This will lead to a chain of different actions. The card image must be swiped out of the screen, to the respective direction, via `spring`. After that, the next image(s) must be toggled. Finally, the position must be reset. While the spring animation to move the card out of the screen is running, we don't want to toggle the next image right away. Instead, we wait for 300ms, using `setTimeout`.
