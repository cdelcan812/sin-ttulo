basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
