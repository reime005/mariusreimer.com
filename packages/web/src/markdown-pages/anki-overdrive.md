---
title: "Anki Overdrive"
date: "2017-10-05"
description: "Anki Overdrive is an intelligent battle racing system that lets you explore the power of artificial intelligence (AI)"
slug: "anki-overdrive"
categories:
  - "blog"
tags:
  - "anki-overdrive"
  - "artificial-intelligence"
  - "bluetooth-low-energy"
  - "java"
cover_image: "https://mariusreimer.com/images/track-x.jpg"
---

# A quick Overview about Anki Overdrive

I will give you a quick overview about [Anki Overdrive](https://www.anki.com/de-de). It is an intelligent battle racing system that lets you explore the power of **artificial intelligence** (AI).

## #1: The Hardware is dumb

Each vehicle only consists of a 50MHz processor, infrared camera, Bluetooth Low Energy controller, an approx. 30 minutes battery and a rear wheel drive. The infrared camera is used to scan the infrared markings on the track pieces at 500Hz (each 2ms) to determine their position.

**But**: The vehicles do not know if there is something around them - they just decode the track markings and exchange information with the server.

Software decides whether a vehicle should change its motion.

## #2: You can program it

The common use case is to use the included Android and iOS apps. In addition to that, Anki [open sourced](https://github.com/anki/drive-sdk) its communication protocol, based on Bluetooth Low Energy. It also comes with a C based command line tool, which is easy to use. In short: it lets you communicate with the vehicles (change their speed in mm/sec, change their lane, ...).

If you want to write the software for controlling the vehicles, you must find a Bluetooth Low Energy SDK. For Java, there is [tinyB](https://github.com/intel-iot-devkit/tinyb), which is an API for BLE GATT, using BlueZ over DBus.

## #3: You can print your own tracks

If you do not want to buy a new track, print it. There is an [open source](https://github.com/NoveroResearch/tragediy) software for this use case. I have tested it - successfully.

But: Print it on a large paper and be careful about sticking it together precisely! Otherwise, the vehicles may delocalize.

`youtube:https://www.youtube-nocookie.com/embed/KVeH33uwLWU`

## #4: There is a vehicle test mode

Pressing the grey button on the downside quick and often (should be 5x) causes the vehicle to drive in a police-like behavior. You can see this mode in the video above.
