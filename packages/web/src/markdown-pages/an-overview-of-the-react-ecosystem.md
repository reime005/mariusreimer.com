---
title: "An Overview of the React Ecosystem"
date: "2019-05-29"
description: "This is a summary of the most interesting talks from the React Europe Conference 2019 that happened in Paris. React is becoming a very famous library that is nearly obligatory for every frontend developer to know."
slug: "an-overview-of-the-react-ecosystem"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/Screen-Shot-2019-05-29-at-4.44.23-PM.png"
---

This is a summary of the most interesting talks from the React Europe Conference 2019 that happened in Paris. React is becoming a very famous library that is nearly obligatory for every frontend developer to know. With the release of React hooks, the team around Facebook initiated an interesting shift in how components are designed. You could see that in nearly every presentation - most of them made use of hooks.

## The State of React

The current development and demo on React suspense shows clearly that React is constantly improving itself. Suspense includes a way of suspending the process of rendering until a certain condition, like fetching some data from a server is finishes, is met. This removes the necessity of having many loading states that a parent component probably need to know about. You will have to define a fallback component that is shown until the condition is finished (Promise is fulfilled). Additionally, you can define a _maxDuration_ property so that the time until this fallback component is shown can be adjusted. The reason behind that can be seen in the iOS settings: when you click on an option, there is often a short pause before continuing to the next screen, rather than a loading spinner. This makes transitions feel more natural/fluid.

More upcoming things are React Flare, which is related to cross-platform and cross-device events. With the work on [React Fiber](https://github.com/acdlite/react-fiber-architecture/blob/master/README.md), a redesign of the React core architecture, things like scheduling (I heard it should be open sourced separately), may change the way how rendering will be done and more.

## Twitter

The talk from Paul Armstrong on Twitter and its progressive web app (PWA) was all about fail fast and with confidence. If you have a continuous development pipeline, it is all about speed. When a developer wants to create a pull request, there should be automated checks like linting, type checking and tests that have to pass before this PR can be merged into the target branch. In Twitter's case these took quite some time. If you have to wait 15 minutes to know that some linting failed, or that you broke a tiny unit test, this can become a waste of time really quick. Context switching kills productivity.

Another issue that came up was the phrase 'I checked out the master branch and it does not build on my machine'. The reason was that the project's dependencies/modules have changed and you just had to install them.

Both problems can be solved by simply doing them locally and automatically. Git hooks are a good tool for that. The tool that was shown is called husky. This is the presented configuration:

`gist:reime005/4802c1b8de7b873dcd0f5d6175697218`

You also need a lint-staged file, that configures the steps to be done before doing the commit:

`gist:reime005/f0008003673442e98b7853f954991bfc`

Interestingly this husky configuration file does many things. Before a git commit, it:

- runs the linter with an autofix option 
- runs prettier to format your JavaScript code so it always looks nice
- runs not all tests, but only those which are related to files you changed

Especially the last point is really great, when you have multiple hundreds or thousands of tests. Furthermore, after a git pull or rebase, yarn install (or npm install) is run. This is done with a frozen lockfile, so that it really takes the resolved dependencies and you have a reproducible build. In fact you should never skip the basics things that plays into static analysis of your code. This starts may involve test driven development (TDD), linting, auto formatting and static type checks.

## Animations everywhere

When it comes to animations in React, there are not that many solutions that feel good. React Spring is a library to handle very nice animations. You can think of it as rather a physical animation system rather than a pure time-based approach. This makes the animations feel more natural. With its recent hooks support, we can use React Spring in a more elegant way.

It was talked about the 16 milliseconds time frame which is the maximum time a frame should take to render and look smooth to the user. In other words, it is related to having 60 frames per second (FPS), so 1000ms divided by 60fps is roughly 16.6ms per frame. React spring also supports React hooks and is something you may check out when working with React. Animations are something that turns a good application into a great application and gives trust to the user, because it shows that you spend the extra time of animating things.

The browsers split their work into different parts, which you as a frontend developer should be aware of because it can add to the targeted 16 ms time frame. You can read more about it here. To see which change in a css properties triggers which phase, you can have a look at [csstriggers.com](https://csstriggers.com). 

![](/images/frame-full.jpg)

The pixel pipeline ([Google Web Fundamentals](https://developers.google.com/web/fundamentals/performance/rendering/))

For React Native, the library [react-native-magic-move](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjci_DF-MDiAhVS5eAKHbNsCHgQFjAAegQIABAB&url=https%3A%2F%2Fgithub.com%2FIjzerenHein%2Freact-native-magic-move&usg=AOvVaw3-2ZEnA3XmsvwK88UKuS9h) made some good points in my opinion. It was described as a component that is overlayed in front of the screen and draws the transitioning object/scene/view (that is being animated) into that overlay or better clones it. This way the component tree is not changed too much, also actions that would cause a layout change in RN's flexbox library yoga is being prevented. It is definitely something worth to check out if you work with React Native.

## React Native at Bloomberg

What I also found interesting is the presentation on React Native at Bloomberg. The presenter (Josh Hargreaves) talked about how its team of 6 engineers redesigned and developed the company's mobile app with React Native. Interestingly, they had issues with list performance only on Android, as well as general issues with Redux and keeping the history of all tabs (React Navigation) in memory. Regarding redux, it caused a re-render of components that did not even have a state or prop change. So you should be careful about which components you connect to the Redux store. 

If you look at that code example, you probably wouldn't (I didn't) expect it to have any performance impacts:

![](/images/Screen-Shot-2019-05-29-at-4.35.37-PM.png)

https://www.youtube.com/watch?v=yzfmookAdk8

But simply wrapping this code into a separate component dramatically decreased the render time. If you are gonna build a new app with React Native and want to get the best out of performance, you may think about building the Android version first, and use that as a benchmark setting.

## Reason

Reason is a toolchain and syntax on top of the OCaml standard and allows you to write high quality and fully type safe code. It is fully statically typed and also uses the JavaScript ecosystem. One of the biggest advantages is the fact that it compiles into native code (also JavaScript). This brings a huge performance opportunity (see Revery). Lastly, Reason’s creator is also the creator of ReactJS.

## Revery

Built on Reason, compiles directly into native machine code and also JavaScript. Besides that, the whole toolchain including the compiler compiles into JavaScript, so it can be run in the browser. It has React-like components. Currently, it supports desktop only, but it will branch out to mobile eventually.

## Accessibility

More and more people with disabilities may use your application, which should make you think about accessibility. Screen readers are a good example for such a feature and are easy to test if you have an iPhone. A good tip is that you use an eslint plugin that hints you to such improvements.

## Five steps towards your testing dream

The talk about improving testing from Lisa Gagarina also gave some interesting and easy to apply information. You should:

- Use static code analysis tools like linter and static type checking (or TypeScript), so discover potential bugs early. Also, a code formatting tool like prettier makes sense
- Snapshot test only small and static components, otherwise they become too big and hard to review. Also use inline and diff snapshots
- Tests should resemble how users interact with your components and should give you confidence
- Create reliable end-to-end tests with tools like Cypress that run in the same run-loop as your application and control it fully
- Focus on what works for your team and project. For example if you have an app that must be tested manually, do it

## Conclusion

There are probably some things I've missed, but these were the most interesting things for me personally. So many new frameworks and features that come up that make for us developers and people that use our products easier. Upcoming things like Webassembly will probably mark a new shift in web development. With the rise of one technology, another might become obsolete. But this does not necessarily mean that one is useless. It might help the other to evolve and thus make an impact.
