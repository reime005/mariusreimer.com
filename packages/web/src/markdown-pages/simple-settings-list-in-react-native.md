---
title: "Simple Settings List in React Native"
date: "2020-12-15"
description: "There are many libraries that provide a way to create a settings screen or list for your React Native app. I show a simple way to achieve this with basic or no dependencies."
slug: "simple-settings-list-in-react-native"
categories:
  - "blog"
tags:
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/settingslist.png"
---

There are many libraries that provide a way to create a settings screen or list for your React Native app. I show a simple way to achieve this with basic or no dependencies.

You can find the source code [here](https://github.com/reime005/SpaceSeek/blob/master/src/components/Settings/SettingsList.tsx). In essence, we use the React Native `SectionList` for a structured or sectioned partition of the list. Alternatively, you could use a `FlatList` or even `ScrollView` if you have a small amount of items to put in your list. For imaging, you would use `react-native-svg` or alternatively the React Native `Image`. Persistence, if needed for things like a dark mode switch, could be achieved by `react-native-async-storage`.

## The SectionList

The most interesting feature about the [SectionList](https://reactnative.dev/docs/sectionlist) is its sectioned data handling. You can pass the data via `sections`, its function to render items via `renderItem` and its function to render the section header via `renderSectionHeader`.

![](/images/sectionlist-837x1024.png)

Structured data is required for the Section List. Each section has a header and a bunch of items. You can define this structure for yourself. This means, you could also add elements like a header icon, as you can see in the orange box.

`gist:reime005/6a35290187f98aeb44334d77fb85c223`

When you put this data in the `SectionList`, when using TypeScript, types for the rendering function should be automatically inferred. This makes writing these functions much easier. It also prevents possible errors by enforcing types on `sections`, for example to require an array type.

`gist:reime005/42b1b1a24ca0a576e1dd78e6bc868049`

## The Section Item and Header

When looking closely, you may have also noticed that the Section Item has rounded borders, if they are first or last in the list. This can be achieved by comparing the current render index against the `sections` data that you put into the `SectionList`.

`gist:reime005/250b7008a7e3a33fb0223fdfe7987b3c`

The Section Header is also a rather simple component. It needs to render the title and icon that you specified.

`gist:reime005/d834fce22ff34a33ea8c121048f52f5c`
