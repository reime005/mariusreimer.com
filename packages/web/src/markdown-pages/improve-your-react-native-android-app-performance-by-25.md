---
title: "Improve your React Native Android App Performance by 25%"
date: "2019-03-10"
description: "For execution of the JavaScript code in React Native, there is the JavaScriptCore (JSC). The React Native project relies on that, your device is not capable of interpreting JavaScript as if it would be machine readable code."
slug: "improve-your-react-native-android-app-performance-by-25"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
cover_image: "https://mariusreimer.com/images/glenn-carstens-peters-203007-unsplash.jpg"
---

React Native is a great library to build Native Apps for Android and iOS in JavaScript. It was developed by Facebook and used internally. Initially, the library was intended for iOS only. After some time, its popularity has gotten bigger, which lead to the support for Android.

For execution of the JavaScript code, there is the JavaScriptCore (JSC). The react native project relies on that, your device is not capable of interpreting JavaScript as if it would be machine readable code. JSC is the JavaScript engine that is used by Safari and thus Webkits, so it powers a large amount of the web.

On iOS, React Native uses the JavaScriptCore provided by the iOS platform. The Android platform uses a JavaScriptCore version bundled alongside the app, which also means it increases its bundled size. Up until React Native version 0.58.x, the Android JSC was outdated and only supported 32bit builds.

So, to enable 64bit builds for Android you should only need to enable separate builds per CPU architecture and include the "armv64-v8a" architecture. React Native 0.59 includes a JSC upgrade, which should support that feature.

`gist:reime005/2651bebbf32bf892b6abbfcea78ca529`

I've tested and compared the new JSC (32bit vs 64bit) with the 0.59.3 release candidate. I let made a release build and ran some 'computationally intensive' operations that were AES encryptions (JavaScript only).

The result: on the 32 bit build, the operations took 2.4 seconds on average. The 64 bit builds lead to an average of 1.8 seconds. I know that this would not hold as a scientific proof, but anyway. The 64 bit version was ~25% faster!
