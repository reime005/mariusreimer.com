---
title: "Hoisting - The thing about var in JavaScript"
date: "2019-06-17"
description: "Hoisting is a really important concept (or rather behaviour) if you work with JavaScript. It is all focused on the 'var' key word."
slug: "hoisting-the-thing-about-var-in-javascript"
categories:
  - "blog"
cover_image: "https://mariusreimer.com/images/volkan-olmez-1352-unsplash-copy.jpg"
---

Hoisting is a really important concept (or rather behaviour) if you work with JavaScript. It is all focused on the `var` key word. When I started learning JavaScript (I come from a Java and C world), I was 'taught' to only use `let` and `const`. At some point you may need to touch 'var' code, could be via a library which you have to fix or long living code. That's when it can become dangerous if you don't know the behaviour of hoisting. It may also help you in interviews. It is kind of similar to the C89 'declare variables at the beginning of a scope block' thing, but not really.

In short, [Hoisting in JavaScript](https://www.w3schools.com/js/js_hoisting.asp) means that declarations, including function declarations, are moved to the top/beginning of the code block. So you can declare a variable with `var` and use it before that line. Initializations are not hoisted, so you could run into `undefined is not...` issues if you are not careful.

In this example you see the most important points on JavaScript hoisting. If you didn't know, in JavaScript, every variable you declare, is initially set to `undefined`. Compared to Java and other strongly and statically typed languages (where an `int` may be set to 0 initially), this is different. The point about this example is, that the declaration is moved to the top of the block. For the call in line 7 this can become really dangerous, because you could think that the value is still 42.

Compared to the usual function declaration, the named [function expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function) in this example looks comparably strange. It is a special hoisting case, where the function's name doesn't get hoisted. In my opinion you should rather use named function expressions with arrow functions.

Hoisting is a not-so-well known concept anymore, since the `let` and `const` keywords were introduced in the ES6 standard. Especially for redeclaring variables, the `var` keyword can be confusing and a potential error source. In most modern JavaScript projects you will use linters, which have specific rules to 'enforce' `let` instead of `var` for example.
