---
title: "From Java to JavaScript – Loops"
date: "2019-01-13"
description: "Loops are an essential part of programming languages. They are defined by doing a set of instructions in a repetitive manner."
slug: "from-java-to-javascript-loops"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
cover_image: "https://mariusreimer.com/images/freddie-marriage-68314-unsplash-copy.jpg"
---

Loops are an essential part of programming languages. They are defined by doing a set of instructions in a repetitive manner. Endless loops also have its right to be, so they run until the parent process interrupts them. Each repetition can be further limited by defining conditions at the beginning or end of the loop. If necessary, a loop may also be end in its middle. The simplest example of a normal loop is a counter. Sometimes it makes sense to run iteratively trough a list. An example for an endless loop could be a program's wait for new requests.

## Loops in Java

Java has three different types of loops: for, while and do-while. The most less used in my experience is the do-while loop, probably because you define the condition to break the loop in the end of it, which could make the programming experience difficult.

`gist:reime005/9c8dc6808b2b21f57800a14bde2d537f`

This example shows the different types of Java loops. The difference between the while and do-while is demonstrated. In a do-while loop the instructions are executed at least once, because the condition is checked at the end.

`gist:reime005/302a862680f6c3164d32701ae25df1bf`

There exist other types of loops like the for-in, which iterates through a list, with the difference that you don't handle a counter variable / iterator but the element of the list. The example above demonstrates that.

## Loops in JavaScript

JavaScript has the same types of loops like Java. Newer language standards have elements like the for-in or for-of statements, introduced in [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements) (ES6).

`gist:reime005/75eaba4ac3fb8deb453743556dd5f053`

This example show the different types of JavaScript like in the Java code above. You could also use functionality like the `.forEach(callback(value, index))` array prototype function.

Comparing the for/do/do-while example: Executing the Java code took roughly **25% more time** on my machine than the JavaScript code, most likely because of the JVM). Note that this is only a side information and not a proof of performance.
