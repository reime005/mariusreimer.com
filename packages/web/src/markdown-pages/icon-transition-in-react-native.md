---
title: "Icon Transition in React Native"
date: "2020-12-11"
description: "A transition is a change of one view state into another. The react-native-reanimated library provides a simply way to perform transitions."
slug: "icon-transition-in-react-native"
categories:
  - "blog"
tags:
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/ts4-1.png"
---

A transition is a change of one view state into another. The react-native-reanimated library provides a simply way to perform transitions. In combination with react-native-svg, you could create a simple icon effect, like filling a heart icon.

The source code in action can be found [here](https://github.com/reime005/ReactNativeTikTokComments/blob/master/src/components/CommentsButton/ToggleIcon.tsx).

`youtube:https://www.youtube-nocookie.com/embed/Bd_XlpQHDk4`

You could achieve the same effect using basic animations, but transitions can make it more easy by triggering multiple animations at the same time or in sequence.

`gist:reime005/d0d1089f2de6e2a3827206a4a35a1639`

A click on the icon toggles the view state, as well as transition change. The transition itself consists of a combination of scaling and easing.
