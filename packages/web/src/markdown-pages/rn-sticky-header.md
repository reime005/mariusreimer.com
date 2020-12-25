---
slug: "rn-sticky-header"
date: "2020-12-25"
title: "Sticky Scroll Headers in React Native"
description: I show how to create simple sticky scroll headers only with React Native core components.
tags: react, reactnative, javascript, typescript
cover_image: https://mariusreimer.com/images/rn-sticky-header.png
---

Some apps have a special behavior, as you scroll their content. You may call this **Sticky Header**. This means a list's feature of keeping a specific item sticked to its top, until the next sticky item is scrolled over. The use case in general could be a `ScrollView` that has specific sections or categories that you want to keep sticky.

`youtube:https://www.youtube.com/embed/11g_R85G5E8`

Luckily, the `ScrollView` component from core React Native has this feature already implemented. It is called [stickyHeaderIndices](https://reactnative.dev/docs/scrollview#stickyheaderindices) and accepts an "array of child indices determining which children get docked to the top of the screen when scrolling".

But first, we want to define the code for the scroll view items. It is a simple wrapped `Text` component, with larger font size, color and margin.

`gist:reime005/d91f00d8ce0890c0fc17fc96140e0887`

Now, we have to define the `ScrollView` component. You will see that it has the prop `stickyHeaderIndices={[0, 3]}` which means that the first and fourth element will stick to the top of the list when scrolling.

`gist:reime005/ac4962a3208035b0dcdbd3ee24e67a1d`

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on December 25, 2020.
