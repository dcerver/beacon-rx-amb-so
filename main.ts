radio.onReceivedNumber(function (receivedNumber) {
    Senyal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(Senyal, -95, -42, 0, 9),
    9
    )
})
let Senyal = 0
radio.setGroup(20)
music.setVolume(255)
basic.forever(function () {
    music.playTone(523, Math.map(Senyal, -95, -42, 200, 1))
    basic.pause(50)
})
