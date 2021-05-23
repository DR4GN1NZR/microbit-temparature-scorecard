let tmp = 0
input.onButtonPressed(Button.A, function () {
    tmp += -1
    if (tmp < 18) {
        basic.showString("" + (tmp))
        basic.showString("C")
    } else {
        basic.showString("" + (tmp))
        basic.showString("H")
    }
})
input.onButtonPressed(Button.AB, function () {
    tmp = 15
})
input.onButtonPressed(Button.B, function () {
    tmp += 1
    if (tmp < 18) {
        basic.showString("" + (tmp))
        basic.showString("C")
    } else {
        basic.showString("" + (tmp))
        basic.showString("H")
    }
})
