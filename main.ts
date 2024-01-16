basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 0)
    led.plotBarGraph(
    pins.pulseIn(DigitalPin.P1, PulseValue.High),
    0
    )
    basic.pause(100)
})
