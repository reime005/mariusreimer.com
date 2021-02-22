---
slug: 'flutter-onboarding-experience'
date: '2021-01-20'
title: 'App Onboarding Experience in Flutter'
description: I show snippets of how I created a simple App Onboard Experience with Animated Page Position Indicator in Flutter
tags: flutter, dart, ux
cover_image: https://mariusreimer.com/images/flutter-onboarding-experience-thumb.png
---

![App Onboarding Experience in Flutter](/images/flutter-onboarding-experience-hq.png)

Many mobile apps have a unique flow of experience that the user has to go through. A tutorial or onboarding screen can help with explaining the steps that the user has to do in the app. I show roughly how I created such a screen in Flutter. The source code can be found [on Github](https://github.com/reime005/FlutterOnboarding).

`youtube:https://www.youtube-nocookie.com/embed/XgtzUORaYKU`

## The Important Widgets

Widgets that I have used in this example are the following:

- SafeArea
- Column, Row, Container, AnimatedContainer
- Text, FlatButton
- SvgPicture from 'flutter_svg'
- Expanded, Padding
- PageView

Important to highlight here are the first and last one. The `SafeArea` helps you using only the area of the phone that is safe to be used for designing. That is, rounded borders from certain devices. With help of the `PageView` you can create the horizontal page scroll effect.

![Flutter Animated Page Position Indicator](/images/flutter-onboarding-experience-1.png)

First, we want to define the data that we use for the explanation screens. For that, a specific class `ExplanationData` will be defined, to hold these information. Each page has a specific background color, title, short description and an image on top. The image will handled as vector graphics via `flutter_svg`.

`gist:reime005/60247e72636920314967a9811b9c8852`

## The Animated Page Position Indicator

The next code snippet shows the state handling of the `PageView` widget, so that we can track the current page index and programmatically (when pressing on a button) jump the next page. It also shows the create function for the page indicator circles. For each page we render a specific circle, with when the current page is selected, the circle is about three times wider. This gives a better impression of where the user is currently. Using the `AnimatedContainer` we can achieve a simple animation effect.

`gist:reime005/786c3a3c9a37a49f010c9811ddd674d6`

Lastly, you see a snippet of the horizontal `PageView` widget. Using the `onPageChanged` callback, we can track the current index, leading to a re-render of the page indicators. These indicators are generated with the help of `List.generate` and by using the length of the previously defined `data`, put into a `Row` widget.

`gist:reime005/748e1ad76cae4447b13065e0b6968e85`

Originally published at [https://mariusreimer.com](https://mariusreimer.com) on January 20, 2021.
