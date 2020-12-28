---
title: "From Java to JavaScript - Runtime"
date: "2018-11-26"
description: "When it comes to executing your program code, there are many differences between programming languages. In general, code can be compiled into a machine readable language which is optimized for that specific environment (specifically the processor architecture)."
slug: "from-java-to-javascript-runtime-differences"
categories:
  - "blog"
tags:
  - "java"
  - "javascript"
  - "node"
cover_image: "https://mariusreimer.com/images/isis-franca-641217-unsplash.jpg"
---

In [my last post](https://mariusreimer.com/2018/11/from-java-to-javascript-why/) I mentioned my experience switching from Java to JavaScript and why I did it. When it comes to executing your program code, there are many differences between programming languages. In general, code can be compiled into a machine readable language which is optimized for that specific environment (specifically the processor architecture). The advantages/disadvantages are mostly performance- but also security-like. Another type of code will be intepreted by the target environment, meaning that it won't be compiled, but read as you code it. This mainly increases your development speed, resulting in faster prototyping and deployment cycles.

Java is being compiled into byte code and evaluated by the **Java Virtual Machine** (JVM). This puts Java as a type between a language like C/C++ and JavaScript/Python. This does not mean that any of the language are better or worse. But in fact, most of the JVMs are written in C++ (yes, there are multiple). To note is that not only Java byte code can run a JVM, but in fact any language that compiles into byte code. The virtual machine's internal architecture handles things like memory management (no direct access), meaning that there are symbolic references rather than pointers to memory. It also has Garbage collection as a system that automatically destroys class instances that are not used anymore. Furthermore, primitive data types like integer are also guaranteed, which, in comparison to C/C++ can have a different size according to the runtime environment.

JavaScript is being interpreted and executed by a **JavaScript runtime**. Each browser for example has it's own JavaScript runtime engine. For instance, Google Chrome used the V8 Engine. It is written in C++ and follows the ECMA script standard, which is a standardised language definition for JavaScript. Since [V8 is open source](https://github.com/v8/v8), you could integrate it into your own program, like a web browser. In fact, the JavaScript server-side framework Node.Js uses the V8 implementation to run JS code.

## So where to start?

Depends on what you want to work on. But in any way, if you prefer an IDE over terminal work environments (vim, emacs), you could for example use **Visual Studio Code** (personal favorite), Atom, or WebStorm. You also need `node` installed, as well as a package manager (`npm` or `yarn`). Yarn claims to be faster, more reliable and secure than npm. It's main different to npm was the lock file, which is essentially used to reconstruct/rebuild/resolve the exact project dependencies for your project.

### package.json

The core of your project configuration is the `package.json` file. It specifies every dependency your project is using, as well as configurations for testing, scripts and more. When you run `npm install` in the root project folder, the process looks for the package.json file and resolves its dependencies. It puts them (as well as sub-dependencies) into a `node_modules` folder in that same directory. You can add scripts to your package.json file, for example to start/test/deploy your project. Sometimes a `postinstall` scripts-hook is necessary which you can also add there.

A good example for a scripts-hook is one that invokes a linter before each `git commit`. On this way you always have correctly formatted code on your repository.

Other **lifecycle scripts** are `npm start` or `npm test`, which are not executed automatically on installation. Before you publish your project to the npm repository using `npm publish`, you might find it necessary to run a linter to format your code and then run your tests.

If you see a caret `^` before a dependency in your package.json file, it means that the package install process may use [any version that is compatible](https://docs.npmjs.com/files/package.json#dependencies) with the specified one. This is why there is a lockfile as mentioned before. When you build a library for people to use in their project / package.json, you don't necessarily want them to install dependencies that they need for development. [Thats what](https://docs.npmjs.com/files/package.json#devdependencies) the `devDependencies` are for.

#### Local vs Global Dependencies

Dependencies can be installed globally or locally. The difference is that local dependencies only available in this project, and can be executed from the `node_modules/.bin/` folder. They are made available in the `PATH`, so you can run them by name instead of pointing to that hidden binary folder:

`gist:reime005/fe2de8366839b0138800d16109bc2a4b`

In this example, `npm run format` invokes the `node_modules/.bin/eslint` binary, which is a locally installed dependency. This has the advantage that all team members use the same specific version for that project.
