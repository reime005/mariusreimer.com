---
title: "Android Emulator for React Native Developers"
date: "2019-06-23"
description: "The Android emulator is a software and tool that emulates a real android device as close as possible. In comparison to a simulator like the iOS simulator, it is closer to how the device behaves in reality."
slug: "android-emulator-for-react-native-developers"
categories:
  - "blog"
  - "tutorial"
tags:
  - "android"
  - "ios"
  - "react-native"
cover_image: "https://mariusreimer.com/images/jonas-lee-272099-unsplash.jpg"
---

The Android emulator is a software and tool that emulates a real android device as close as possible. In comparison to a simulator like the iOS simulator, it is closer to how the device behaves in reality. So, a simulator is more of a model of the actual system and not as close to the real device.

As a mobile developer, you have the choice of using a real, physical device or a simulator/emulator. In my experience, the development on a physical device tends to be slower, but you get a better feeling for user experience (UX), as well as the access to things like the camera or microphone.

Developing mobile apps with React Native allows you to use features like Hot Reloading, which essentially reloads part of the user interface (UI), without having to restart the app or it's state. If you strive for the best performance on both of your platforms, iOS and Android, it is currently recommended to these parts for Android first. The reason is that it's performance tend to be worse compared to iOS, due to its underlying JavaScriptCore (JSC) and touch event system. This is why it is helpful to know the Android emulator.

## Android Emulator Setup

If you work in a team, you may rely on having the same developer environment across all your colleges. This includes the same or similar Android emulators. Tools like docker might be helpful here. However, it can be quite difficult to setup a Docker container with an Android emulator.

Getting used to the command line makes sense, especially since starting an emulator using Android Studio might take a while. You may setup scripts for creating, configuring and starting an emulator so that everyone is on the same page.

At first, you need to install Android Studio, which includes some basic Software Development Kit (SDK) tooling. Following that you have to setup the paths to be available on your system:

These are the environment variables that I use on my machine. Of course you should put them in the `~/.zshrc` or `~/.bash_rc` file or whatever shell you use. At next you have to use the Software Development Kit Manager tool (sdkmanager) to install necessary packages. You could use that graphical user interface (GUI) from out of Android Studio, or use the terminal, as you prefer:

The nice thing included in this script is the fact, that you can automatically accept all licenses that the `sdkmanager` will request to approve. This is helpful if you use a docker container. The following commands allow you to create and start an Emulator, if you've setup the environment variables correctly:

## Useful commands for the Android Debug Bridge (ADB)

The following is a list of some commands that I find useful every day. Installing and Uninstalling apps via terminal is pretty much necessary as a developer.

## A must-known for React Native Developers

Especially for React Native, the following commands are very helpful. The framework's developer experience involves shaking your device, in order to open the dev settings. This can be quite annoying, but via `adb shell keyevent KEYCODE_MENU` you can open that menu using the terminal. You can also send the event (type "RR"), so that a bundle reload is initiated:

If you reconnect your Android phone physically, you may need to run `adb reconnect`, as well as `adb reverse tcp:8081 tcp:8081` in order for your bundler to be redirected to your phone again.
