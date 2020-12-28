---
title: "From Java to JavaScript - Why?"
date: "2018-11-21"
description: "When I started learning programming, my first language was C++. This was not an easy start, since you had to get used to pointers and references. In school/study I was taught Java, and I asked where the pointers are."
slug: "from-java-to-javascript-why"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
  - "react"
  - "react-native"
cover_image: "https://mariusreimer.com/images/jeroen-den-otter-591905-unsplash.jpg"
---

When I started learning programming, my first language was C++. This was not an easy start, since you had to get used to pointers and references. In school/study I was taught Java, and I asked where the pointers are. I was told that Java doesn't use pointers. This made it simple to me: I will now chose Java over C++. But there must be a reason why people 'still' use C/C++ and this was also easy: better control over the system, hardware access, low level stuff. So basically you can make a lot of damage with C++, if you don't know exactly what you do, whereas in Java you have a Virtual Machine executing your code.

Towards the end of my studies, around 2015-2016, JavaScript became very popular/hyped. This was probably driven by major players like Facebook's React or Airbnb, as well as Microsoft and TypeScript. People told me about JavaScript's bad performance, different versions and their syntax difficulties, and so on. Things like 'it will run on this browser, but maybe not on that, or it will only run on newer versions' were things I was told. This got me a bit scared, so I wanted to take it slowly on that.

## The main reasons why you should try JavaScript

It has a **simple syntax**, which is easy to learn and simple to understand. This of course has also disadvantages, for example you could leave out the semicolon. In fact it is pretty safe to leave it out. In terms of indentation you are also very free. A very strict programming language in that manner would be Python, which forces a specific number of white spaces (usually 4) to indicate a code block. In JavaScript (and Java), indentation is only used to make the code look pretty.

Furthermore there are **no types** in JavaScript. This means that you can declare and use your variables without any type definition (like string, integer, double, ...). This also makes the syntax more readable and easier to write (not my opinion).

`gist:reime005/0eae30c810bc09dc3cc0a9d79732d4b0`

This is a JavaScript example regarding types. You first assign an integer to the variable `test` and then reassign it with the string 'test'. That would not be possible in Java, since the language is statically typed. Statically typed means that a variable name is bound to a type and an object (or null). Dynamically typed means that a variable name is only bound to an object. So the main difference is that the binding between type and object happens at execution time, or already when compiling. There is also a difference between **strongly and weekly typed languages**. Compared to a weakly typed programming language, a strongly typed one simply does not allow the example above. Every developer should decide if he or she likes the kind of type system a language has. Often it is one of the most important facts when choosing a programming language. I, for my part was very very concerned about the type system. But in my opinion, a programming language is a tool to solve a problem or a need in general. If that means that I have to build a robot, I would probably not use Java for that case but rather C/C++ or Python, eventually Rust or GoLang.

Another reason for considering JavaScript is the incredibly **big open source community**. Next to the Python one, it is probably one of the biggest, in my opinion. This gives you a lot of opportunity for building things, and a general flexibility. For example, you could decide to use a different assertion library for your testing framework. In Java (at least that was my feeling), you 'only' had JUnit for unit/integration/component tests. When building user interfaces, the choice for components like animated lists or buttons is way higher in JavaScript than in Java.

You don't compile JavaScript. JavaScript is, other than Java but similar to Python, interpreted at runtime. This means that your code is not compiled into byte code or machine code. One of the major things with JavaScript is to make it run on all runtimes. Not every runtime/environment/browser can interpret the newest JavaScript standard, so it has to be **transpiled** backwards. That's mainly what JavaScript compilers like [Babel](https://babeljs.io) are for. It also does things like adding polyfills, which fills in missing features that are not available in all environments, for example old browsers. In general this increases development speed, in terms that you have faster deployments than in Java.

The **opportunities** of using JavaScript are huge. With one language you can write systems for complete web, mobile, desktop and server side applications. Especially in mobile development using React Native, you can build full-native mobile apps for Android and iOS, using only JavaScript. In the end the resulting application will include a js-bundle, which describes your app's behaviour and renders native components. One advantage is also the fact of sharing source code and have one team, rather than one team for each platform. With Java you also have many different ways of building things. The fraction of using Java for Enterprise applications is very huge. Frameworks like Jakarta EE (Java EE) or Spring / Spring Boot are widely used in big organizations. These frameworks include kind-of-complex concepts like Dependeny Injection (DI), which simply resolves the dependencies between your classes (instances). Basically a loose coupling that leads to better/easier testing. To conclude this, the [2018 Stack Overflow Developer Survey](https://insights.stackoverflow.com/survey/2018/#technology-frameworks-libraries-and-tools) summarizes the preferences of 100000 (100k) developers regarding coding. It shows, that many developers use and want technologies around JavaScript.
