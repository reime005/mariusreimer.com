---
title: "JavaScript – Incrementing"
date: "2019-02-08"
description: "JavaScript is a language that has been evolved strongly over the years. It started as a language to dynamically change content in the web browser."
slug: "javascript-buffer-overflow-underflow-and-increments"
categories:
  - "blog"
tags:
  - "javascript"
  - "typescript"
cover_image: "https://mariusreimer.com/images/lindsay-henwood-47743-unsplash.jpg"
---

JavaScript is a language that has been evolved strongly over the years. It started as a language to dynamically change content in the web browser. Nowadays, you can basically do anything with it, from developing full websites, backend infrastructure systems, as well as mobile and desktop applications.

With its wide spread awareness, there come also 'strange' things as you would say. Especially in JavaScript, where things like strict (===) or non strict equal (==) may be strange for an outstanding developer.

## Increment and Decrement

In computer science, incrementing is associated with adding a value with another value in the positive direction. Decrementing is the opposite. You can increment a value by more than one, but the most common case is just one. Now look at the following code:

`gist:reime005/3e6330af4994df5a610ddb4f1957bda1`

Now, the interesting part here is line 3 and 4. Note that this is not a JavaScript thing, but rather a general programming principle. The main difference is that the first increment is returning `i` and then incrementing it by 1. The second increment is incrementing `i` and then returning it. In **for-loops** this does not make and difference, because the condition is evaluated before the incrementing happens.

The second interesting part is line 6 to 10. The point there is that variable `a`, as supposed to be a string number, is incremented. In most programming languages, this would already fail while at compile time (or before). In JavaScript, this type is being converted in this case. That's one of the major advantages of **using types**. Luckily, there are things like [TypeScript](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), which eliminate this trap. Alternatives are **flow**, which I [already described](https://mariusreimer.com/2018/12/types-for-react-native-using-flow-or-typescript/), or other things like linter (can be integrated via IDE plugin - eslint, prettier, ...).
