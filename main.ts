input.onPinPressed(TouchPin.P1, function () {
    if (action == 0 && input.isGesture(Gesture.ScreenDown)) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        game.addScore(1)
        action = -1
    } else if (action == 1 && input.isGesture(Gesture.LogoDown)) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        game.addScore(1)
        action = -1
    } else if (action == 2 && input.isGesture(Gesture.TiltLeft)) {
        game.addScore(1)
        action = -1
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    } else {
        action = -2
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        bluetooth.uartWriteString("GAME OVER")
        game.gameOver()
    }
})
let action = 0
bluetooth.startUartService()
action = -1
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
game.startCountdown(10000)
bluetooth.uartWriteString("GAME START")
music.stopAllSounds()
basic.forever(function () {
    if (action == -1) {
        action = randint(0, 3)
    } else if (action == 0) {
        bluetooth.uartWriteString("\"PUNCH\"")
    } else if (action == 1) {
        bluetooth.uartWriteString("UPPER CUT")
    } else if (action == 2) {
        bluetooth.uartWriteLine("BLOCK")
    }
})
