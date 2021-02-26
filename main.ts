input.onButtonPressed(Button.A, function () {
    if (action == 0 && input.isGesture(Gesture.ScreenDown)) {
        music.ringTone(784)
        game.addScore(1)
        action = -1
        music.stopAllSounds()
    } else if (action == 1 && input.isGesture(Gesture.LogoUp)) {
        music.ringTone(784)
        game.addScore(1)
        action = -1
        music.stopAllSounds()
    } else if (action == 2 && input.isGesture(Gesture.TiltLeft)) {
        music.ringTone(784)
        game.addScore(1)
        action = -1
        music.stopAllSounds()
    } else {
        soundExpression.sad.play()
        action = -2
        bluetooth.uartWriteString("GAME OVER")
        game.gameOver()
        music.stopAllSounds()
    }
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
let action = 0
bluetooth.startUartService()
basic.pause(5000)
soundExpression.twinkle.play()
action = -1
game.startCountdown(100000000)
bluetooth.uartWriteString("START GAME")
music.stopAllSounds()
basic.forever(function () {
    if (action == -1) {
        action = randint(0, 2)
    } else if (action == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
        bluetooth.uartWriteString("PUNCH")
    } else if (action == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        bluetooth.uartWriteString("UPPER CUT")
    } else if (action == 2) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
        bluetooth.uartWriteString("BLOCK")
    }
})
