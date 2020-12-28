---
title: "Binding call and apply on JavaScript"
date: "2019-08-31"
description: "Recently, I had the issue that I was confronted with JavaScript's `call` and `apply`. Since I forgot where the difference is or why you may use it, I learned it."
slug: "binding-call-and-apply-on-javascript"
categories:
  - "blog"
tags:
  - "javascript"
cover_image: "https://mariusreimer.com/images/luis-rocha-A3W_QpG9xIE-unsplash.jpg"
---

Recently, I had the issue that I was confronted with JavaScript's `call` and `apply`. Since I forgot where the difference is or why you may use it, I learned it.

Generally, both functions are a prototype of any JavaScript `Function`. This means, you can invoke any function-object with `call` and `apply`. With "function-object" I mean a function as an object, so without the `()`).

In short, `call` and `apply` are both used to invoke functions, where [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) takes function parameters (arguments) as a single array, and [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) as an endless list of arguments.   

## Example

A code example always helps to understand things. The following example shows a very simple function that takes two arguments: `a` and `b`. The function logs their sum, as well as its `this` context.


`gist:reime005/16d68d0b03acbe78976a4fa4dc5f03f4`

In the very first and last of the three calls, `this` is the `global` object. It depends on where you execute it, here it was in a node environment. If you would try this in a browser, you would probably see the the `window` object.

Now, with the `call` call in line 10, you actually call the function with `{ example: "test" }` as the `this` object. As the second argument, you pass the function arguments as a single array `[1, 2]`. The `apply` call in line 14 does not pass any `this` object, leading to no context change. There, the arguments are passed as single objects (`1, 2`).

In relation to `call`, you could also use JavaScript's `bind` in order to create a new function with a different `this` context. It takes the same arguments and causes the same outcome as with `call`: `add.bind({ example: 'test' }, 1, 2)`.

## A Bigger Example

The following example shows the usage of `call` and `apply` in a more complex and realistic scenario. What the code does is printing the `name` and `age` of its `this` context, and additionally prints some extra information passed as an argument.

`gist:reime005/bb1a21f139b0f5dba8390a0bdd7975c2`

Now, the first call in line 12 is the way most are probably used to. It prints its defined values. Now, line 15 overrides the `this` object with the `global` object, leading to `undefined`. Line 24 is also interesting, in which the object `{ name: "Marius", age: 15 }` is passed, leading to a different outcome.

## Conclusion

JavaScript functions can be called with `apply` and `call`. Both can change its function context as the first argument. The only difference between them is the syntax of the second (and following) argument(s). The reason why you use one or another (or at all) lies in the nature of JavaScript, reusing code, code privacy (hiding variables) or just a personal preference.
