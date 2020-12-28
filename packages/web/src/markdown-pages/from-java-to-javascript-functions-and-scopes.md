---
title: "From Java to JavaScript - Functions and Scopes"
date: "2019-01-06"
description: "When it comes to functions, Java and JavaScript have some big differences. Since Java 8 you have Lambda expressions, which give you the chance to pass functions as a method argument, if the parameter is an interface. In JavaScript, every function is an object."
slug: "from-java-to-javascript-functions-and-scopes"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
cover_image: "https://mariusreimer.com/images/joshua-brown-784409-unsplash-copy.jpg"
---

In [my last post](https://mariusreimer.com/2018/11/from-java-to-javascript-why/) I wrote about data type differences between Java and JavaScript. When it comes to functions, Java and JavaScript have some big differences. Since Java 8 you have Lambda expressions, which give you the chance to pass functions as a method argument, if the parameter is an interface. In JavaScript, every function is an object. This means, you can pass functions to other functions, or create a function that takes another function as an argument (high order component / HOC). In the end, both languages have functional programming characteristics, with Java being more object oriented.

Functions in general have (or should have) the purpose of doing one task of taking some input and returning some output. They may also be used to collect functionality that have the same intent, like setup and connecting to a database. Furthermore, functions can provide privacy, in the matter that only some code has access to that code (for example: anonymous functions). Typically, functions should always return the same output for the same input (pure functions), so that they don't have side effect and are predictable and testable.

## Functions in Java

In Java, every function is bound to a class. This means, you cannot simply create a function for itself - you must add it to a class. There are different types of functions, like class functions (static), abstract functions (for inheritance) or class functions. Furthermore, class functions can be given a scope/visibility type (private, public, protected) which will be explained later. This brings us to the basic method template:

`gist:reime005/88b54088e6dde6175ce799c6be8325e1`

So the basic method has the following options:

- scope - (optional) defines the visibility of the method (either public, private, protected). If nothing is defined, it is default public.
- modifier - (optional) defines the type of the method (static, final or abstract). Note that constructions like `static final` are possible and definitely make sense in some cases. If nothing is defined, the method is bound to the instance of the class on default.
- returnType - (mandatory) defines the type the method returns. It can be basically any primitive data type or object. If nothing has to be returned, you can specify `void`. 
- arguments - (optional) define a list of arguments including their type to pass to the function.

There are types of functions, which have a special use case. Especially in Java, you have the getter and setter methods, which simply do what they say: set and get values from an instance. They exist for privacy reasons, to prevent parts of your code to access instance variables directly. Specifically setter could be used to check if the values you want to set is valid, or to manage multi threaded access. Same counts for getter, where you maybe don't want to return a raw date (that you persisted in a database), but rather like to return it in a special format. This concept is also part of a clean code paradigm, which prevents duplicate code, not too long functions and more. 

## Scope Basics in Java

Java is organized in the form of classes and packages, for which you can specify the scopes of your variables and functions at compile time. There are basically [three types of scopes](https://www.geeksforgeeks.org/variable-scope-in-java/) you can differentiate: class, method and block level scope. 

Member variables relate to a **class level** scope, meaning that if you define a variable in a class (not inside a class function), this variable can be accessed inside this class. Depending on the modifier you set, the variable (or function) may also be accessible from outside the class. Classes can also be package-hidden, when you define no modifier for it: `class Test {}` rather than `public class Test {}`.  

If you define a private constructor for a class, this means that you cannot instantiate it, thus there exist only one instance of that class (singelton). In fact, the instance is created and saved inside the singleton class. This might be useful for general settings or assets (/images/videos) loading in your application. 

Local variables relate to a method or block level scope, meaning that if you define a variable inside a method or block, cannot be accessed from outside:

`gist:reime005/b75a3ebc9db41cf316ba295646a7e870`

You can run this example with `javac Test.java` and then `java Test`. The main point here is that it won't compile, since line 13 tries to access the block-scoped variable `nonsense`. Furthermore, it shows the concept of private member variables (`name`), which can only be set using a publicly accessible `setName` method. 

There is way more to add for Scopes in Java, but this would be out of scope for this article.

* * *

## Functions in JavaScript

In JavaScript, a function is always an object. This opens the possible to pass functions via function parameters, return functions from functions and more. Compared to Java, JavaScript is a functional programming language naturally. There are some concepts that include classes and inheritance. But in the end, some transpiler like Babel will transpile the code into functions. Check out the Babel live compiler [here](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAqCmEAu0De0BQ1oQPYFt4BZeJAC1wBMAKPQgNTBAFd4BKNLbaYXAOzwh4AOhC4A5rQLxGLeNADU0AOTQALACZlbANyZsAXwxGMfeAHc4iJNTbC6xUhRrKk1gFzagA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=).

Check out this example:

`gist:reime005/59ec4c3e7177c197301eed0321afc6da`

It shows three different ways of creating a function. The second one is called [arrow function](http://es6-features.org/#ExpressionBodies) and is my favourite, since it is really concise. Note that this is only available since ECMA Script 2015 (ES6), and will probably [be transpiled anyways](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBADgJwJZigZRAWwKZQBYoDmAjDALwwpwCusZAfDKJCADbYB0rIhAFFbQCUAbiA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=true&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=). 

A very important concept in JavaScript are closures. Basically, they are local or private functions, mainly to provide privacy (as mentioned in the beginning of this article). Another important concept are closure functions, described later.

## Scope Basics in JavaScript

Similar to Java, objects can have (two) different scopes. You can differentiate between global and functional scope. It is not always as simple as in Java, where you may define a variable inside a function to give hide it from the outside. See the `"use strict";` directive.

Also, consider the following example:

`gist:reime005/d445effbb89bb68d7267ae231c55f178`

It demonstrates the use of **closures** and scopes. You can see a closure as a function that has access to its parent scope, even after the parent function has been closed. In this example, `str` is hidden in the `chain` method, which only runs once. It also returns a function that has access to its outer/ parent scope `str`. On this way, the `chain` method has a private variable. There is way more to add for Scopes in JavaScript, like the `let` keyword (ES6), which is like a block scope, or object prototypes.

## The "use strict" Directive

Understanding scopes in JavaScript is important. Depending on the type of code you write (module code is always strict), this directive is being used implicitly. But sometimes you have to set it yourself **at the beginning** of a file, in order to prevent the use of undeclared variables. Consider the following example:

`gist:reime005/96f175a126fa8d177ced7ba44e843db4`

It demonstrates the use of the strict mode. You could execute this code using `node` locally. If you comment-out the first line, the program would run.
