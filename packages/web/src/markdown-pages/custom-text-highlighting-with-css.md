---
title: "Custom Text Highlighting with CSS"
date: "2020-04-26"
description: "Some websites do different things to highlight specific text phrases. This could be text that the user should pay attention at (like a warning), or is just very important (like an item price). I was curious on how to do that."
slug: "custom-text-highlighting-with-css"
categories:
  - "blog"
tags:
  - "css"
  - "html"
cover_image: "https://mariusreimer.com/images/Screenshot-2020-04-26-at-17.58.28.png"
---

Some websites do different things to highlight specific text phrases. This could be text that the user should pay attention at (like a warning), or is just very important (like an item price). I was curious on how to do that.

The solution is very simple: via CSS, background image and inline span. First, you need to create the image that you want to put as a highlight behind your text. I just used Gimp and a brush tool until I was okay with the result. The image has to be exported as a scalable vector graphic (**svg**).

After the image is created, you could either keep it as a file or convert it to a base64 string to be used within css. Important is, that the `background-image` resizes by covering the element, does not repeat and is centered.

`gist:reime005/22e59f70113732f3e17a59c78160db2b`

With some additional `padding` you can adjust the free space of the image a bit.
