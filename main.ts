input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(200)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(1000)
    basic.clearScreen()
    led.plot(4, 0)
    basic.pause(1000)
    basic.clearScreen()
})
