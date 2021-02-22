---
slug: "rn-image-scroll-zoom"
date: "2021-01-08"
title: "Image Scroll Zoom in React Native"
description: I show how to create a zoom effect in React Native when scrolling an image to the end of a scroll view.
tags: react, reactnative, javascript, typescript
cover_image: https://mariusreimer.com/images/rn-image-scroll-zoom.png
---

When creating a scroll view for a mobile app, a common principle could be to have an image on the very top of the list. This could be to showcase the content of the page. Examples for this could be found in the Spotify app, where an album cover is shown first, followed by a list of its songs.

![](/images/rn-image-scroll-zoom.png)

Scrolling up a list of items with an image on top, it can be a nice feature to zoom in the picture naturally. I describe how this can be easily done in React Native. In one of my current React Native apps, which is [open source] with full End-To-End and CI/CD setup, I have implemented this feature. The source code / component can be found [on Github](https://github.com/reime005/SpaceSeek/blob/master/src/components/LaunchContent/LaunchContent.tsx).

`youtube:https://www.youtube-nocookie.com/embed/5q5ORAdSlBk`

The basis of all here is the React Native `ScrollView`. This allows us to have content in a scrollable container. When hitting the end of the scroll container in one direction, you may see a bounce of the content. This can be manipulated by changing the boolean `bounces` prop. Since this is enabled by default, we should be good here.

Next, we need to track the `y` position of the content offset, so that we can change the image style later. For this, we use the `ScrollView` callback `onScroll` and map the offset to the `Animated.ValueXY()` reference and using the `Animated.event` for simplification, as you can see in the code.

In order to improve scroll event accuracy (allowing it to fire more frequently), we can set `scrollEventThrottle` to 1. However, this could cause performance problems, since more data is sent (over the bridge - serialized and sent to the JavaScript environment).

`gist:reime005/959699278f019f86e0a3c2f0cf207835`

The image is the first item in the scroll view. In order to change its size dynamically, the view must be animated. You could either do this by using `Animated.createAnimatedComponent` for your own component, wrap a view inside an `Animated.View` or just use `Animated.Image`.

My approach to perform the image zooming is by changing `scale` and `translateY` from the style's `transform` prop. The idea is, that the scale increases to a certain value (20 in this example) in relation to a negative change of the `contentOffset.y` value. This means that the more negative (scrolling up, or over the top edge) the value gets, the more we increase the image's scale.

Now, you may notice an empty space on top of the image, the further you scrolled up. You might not want this, so what you could do is change the `translateY` value, also in relation to the changing `contentOffset.y` value. This should keep the image on top of the scroll view's container. You may need to play with the values a bit, since they can be different in your app.

`gist:reime005/0532b50ab9b1798dd3eab6e279739f1b`

Lastly, the content below the image may be a bit off when scrolling or zooming. If you don't want this, you could wrap these views in an `Animated.View` and also apply a change in `translateY`.

`gist:reime005/63e89db56c3946f6fed7c9264839ccea`

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on January 8, 2021.
