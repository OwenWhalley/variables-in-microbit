// Created by: Owen Whalley
// Created on: 2022/09/27
// 
// This program increases the counter by 1 every time you press A.
input.onButtonPressed(Button.A, function () {
    counter += 1
})
// Created by: Owen Whalley
// Created on: 2022/09/27
// 
// This program shows the number on the counter every time you press A+B.
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
// Created by: Owen Whalley
// Created on: 2022/09/27
// 
// This program decreases the counter by 1 every time you press B.
input.onButtonPressed(Button.B, function () {
    counter += -1
})
// Created by: Owen Whalley
// Created on: 2022/09/27
// 
// This program sets the counter's value to 0 on start.
let counter = 0
counter = 0
