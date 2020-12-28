---
title: "From Java to JavaScript - Callback and Promise"
date: "2019-02-02"
description: "Java and JavaScript have some things in common, but also do most of them differently. One of them is the way of handling asynchronous side effect or basically operations that may take a while before you can expect a result."
slug: "from-java-to-javascript-callback-and-promise"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
cover_image: "https://mariusreimer.com/images/nordwood-themes-524137-unsplash.jpg"
---

Java and JavaScript have some things in common, but also do most of them differently. One of them is the way of handling asynchronous side effect or basically operations that may take a while before you can expect a result. These operations usually block the executing program, which means they have to be handled in a special way. Otherwise, the user might have a bad experience, especially if graphical elements are involved which start to get laggy.

## Callbacks and asynchronous code in Java

In Java, you have access to **multiple threads** in your program. So you can shift code that is computationally high in load to a new thread. Threads share a common resource (like a part of memory), and they can run simultaneously. This may improve the effectiveness of your code. Usually everything you do that takes a time (like client/server communication) is done in a separate thread. The main thread or UI thread is the one that should not have blocking operations on.

Modern Java Web Frameworks usually have built-in techniques to handle multithreading anyway. Doing it by-hand is often considered to be bad practice, since it is easy to break something. This means that there is something like a thread pool in your application server and you put an annotation like `@asynchronous` to the method.

### Synchronous Java Example

`gist:reime005/46f081e1abc1ac39b33c5ecfbdce4f88`

The synchronous example demonstrates the use of event listeners which is part of the **observer pattern**. At some point (line 27-29), we register an event listener, that will be notified from another point in our program (line 23). The operations are synchronous, meaning that everything will run on the main thread.

Please note that the Java examples make use of lambda expressions, which require at least the Java Development Kit (JDK) 8. You can see one lambda expression in line 27-29. In short, it gives you the opportunity to write short, concise one-method interface code.

The alternative to lambda would be to create an object that implements the `ISomeEventListener` interface. With a lambda expression, this looks way better in my opinion:

`gist:reime005/464884c2727568ed4e36fbda608d3325`

### Asynchronous Java Example

`gist:reime005/d138a5f92b41bb5de25966534e2b3d9a`

The asynchronous example demonstrates the use of event listeners, too. Line 10 shows the creation of a new thread including lambda expressions (the object has to implement the `Runnable` interface. These operations are non-blocking, meaning that the main thread will not wait for the operation to complete.

## Callbacks and asynchronous code in JavaScript

In JavaScript, there is no multithreaded access. One of the reason why is that the language started to be used in the web browser only, and was intended for small, quick running code. Computationally intensive code was intended to run on a remote server. However, there are things like [Webworkers](https://html.spec.whatwg.org/multipage/workers.html#a-background-number-crunching-worker) which allow you to run code besides independently of your UI stuff. But Webworkers are more a multi-process than multi-thread thing, because they do not really share a (heap) memory or in other words shared data objects.

Callbacks in JavaScript can have a really great use. Listeners are a good example for that. You could pass an `innerMethod()` to an `outerMethod()` so that every time the `outerMethod()` has a result or something to notify, it can invoke the `innerMethod()`. Probably the most famous example in JavaScript is `setTimeout(code, msTime)`. This will execute `code` after a given time in milliseconds has passed.

Same applies to `setInterval(code, intervalTimeMs)`, which periodically invokes `code`. Be sure to clear the timer if not used anymore:

`gist:reime005/2b0ae19bfdb9892582ecee036d42e172`

Have a look at the following example that demonstrates the use of async / await and **thenable** code, which has the same semantics but different syntax:

`gist:reime005/b57e896f4e23f3e77c70c89f2fc8791b`

As you can see, the code fetches some data from the [Star Wars API](https://swapi.co/). The important thing to notice here is that line 5 does more-or-less the same as line 17/18. The keyword `await` simply means that it waits (pauses the execution) for the Promise to resolve (fulfill, it could also fail / throw) and returns its thenable value. Async / await has been included in the ES6 (ECMA Script 2015).
