function gelb (num: number) {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
function grün (num: number) {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
function rot (num: number) {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
function grün_blink (num: number) {
    for (let index = 0; index < 4; index++) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(500)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(500)
    }
}
let strip: neopixel.Strip = null
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    let phase_kurz = 0
    let phase_lang = 0
    rot(1)
    basic.pause(phase_lang)
    gelb(1)
    basic.pause(phase_kurz)
    grün(1)
    basic.pause(phase_lang)
    grün_blink(1)
    gelb(1)
    basic.pause(phase_kurz)
})
