---
title: "React Native End-to-End Testing"
date: "2018-11-03"
description: "End-to-End (E2E) testing is the practice of running your app on a real device or simulator and interacting with it like a real world user would."
slug: "react-native-end-to-end-testing"
categories:
  - "blog"
tags:
  - "android"
  - "end-to-end"
  - "ios"
  - "react"
  - "react-native"
  - "testing"
cover_image: "https://mariusreimer.com/images/rawpixel-676878-unsplash.jpg"
---

There are several ways of testing your mobile app. One of them are **unit tests**, where you only test specific units of your app. Other ones are **component tests** (sometimes called 'integration tests'), which includes mocking the different components of your app (as if the app would be complete). The more test coverage you have, the more confident you may be about shipping your app.

Another term that often comes with testing, especially in the front end, is **Snapshots**. Using them provides a simple way to compare an element and check if it still looks or behaves the same as it did in the last test(s). For example, testing a button for its text/style which will never change in the future. This type of testing is sometimes related to **regression tests**, that help you verify if your app still behaves the same as it did in the last versions.

> "Testing shows the presence, not the absence of bugs"  -  E. W. Dijkstra

**End-to-End** (E2E) testing is the practice of running your app on a real device or simulator and interacting with it like a real world user would. For simplicity, this means that a machine/robot is clicking through your app and checks whether or not a button can be clicked, a text can be typed in the search field or whatever.

Two major E2E testing frameworks exist for React Native projects: Appium and Detox. I've tried both  -  and will show the difference which mainly is in the fact of Gray box (Detox) vs Black box testing (Appium).

**Black box** testing is looking at a system where you don't know what is inside or how the inside behaves. You only know what you put in and what you expect as an outcome.

**Gray box** testing is similar to a black box, with the addition that you also have knowledge over the internal behaviour of the system.

**Black box** **example**: You write a test that is initially on the home screen and then clicks the bottom right navigation button that must lead/route the user to the settings screen. Since you test against a black box, you wouldn't know at which time the user will see the settings screen (or ever). What the tester could do is to **periodically check** if that condition is true, and fail with an error after a time if not. This is also called 'flakiness' and the main issue that comes with black box user interface testing. You don't really know when the testing device is at a specific state in your app or when it actually returned from clicking a button.

Black box UI testing leads to the tester including sleeps at specific points of the test, which is a bad practice in general. Especially in React Native, where the App loads a bundled JavaScript file of your code in the beginning. This would mean that you need your test to sleep long enough for that time, otherwise the test cases may be false negative.

## Detox vs Appium

As already mentioned, Detox is a Gray box test framework and Appium is Black box. Both are open source, have a decent speed (subjective) and support at least iOS and Android simulators/emulators. Their architecture differ in some points:

### Appium

- Supports cross platform device testing (real devices and simulators), as well as the possibility to test remote devices
- Uses a [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) at its core, which means you may also write your tests in a variety of different programming languages supported by Selenium like Java or Python
- Builds on an HTTP Node.Js based server with a REST API to listen for commands and doing responses
- 'Appium Desktop' as a cross platform GUI (Electron) for the Appium server, that also includes an inspector to inspect your app for test debugging purposes
- Uses the _accessibilityLabel_ property to locate components in tests

[Here](https://github.com/appium/appium/blob/master/docs/en/about-appium/intro.md) you can read more about Appium's internal concepts.

### Detox

- Supports cross platform device testing (real devices and simulators, but not real iOS devices as far as I know)
- Doesn't rely on WebDriver, but focuses on [EarlGrey](https://github.com/google/EarlGrey) and [Espresso](https://android.googlesource.com/platform/frameworks/testing/+/android-support-test/espresso), which are the leading native Gray box drivers developed by Google (open source)
- Internally uses websocket clients with a proxy server in-between, which makes its internal architecture more flexible, and gives a performance bonus since assertions are evaluated directly on the device
- Uses the _testID_ property to locate components in tests
- Requires you to also build an APK for your Android test code

[Here](https://github.com/wix/Detox/blob/master/docs/Introduction.HowDetoxWorks.md) you can read more about Detox's internal concepts.

I recommend to use Detox for E2E tests (personal opinion and experience), since the synchronization with devices is way less painful. For example, this means that we don't need to sleep for whatever seconds while the JavaScript bundle is loading from the package bundler.

Another thing I experienced with E2E tests was localizing/identifiying the components of the App. To be more precise, each element you want to test should be uniquely identified in order for the test to find it. Appium seems to do that with the _accessibilityLabel_ and Detox with _testID_. Using accessibility properties for the wrong reason might not make sense in my opionion. You can also locate elements by text or description, but that might lead to ambiguous results.

## End-to-End testing with React Navigation

Navigation is probably one of the most difficult parts in mobile app development. Especially when working with React Native, since we have the choice of many different navigate and routing solutions. One with the best support and stability is [React Navigation](https://reactnavigation.org), which we of course have to include in our E2E tests.

If you use the React Navigation tab navigation component, you can easily locate their screens with the _tabBarTestID_ property, which you add in the _navigationOptions_. For Appium this did not work in my case, so I had to wrap the _tabBarIcon_ in a View, which than has an _accessibilityLabel_. The app where I demonstrate Appium and Detox, as well as React Navigation, is open source on Github. You can find it [here](https://github.com/reime005/react-native-spaceviewer).

* * *

Here is the [medium article](https://medium.com/@reime005/react-native-end-to-end-testing-d488e010e39f).

Please let me know if I missed something important that I should add here.
