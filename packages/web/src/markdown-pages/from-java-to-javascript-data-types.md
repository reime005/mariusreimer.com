---
title: "From Java to JavaScript - Data Types"
date: "2018-11-30"
description: "When it comes to data types, programming languages can handle them in a different way. Of course their allocation size is often bound to the underlying execution environment (Java Virtual Machine or JavaScript runtime)."
slug: "from-java-to-javascript-data-types"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
cover_image: "https://mariusreimer.com/images/nathan-dumlao-298337-unsplash.jpg"
---

In [my last post](https://mariusreimer.com/2018/11/from-java-to-javascript-why/) I mentioned some of the major runtime differences between Java and JavaScript and what I my questions about the setup were. When it comes to data types, programming languages can handle them in a different way. Of course their allocation size is often bound to the underlying execution environment (Java Virtual Machine or JavaScript runtime). That means these systems 'decide' for you how many bits a primitive data type should have in memory. This is necessary mainly because you may save resources, but you also need to be aware of the maximum / minimum possible value of a number for example. Otherwise, things like buffer overflow or underflow can happen, which may be a vulnerability.

A very famous example is the [Ariane 5 disaster](https://blog.bugsnag.com/bug-day-ariane-5-disaster/). The problem was a buffer overflow. A 16-bit number reached its maximum possible value of 32768 (2^16  including negative range), overflew and got to be -32767, which caused the rocket to flip upside down.

**Java** has 8 [primitive data types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html): byte, short, int, long, float, double, boolean and char. Since the language is statically typed, you must declare them before they can be used. The type `int` is 32-bit signed, followed by `short` (16-bit) and `byte` (8-bit). So why would someone use a byte-variable? Sometimes it makes sense in the case that you know exactly that the value will never reach its maximum (127) or minimum (-128). This could happen with specific counters, or you use byte in an array, where it can safe memory. The type `long` is the largest integer (64-bit). For floating point numbers you may use `float` (32-bit) or `double` (64-bit), but you need to be careful when working with high-precision applications. Computers always have rounding errors, which can not be prevented, but you can keep them small. That's why you should always take the `java.lang.BigDecimal` class instead. Lastly, there is the usual `boolean` type, as well as `char`. You could also count `java.lang.String` since it is a commonly used class.

**JavaScript** (ECMAScript 2015 or ES6) has 7 (primitive) data types: boolean, null, undefined, number, string and symbol. Since the language is weakly and dynamically typed, you do not explicitly declare a variables data type. Different types of values may be assigned (overwritten) to a variable, which would not be possible in Java. To explain what this all means, have a look at the following:

`gist:reime005/c147c367ffbdfb05055f4a9a04da2c14`

This is a good example for Dynamic Types in JavaScript. In Java you would have the default value `null` if we assume that `c` is a string. The interesting fact here is that the variable `c` changes its type dynamically from `undefined` to `number` to `string`.

For the `object` data type, the JavaScript Object Notation (JSON) is being used. Look at the following:

`gist:reime005/db2cb86314290d34e100192a4bf85c37`

JSON is probably the most common data type in the JavaScript world, since we can bundle information in a very smart way. In Java you would probably create a separate class for this (or Map in some cases). In JavaScript, the problem can appear that you access a member of `d` which is not defined. This happens often when you have nested object `d.d.computation`.

### The JavaScript strict mode;

Without the `"use strict";` directive you could, depending on the JavaScript version, do the following:

`gist:reime005/b952a56148fc7751b4cd6a6186031baf`

The variable `h` is used without being declared with `var`, `let` or `const`. The good thing is that most static analyzers already find those issues without the directive, but it is better to know that something exists.
