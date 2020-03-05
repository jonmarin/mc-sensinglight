basic.forever(function () {
    led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P0) - 511,
        512
    )
})
// Add your code here
