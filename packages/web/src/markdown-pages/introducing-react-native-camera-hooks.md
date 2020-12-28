---
title: "Introducing React Native Camera Hooks"
date: "2019-05-01"
description: "React Native Camera Hooks that adds React Hooks to the react-native-camera library."
slug: "introducing-react-native-camera-hooks"
categories:
  - "blog"
tags:
  - "javascript"
  - "react"
  - "react-native"
  - "typescript"
cover_image: "https://mariusreimer.com/images/logo.png"
---

When I tried to get React Hooks working with [React Native Camera](https://github.com/react-native-community/react-native-camera), I came to the point of creating a separate library for that, called [React Native Camera Hooks](https://github.com/reime005/react-native-camera-hooks). If you want to use the camera with functional components, there is gonna be stateful code involved. The library lets you pick parts of the state that you need for your application. Functions that provide access to the camera itself (recording video, taking picture) are abstracted away so that you don't have to handle the reference anymore. TypeScript support is included. I wrote more about React Hooks and why they are useful in [another article](https://mariusreimer.com/2019/05/hooks-in-react-native/).

# How your camera component can look like

A very simple example of how a functional component can look like:

`gist:reime005/f47da0ccb330b0fe098de3eb4c688321`

As you can see, hooks can make the component very compact. It removes a lot of code that was necessary to toggle between the front/back camera or handling the camera ref, for example. You can also decide to pick functionality like useZoom() only.

## Features

In the following I will describe all features that the library includes. The main hook is useCamera, which includes the following hooks:

- useCamera: Includes all camera hooks which you can find here
- useZoom: Zoom feature including zoomIn and zoomOut
- useToggleFacing: Toggles between the front and back camera
- useAutoFocus: Toggles between the auto focus being 'on' or 'off'
- useWhiteBalance: Toggles between the predefined white balance values you can use for the camera preview
- useFlash: Toggles between the predefined flash modes 'off', 'on', 'auto' and 'torch'
- useAutoFocusTouch: Touch to focus feature, that includes the current focus point and a callback used when touching on a View
- useTextRecognition: Text recognition feature, that includes a callback when receiving text blocks
- useFaceDetection: Face recognition feature, that includes a callback when receiving faces
- useBarcodeDetection: Barcode detection feature, that includes a callback when detecting barcodes
- takePicture: Takes a picture without the need of using the camera ref
- recordVideo: Records a video without the need of using the camera ref
- stopRecording: Stops the recording of a video without the need of using the camera ref
- pausePreview: Pauses the preview (stops it) without the need of using the camera ref
- resumePreview: Resumes the preview (continues it) without the need of using the camera ref

## Contribution

react-native-camera-hooks is open source and available via NPM. I'm always open and highly appreciate contributions to the repository. You may also copy necessary hooks and use them in your project, so you won't need to install a separate library.
