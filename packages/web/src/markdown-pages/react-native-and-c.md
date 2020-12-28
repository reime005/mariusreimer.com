---
title: "React Native and C++"
date: "2019-08-11"
description: "There are some edge cases which may require you to write code for React Native in a language other than JavaScript."
slug: "react-native-and-c"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/jonatan-pie-3l3RwQdHRHg-unsplash-copy.jpg"
---

React Native allows you to write fully-native mobile apps for Android and iOS in JavaScript. Since there is only one common codebase, development cost can be drastically reduced to a minimum. Organizing your team can become way easier, since you may not need native Android and iOS developers (there are exceptions which I will explain in the following). If you would have two teams, implementing a new app feature always requires communication/synchronization between them (and twice the work time).

## Plain JavaScript or Hybrid?

When you decide to give React Native a try, you should evaluate your situation and app use case. There are two different ways of build a React Native app: using Expo or not using Expo. In short, [Expo](https://expo.io) manages your React Native workflows like build and deployment and abstracts native modules away from you. It can even [build native binaries](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/) for you. That also means you won't touch any native code and can concentrate on writing the business logic in JavaScript, or better TypeScript.

If you come to the point where you need to use a native module that Expo does not support, you may want to [eject](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/) into a non-Expo (plain) React Native project. This also means that you have to be comfortable managing the native code on your own, including build and deployment via XCode/Android Studio.

Hybrid React Native app development gives you full control over your app's workflow, including code privacy. Some app use cases may require that. A really good example is an app that does custom camera interaction with the user (like Snapchat, Instagram).

## Sharing code between Android and iOS

For most use cases, sharing code between iOS and Android via JavaScript is enough. The good thing about that is understandability of the language itself, as well as over-the-air (OTA) updates via React Native code push, if used. This gives you the possibility to ship a new JavaScript bundle to your users without an app review process.

There are some edge cases which may require you to write code for React Native in a language other than JavaScript. This can be due to API integration (there is no native module for this specific Android feature...) or performance. A common way to share code between iOS and Android apps is by using C / C++.

## How to use C++ code in an iOS app

XCode / iOS makes it pretty easy to use C++ and Objective C code together. The easiest way in my opinion is to use `.mm` files, which are supposed to be Objective C++. You could also separate both languages (`.m` and `.cpp` files), but this may be more complicated. A general recommendation is to use the preprocessor directive `__cplusplus` and wrap the parts of C++ code:

If it (XCode or your favorite IDE) cannot find your custom C++ code, you need to make sure that the files are in your header search paths. If you use cocoapods for your dependencies, the files can simply be added to your spec source files: `s.source_files  = "ios/**/*.{h,mm}", "cpp-code/**/*.{cpp,h}"`. Make sure to use the correct file ending. See [my example](https://github.com/reime005/react-native-cpp-code/blob/master/RNCPPCode.podspec) for a working project configuration.

When everything is setup correctly, you may use the C++ code in your React Native / Objective C class or function:

A **common mistake** (that I made) is that you use C++ code in a `.m` file, when it should be `.mm` for Objective C++, or have a `.m, .mm, .c, .cpp` mismatch in general. Also, header search path configuration was often an issue. You may run into linker issues or similar otherwise.

## How to use C++ code in an Android app

Android makes it a bit more complicated to use C++ code, than iOS. You need to use the Android Native Development Kit (NDK), in order to compile the code into a static library. The bindings between the two layers (Android and C++ library) is handled via the Java Native Interface (JNI). Effectively, this means you need to write a JNI adapter that handles the object conversion (Java <--> C++).

First, you have to extend your `build.gradle` file for your NDK build flow:

Note that the compile flags can be adjusted as necessary. Then, you need to create a `CMakeLists.txt` file in your project's root directory (the one you specified in the gradle file). This file may look like the following:

At next, you need to specify where you want to invoke the C++ code in your Android / Java code. In [my example](https://github.com/reime005/react-native-cpp-code/blob/c579c47a24e22fa6a955c6e53c2f5fdad59fb9d1/android/src/main/java/com/mariusreimer/rncppcode/RNCPPCodeModule.java#L58), the code will be used in the `com.mariusreimer.rncppcode.RNCPPCodeModule.java` class. You just specify the method as it is gonna be in your JNI adapter:

Then, the JNI adapter may look like the following, having the correct function name:

Note that you can do much more with JNI, like passing custom objects back and forth, which has some tweaks. A **common mistake** and compilation problem here is that you have a typo/mismatch in your JNI method declaration.

The C++ code used in this project is nothing special and only multiplies two numbers.
