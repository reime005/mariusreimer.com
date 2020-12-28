---
title: "Should you upgrade your React Native App?"
date: "2019-08-04"
description: "Upgrading a React Native app, as from version 0.57 to 0.60 may cause a lot of unforeseeable effort and pain. This has led me to writing down my experience with this process."
slug: "should-you-upgrade-your-react-native-app"
categories:
  - "blog"
tags:
  - "javascript"
  - "react-native"
cover_image: "https://mariusreimer.com/images/rn-upgrade.jpg"
---

Upgrading a React Native app, as from version 0.57 to 0.60 may cause a lot of unforeseeable effort and pain. This has led me to writing down my experience with this process. I don't want to hate React Native, it is awesome. The problem with upgrading your project often comes from the different dependencies you use (native modules). Tools like the [React Native Upgrade Guide](https://react-native-community.github.io/upgrade-helper/) make things way easier, so that you can compare changes between versions.

This article is focused on my experience of upgrading a react native app with custom native code. If you use [Expo](https://expo.io), you might not run into much trouble, since the native code is handled for you. You may find detailed upgrading guides when googling.

From my experience, upgrading can take a long time. Especially when you have a high number of native modules included, meaning that these dependences often must kept maintained. Of course, the less dependencies, the better. In my case, one self-written native module even relied on custom C++ code. So what are the first things you should do, when there is a new release?

## Decide If The Upgrade Is Worth It

One very important thing when deciding to upgrade is to check if the new release includes an important bugfix or great features that you definitely want to have in your app.

A good start is checking out the react native [**changelog**](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md). This hints you to the most common fixed issues and newly added features. If there are known problems with upgrading to that version, you may find temporary "workarounds" (I call them hacks).

You could also be **blocked** by the react native code itself. For example, I couldn't upgrade an app because the fetch of a local blob did not work anymore (also `react-native-fetch-blob` couldn't be used). This could be a use case for a post install hack, as you will read later.

Another reason to upgrade may be the **breaking change of a dependency** that you somehow use. With somehow I mean that you don't use it directly, but through a module that references it. If this module is not up-to-date or does not do version pinning (specify exactly which version should be used, not something like `com.google.android.gms:play-services-vision:+`), things can get really funny. This would extend your upgrading process to either removing/replacing that module or fixing it and submitting a pull request, in hope that the maintainer is still alive.

Last but not least, following the react native community on Twitter can help you with deciding if it is worth the upgrade or not. Often people are very enthusiastic about a release, for example when the Android JavaScriptCore (JSC) has been upgraded.

## Start Upgrading

Essential when upgrading is to do the process in an isolated environment. This not only means working in a separate branch (I assume you use git). That way you don't interfere with your stable code and is common practice when your work in a team anyways.

I would even recommend you to check out your repository in a whole different folder. The reason why is that you eventually do changes in the `node_modules` folder. If you then, in the work flow, need to run `yarn` or `npm install`, you may wipe out your changes. This sounds stupid, but happened quite often to me.

* * *

Imagine the following scenario:

- Your app is on react native version 0.58.
- You want to upgrade to react native version 0.60.
- You use three dependencies that reference Android and Firebase libraries.
- The reason why you update is because your build fails. After some time of googling you find out that Google released a breaking change related to AndroidX. Fixing your app's dependencies might be more complicated than upgrading, so that you are AndroidX ready.

What I would start with is using the [upgrade helper](https://github.com/react-native-community/upgrade-helper) command line interface (CLI) to interactively start the upgrade process. Alternatively, you can just view the diff using its [web tool](https://react-native-community.github.io/upgrade-helper/) and apply the changes by hand.

I often find myself using the react native example (`react-native init App`) as template guidance. Sometimes, when trying to fix a bug, I use the module in a fresh-templated app. Lastly, may run into issues related to settings you made for your target scheme, just because the modules you use for config generation changed.

#### Clean Environment

Note that you should not (I would not) upgrade **all your npm modules** to the newest versions right away. Doing so could cause other issues which you may not be aware of. I would only do these upgrades one-by-one after the native build has succeeded and your app is running.

Make sure that you don't forget any post install scripts (hacks that are rather temporary) you might have in your project. This is a way to fix issues in your `node_modules` folder by changing files after the installation has happened. It happened to me once or twice, that I just forgot that.

Sometimes you need to have a clean build environment. If you don't use a tool like Docker, which may be difficult to setup, there a some must-known regarding clean environment:

`gist:reime005/6840696fffd3292d501f200856134070`

When all the necessary version changes are applied to your code base, you can start the native build process. What I mean with that is, for example run `react-native run-android` or trigger the build using `./gradlew assembleDebug` in the android project folder.

You will probably still run into build issues, which have to be fixed individually. Let's say the build fails because of a `android.gms.*` version mismatch. I would first check which modules are linked to this Android dependency and upgrade them to the newest version. If the build is still failing afterwards (you may need to clean everything), read their docs. If that does not lead not anything, open their current source in the `node_modules` folder, and try to figure out the fix (googling helps). Maybe you just forgot to pin the library version in your `rootProject.ext` block.

* * *

## After the Upgrading

After a successful upgrade of your app, you definitely need to test everything throughly. There could be a bug in some code that you didn't even upgrade. In my case, there were crashes on some iOS devices related to a memory access error. So you might run into a lot of test-fix-test cycles.

Furthermore, automated tests like unit tests or eventual user interface tests / end-to-end tests should still succeed.

In the end, upgrading can be a fun and time-consuming but valuable process. If you stuck somewhere: you may fix it tomorrow. In the worst case, you have to revert your changes.
