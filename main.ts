let tmp = 0
input.onButtonPressed(Button.A, function () {
    tmp += -1
    if (tmp < 18) {
        basic.showString("C")
    } else {
        basic.showString("H")
    }
})
input.onButtonPressed(Button.B, function () {
    tmp += 1
    if (tmp < 18) {
        basic.showString("C")
    } else {
        basic.showString("H")
    }
})
basic.forever(function () {
	
})
