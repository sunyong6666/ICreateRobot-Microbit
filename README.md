## Introduction
Coding Kit for BBC micro:bit is based on the micro:bit main control board and includes sensors, actuators, and other accessories. The set is perfectly designed to integrate with LEGO parts, making it ideal for students to create micro:bit-based technology and creative projects. This document focuses on the main control board, sensors, actuators, and related software extensions.
Product link https://www.icrobot.com/www/cn/index.html#/product/detail?id=4

https://makecode.microbit.org/#tutorial:28423-51494-93589-36576

## Code Example

input.onButtonPressed(Button.A, function () {
    Microbit.MotorRun(Microbit.enMotors.M2, 0)
})
basic.forever(function () {
    Microbit.ledRBrightness(Write_pin.w0, true)
    basic.pause(100)
    Microbit.ledRBrightness(Write_pin.w0, false)
    basic.pause(100)
})


## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)
