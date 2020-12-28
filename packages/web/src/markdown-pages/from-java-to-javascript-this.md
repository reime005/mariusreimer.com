---
title: "From Java to JavaScript – This"
date: "2019-01-23"
description: "Java and JavaScript have some things in common, but also do most of them differently. One example for that is `this`. This refers mostly to a specific context, meaning that some variables are only available in this context."
slug: "from-java-to-javascript-this"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
cover_image: "https://mariusreimer.com/images/pablo-garcia-saldana-94058-unsplash-copy.jpg"
---

Java and JavaScript have some things in common, but also do most of them differently. One example for that is `this`. This refers mostly to a specific context, meaning that some variables are only available in this context.

## Java - this

In Java, `this` is used to access member variables. So it is used to access the context of the class:

`gist:reime005/874cc32eccbc7fc40964df7748fdc649`

So in Java, especially in setter functions, the parameter often has the name as the variable that it is intended to set. In this example, `someValue` is ambiguous, that's why `this` makes sense. The getter works without `this`, because there is no ambiguity in that context.

## JavaScript - this

In JavasScript, `this` refers to the 'call context'. If you use it inside a function, you will access its object (`bigObject` in this example).

`gist:reime005/07ae0e72ee2d5fc6ac3adffaae56781f`

There are many other places in JavaScript, where `this` has its use. For example in HTML event handlers, `this` refers to the received event. Binding in JavaScript is a whole topic for itself, but in short you can have a look at the last example:

`gist:reime005/04a3cd99524d8f1feb813a57da18a54c`

In this example, we change the this context of the `test()` method inside `bigObject` to `foo`. This an important concept in JavaScript, especially when you want to invoke a method at a later time, but in a different context. That could be a button click or timer, which want to access or even change data from a different context.
