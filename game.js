var canvas = null
var ctx = null
var x = 50
var y = 50

function paint(ctx) {
    //clear the canvas
    ctx.fillStyle = '#FFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#0F0'
    // rectangle position and size
    //           x   y  width height
    ctx.fillRect(50, 50, 10, 6)
}

function init() {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    paint(ctx)
}

window.addEventListener('load', init, false)