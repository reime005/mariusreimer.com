---
slug: "rn-card-carousel"
date: "2021-01-07"
title: "Horizontal Card Carousel in React Native"
description: I show how to create a horizontal and snapping card carousel view only with React Native core components.
tags: react, reactnative, javascript, typescript
cover_image: https://mariusreimer.com/images/rn-card-carousel.png
---

A card carousel allows you to display data in a horizontal swipe view, in the form of cards. Each card has a specific snap position that the user may scroll to, instead of having a free scrolling. This should give a better experience in case the user has to choose between different categories for example. I will show how you can achieve create such a carousel view, with core React Native components.

`youtube:https://www.youtube-nocookie.com/embed/csUb9nnhelU`

To keep the example simple, we will fill the carousel view with cards (simple Views), that each represent a different color and a random word (lorem ipsum). Each card that is currently selected or active (in the middle of the carousel view), will have a slightly higher size than its neighbors. Also, the neighbor left and right from the active one will already be party visible. The size of the cards will change, depending on how far it is scrolled.

![](/images/rn-card-carousel.png)

Generating the words to fill the cards can simply be done by taking a "lorem ipsum" sentence and then `split` it into words. The whole carousel view is based on the React Native `FlatList`, but could also just be replaced by a `ScrollView`. Important are the `props`, that have to be set specifically, to enable things like horizontal scrolling and snapping.

Most props like `horizontal` or `data` or the ones to disable the scroll indicators should be pretty easy to get. The interesting part is are the snapping props. Snapping in the scroll view should be centered, using `snapToAlignment`, which means that the cards are aligned to the center of the scroll view.

Setting the `scrollEventThrottle` to 1 increases the scroll position accuracy, but might cause performance problems, since more data is sent (over the bridge - serialized and sent to the JavaScript environment). We may also need to adjust the default settings for the content insets, which is the amount of the scroll view inner distance to its elements. Reason for that is the missing cards left and right of the very first and last ones.

`gist:reime005/2843102f1f94acb05ea35eaacf92ed8c`

When it comes to defining the width of the cards, we could either make them hard coded (like 500px), or specify it depending on the scroll view size. This can be achieved by using the `onLayout` callback of the `FlatList` and tracking the width in a state. The card size will then by 80% of the scroll view width.

The width of one card will also be the size of the important prop `snapToInterval`, because with that we define the stopping points the carousel effect (could also be called pagination). Another way would be to use `snapToOffsets`, but this requires an array of "break points", which would be interesting for content with different sizes. Also, the `contentInset` and `contentOffset` are set, which are needed for initial scroll and content adjustment.

`gist:reime005/2b5cedf35a6674ab74f195490bcf8754`

At next, the scroll events will be tracked, to make the card animation possible. This can simple be done by using a reference via `React.useRef` and the `Animated.event` function for `onScroll`. That is just a code simplification, means you could also use `setValue` on the reference and use the function callback.

`gist:reime005/08ee63d7a51cf50c1134571f51614bcd`

The most interesting part is the `renderItem` function, that renders a card for the `FlatList`. The container view needs to be animated (from React Native). What happens then is change the scale of the elements, depending on how far the user scrolled the scroll view content. This is where interpolation can be helpful. It maps an input range (content offset) to an output range (scale). Each card only cares about itself, as well as if the right or left neighbor is changing. This is why the `boxWidth` is multiplied by the according indices, for calculating their positions in the scroll view (content) container. Lastly, you see the change of the `backgroundColor` by calculating the rgb values arbitrarily according to the item's `index`.

`gist:reime005/0126c89aa8bcaa49d54cdba78b2574b1`

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on January 7, 2021.
