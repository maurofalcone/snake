var canvas = null
var ctx = null

function paint(ctx) {
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