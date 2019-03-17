var canvas = null
var ctx = null
var x = 0
var y = 0
var lastPress = null 

window.requestAnimationFrame = ( function () {
    return window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17)
        }
}())

function act() {
    x += 2
    if( x > canvas.width)
        x = 0
    if( y > canvas.height)
        y = 0
}

function run() {
    window.requestAnimationFrame(run)
    act()
    paint(ctx)
}

function paint(ctx) {
    //clear the canvas
    ctx.fillStyle = '#FFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#0F0'
    // rectangle position and size
    //           x   y  width height
    ctx.fillRect(x, y, 10, 6)
}

function init() {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    run()
}

document.addEventListener('keydown', function (evt) {
    lastPress = evt.which
    }, false)

window.addEventListener('load', init, false)


