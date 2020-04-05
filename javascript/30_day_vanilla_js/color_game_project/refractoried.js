var colors = generateRandomColors()
var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(255, 255, 255)"]
var squares = document.querySelectorAll(".square")
var pickedcolor = pickcolor();
var messagedisplay = document.querySelector("#message")
messagedisplay.textContent = "TRY AGAIN"
var color_display = document.querySelector("#colorDisplay")
color_display.textContent = pickedcolor
var h1 = document.querySelector("h1")
var resetbtn = document.querySelector("#reset")
resetbtn.addEventListener("click", function() {
    colors = generateRandomColors()
    pickedcolor = pickcolor()
    color_display.textContent = pickedcolor
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }

})
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedcolor = this.style.backgroundColor
        if (clickedcolor === pickedcolor) {
            messagedisplay.textContent = "CORRECT";
            changecolors(clickedcolor)
            h1.style.backgroundColor = clickedcolor
        } else {
            this.style.backgroundColor = "#232323"
        }
    })
}

function changecolors(color) {
    //all squares change thier colors to look like correct colors
    for (var i = 0; i < squares.length(); i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * 6 + 1)
    return colors[random]

}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        //get random colors
        arr.push(RandomColors())
    }
    return arr

}

function RandomColors() {
    var r = Math.floor(Math.random() * 255 + 1)
    var g = Math.floor(Math.random() * 255 + 1)
    var b = Math.floor(Math.random() * 255 + 1)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}