def on_pin_pressed_p1():
    global action
    if action == 0 and input.is_gesture(Gesture.SCREEN_DOWN):
        music.start_melody(music.built_in_melody(Melodies.BA_DING), MelodyOptions.ONCE)
        game.add_score(1)
        action = -1
    elif action == 1 and input.is_gesture(Gesture.LOGO_DOWN):
        music.start_melody(music.built_in_melody(Melodies.BA_DING), MelodyOptions.ONCE)
        game.add_score(1)
        action = -1
    elif action == 2 and input.is_gesture(Gesture.TILT_LEFT):
        game.add_score(1)
        action = -1
        music.start_melody(music.built_in_melody(Melodies.BA_DING), MelodyOptions.ONCE)
    else:
        action = -2
        music.start_melody(music.built_in_melody(Melodies.FUNERAL), MelodyOptions.ONCE)
        bluetooth.uart_write_string("GAME OVER")
        game.game_over()
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

action = 0
bluetooth.start_uart_service()
action = -1
music.start_melody(music.built_in_melody(Melodies.NYAN), MelodyOptions.ONCE)
game.start_countdown(10000)
bluetooth.uart_write_string("GAME START")
music.stop_all_sounds()

def on_forever():
    global action
    if action == -1:
        action = randint(0, 3)
    elif action == 0:
        bluetooth.uart_write_string("\"PUNCH\"")
    elif action == 1:
        bluetooth.uart_write_string("UPPER CUT")
    elif action == 2:
        bluetooth.uart_write_line("BLOCK")
basic.forever(on_forever)
