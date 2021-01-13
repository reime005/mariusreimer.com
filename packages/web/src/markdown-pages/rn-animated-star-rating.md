---
slug: "rn-animated-star-rating"
date: "2021-01-13"
title: "Animated Book Star Rating in React Native"
description: I explain how I created an Animated Rating Component with a Custom Bottom Modal in React Native.
tags: react, reactnative, javascript, typescript, animation
cover_image: https://mariusreimer.com/images/rn-animated-star-rating.png
---

![Animated Book Start Rating in React Native](/images/rn-animated-star-rating.png)

Animations can make already good apps look and feel even better. It can improve the user experience by making actions feel more natural or living. One use case of animations are modals or pop ups, that dynamically display content on the screen. I will describe how you can create a modal in React Native, that opens and closes from/to the bottom.

`youtube:https://www.youtube.com/embed/gTjrigBf1f8`


In addition, the modal will have a vector-based star rating box, in order to make the user rate an item (in this case books). Also, the backdrop of the modal blurs the content behind it. This should make the modal fell more natural. Works on Android and iOS. You can find the full source code [on Github](https://github.com/reime005/ReactNativeStarRating).

## The Modal

The Modal consists of several views, but the root should be positioned absolute, otherwise you may run into problems with your layout. Also, the modal needs an `Animated.View` component, that contains the `PanResponder` functionality, in order to handle the swipe events. For the blur effect, which is rather simple to achieve, `@react-native-community/blur` is being used. Note that the entire screen will be covered by the pan handler, since we also want to catch if the user clicked on the backdrop/blur view.

`gist:reime005/414acacc525add68b121d345dce27abe`

When it comes to the actual modal window, I set the height it to be 25% of the screen's height, as defined in `MODAL_HEIGHT`. As you will see later, we track the amount of pixels that the modal has been swiped down in a React reference as `Animated.ValueXY`.

Using the reference value, we can change the opacity of the modal window, depending on how far the modal has transitioned. For this, we will use interpolation, mapping the position (translation) of the modal window to an opacity value between 1 (fully open) and 0.5 (modal is out of screen).

`gist:reime005/8cc499876fac27fa592af184d2d597b4`

Jumping forward to the actual content of the modal window, which will be a row of stars that the user can select for rating books. In order to know which star is being selected and at which part, we will use another `PanResponder`. We will do this because it makes position tracking much easier and reliable, than with just one responder. You also the see a `onLayout` callback, which is used to keep track of the star row's width, as later described. It had to be a React reference and not a state, because it is used in a `PanResponder` and thus would not work otherwise.

`gist:reime005/cb84d432d8a827c7f359abfc9062ff6e`

The **Modal Responder** allows you to keep track of touches inside the whole modal (except the star row). Before we actually allow a gesture to be tracked, we check if the touch is inside the window area (25% height). Otherwise, the touch would hit the backdrop area. Also, when the swiping down of the modal ends, we either close it completely or keep it open, defined by being less than 50% closed already. Move events will change the modal position, as described later.

`gist:reime005/376d9e982c1b0d91a03bad655b2f3d6a`

For the **Star Responder** we will add the same behavior for when the gesture ends, as with the modal responder. But for the touch and move events, the star rating (here offset) is being calculated and set. If the user swipes down over a star, the change in `y` is being checked, and if its greater than a threshold, the modal position will change instead.

`gist:reime005/0cf9544a042ed2439be516219e508a4f`

### Spring Animation

In order to achieve a natural, slight bounce animation of the modal window, we will use a spring animation. When the modal window opens, it moves from the bottom of the screen up by its height. This is why we, to calculate that position, subtract the screen height (which is the full modal height) minus the targeted modal window height (25% of that size). Closing the window means moving it to the bottom, out of the screen, meaning the screen's height.

`gist:reime005/b3616494f9d18eb95af4ff9b16ef8d6d`

### Tracking the Modal Position

The `PanResponder` fires events for touches that the user does on the modal. To track that position, we take the accumulated distance of the gesture since the touch started, as saved in `dy`. This is then saved as an animated value in a React reference and used for `translateY` and `opacity`, as mentioned before.

`gist:reime005/45aca59066e5151b31dd868e02024784`

## The Star

As the user touches the stars, we also want them to be able to select half stars. This requires a gesture tracking and evaluation, otherwise we could just a `TouchableOpacity` or similar to track clicks on a star. The row of stars will specifically track touches in this area. Somehow, we need to check the x position of where the user touches the star row.

With the `pageX` value, we can track the x position of where the user touches, in relation to the screen. There is an alternative, called `locationX`, but that caused problems on Android. To know which star is being touched, we need to know its position on the phone's screen.

This example is rather simple, so the calculation required knowing the star row width, as well as a single star size (plus its margin distance). If the user touches the first half of a star, its value is being evaluated to 0.5. Otherwise, the star would be selected as full.

`gist:reime005/1cab94194edddd2a0c2fff6f3aaad30c`

In order to easily scale and fill a star, we will use a vector-graphics based solution via the `react-native-svg` library. This allows filling the star with a linear gradient, so that we can even fill a star by 27%, if needed. The `LinearGradient` will have two `Stop` definitions, which then adjust the filling via the `offset` prop.

Each star can then be filled via passing an `offset` with a range between `[0, 1]`. This then means you know how much to color each star, since its index is known via the root component. Simple subtraction then gives you the `offset` value.

`gist:reime005/333b6e26f93dda3b9645b98bf23f8ddf`

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on January 13, 2021.
