---
title: "Bringing React Native to the Web"
date: "2020-04-10"
description: "I want to share my experience and process of rendering a React Native app into a Website without using Expo."
slug: "bringing-react-native-to-the-web"
categories:
  - "blog"
tags:
  - "javascript"
  - "monorepo"
  - "react"
  - "react-native"
  - "react-native-web"
  - "typescript"
  - "yarn"
cover_image: "https://mariusreimer.com/images/screenshot-spaceviewer-scaled.jpg"
---

I want to share my experience and process of rendering a React Native app into a Website. The project does not use [Expo](https://expo.io) and thus might lead to a different outcome. The app is open source and can be found [on Github](https://github.com/reime005/react-native-spaceviewer), including **Github Actions, automatic deployment and Detox End-to-End tests**.

## Preface

As of 2020, React Native has become a very powerful and widely used way of developing mobile applications. There are many benefits over native app development, like sharing knowledge (React), having access to more developers on the market, sharing code between Android and iOS and more. Downsides may be performance (in some special cases) or debugging. However, these become better and better. Most business use cases do not even need to opt-in for specific platform-native code, but you can.

Some time ago I compared the competitor [Flutter against React Native](https://medium.com/@reime005/my-points-on-flutter-as-a-react-native-developer-7e55da1fcf6a). I would now highlight the benefit of reusing already existing React knowledge and capacity in terms of developers. This is a huge plus, since Flutter's programming language Dart is not as common as JavaScript or TypeScript. I have been working with React Native for 3 years and like the progress and improvements that have been made over the time, also in terms of developer experience.

When it comes to sharing or reusing code between apps and websites, there do not exist many solutions on the market. In terms of Flutter, there is a [Flutter Web Support](https://flutter.dev/web) in development. But for React Native, there is a solution called React Native Web. In short, it allows you to render your already existing React Native components to HTML with React DOM.

I was curious about using my already existing app code for a website. After a quick proof-of-concept (example), I came to the conclusion that it makes sense to split my code base into 3 parts: shared, app and web. A way to do that splitting is called monorepo.

![React Native Web Result: iOS - Android - Chrome Browser](/images/jytffzoj.gif)

The result is that you can directly see the result when changing some code. Here, I've just changed the size of an image, for demonstration.

## Monorepo

A concept of splitting or separating your code into several smaller packages and collecting it in one repository, is called monorepo. It allows you not just to organize your code better (increases learning curve for new developers), but also to share code in between them.

With a monorepo you can also individually release new versions of a package. For `yarn` based projects, you can use the `yarn workspace` solution (as I did), or [lerna](https://github.com/lerna/lerna), which may be an alternative if you use `npm`.

## #1: Prepare your project configuration

First thing is to create the following folders:

- _packages/common_
- _packages/web_
- _packages/mobile_

Then basically move all the code into the mobile package. Each of the three folders represent a repository, so they need to have `package.json` files with separate names. This applies to the root folder, too. It is quite important to specify these packages as `private: true`,  at least that you don't accidentally publish one of them. Finally, the root package specify its packages:

`gist:reime005/8ec897f4192910115d938c587b225319`

Adjusting the app's build configuration wasn't very easy, but possible. These were the main problems and strategies I applied because of them:

- Relative paths in the **native project** files. With `yarn workspaces`, node project dependencies/modules are usually hosted in the root `node_modules` folder. You could work around that with yarn's `nohoist` option, but I haven't tried it. In my case, the folder depth has changed by two ('../../'). In the end, you need to adjust all relative paths in the `gradle` files, `pbxproj` and `Podfile`. For iOS, I've done that without XCode.
- React Native **build configuration**. It might be necessary to change the name of the bundle entry file in relation to your project path. This is due to the fact that the React Native root folder has changed. This is to be adjusted in the `android/app/build.gradle` and `pbxproj` file. For iOS, I would rather edit that with XCode (script in the 'Bundle React Native code...' phase).
- The actual React Native **bundler** configuration, `metro.config.js` may also need to change its `projectRoot`.
- Eventually the bundle loading takes more time than usual. This could be resolved by adding `ignore_dirs` path entries (like `node_modules`) to the `.watchmanconfig` file(s).

This should have been pretty much it, when it comes to changing your app's  setup. The next biggest thing is to move your existing code into the shared package. It might not be necessary for you to share all of your source code.

You should be done with this step when both projects, iOS and Android, are building again.

## #2: Move code and refactor imports

The biggest and most time-consuming task for me was the copying of existing code into the `common` package. This was mainly due to the fact that I have also used **TypeScript** with JavaScript, which meant that this needed to be configured correctly, too. The complete `tsconfig` can be found on my Github repository.

Important is, that the TypeScript code has to be **compiled** (or transpiled...) into JavaScript code. Otherwise, the repositories that use `common` may not work. The practice here is to let the TypeScript Compiler output the code into the `dist` folder. Assets (like pictures, videos, ...) may be put outside the `dist` folder, because the compiler does not copy them. During development, you could run the compiler with the `--watch` flag, in order to see the changes directly when you edit code (as you see in the result demonstration).

How I continued from then was that I first made some very simple Text component as 'shared code' work for both iOS and Android. From there on, I would, **step by step**, import more and more code. That way you directly see which of the imported dependencies cause issues.

Two things that can sometimes be confusing here are that the 'copied code' cannot be found by the app, or imported dependencies cannot be found. First should be resolvable by restarting the bundler, second by either the same solution or adding the import dependency to the `common dependencies`. This solution is still a bit unclear to me, since those dependencies will be hosted in the monorepo's `node_modules` folder anyways. But whatever makes it work for me works for me.

## #3: Move to the web

The whole reason of creating a monorepo and enable code sharing is to have a better integration with [React Native Web](https://github.com/necolas/react-native-web). Adding the `common` package as a dependency to `mobile` or `web` is quite easy. You just have to put `"common": "*"` to the `package.json`, without the need to specify an explicit version.

After configuring the package with `react-native-web`, it was not as complicated to get it run as the mobile apps, since you don't have any Android or iOS specific project files. The rest of the `web` project is basically a standard React setup. 

React Native Web is not supposed be a way of moving all of your app's code to the web. Usually, you want (and need) to have a different **user experience** when it comes to a web application. That is why you may need options for differentiating between the platforms Android, iOS and Web. For that, you can use `Platform` specific code:

`gist:reime005/8eb151967fa51cd56b1787d7f8aa15aa`

Another option is the separation via **file ending.** You could create a component with different code specific for each platform and still import it via `import TestComponent from './TestComponent'`:

- `TestComponent.android.js` for android
- `TestComponent.ios.js` for ios
- `TestComponent.web.js` for web
- or just any of those as a fallback, so that you have two files (one for web, another for mobile)

## Conclusion

React Native Web can be a very interesting approach of providing a **lite version** of your mobile app. You could only provide a limited and "easy" to convert subset of your code into the web. This way, your users could get a feeling for the app and decide to download the full app from the app store to get a full experience. 

Code between Android, iOS and Web could be mostly shared. Especially libraries like Redux or React Router could be **100% reused**. A downside however is that configuring the projects can be very complicated. But that is where projects like [Expo for the Web](https://docs.expo.io/versions/v33.0.0/introduction/running-in-the-browser/) can make more sense. 

Monorepos are also very interesting, especially when it comes to code sharing. In different project setups, like with some that are more fullstack oriented and thus include backend code, sharing logic can also be beneficial (sharing helper code, types, ...).
