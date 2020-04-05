var p1btn = document.querySelector("#p1")
var p2btn = document.querySelector("#p2")
var p1dislay = document.querySelector("#p1display")
var p2dislay = document.querySelector("#p2display")
var p1score = 0;
var maxscrore = 5;
var p2score = 0;
var gameover = false
var resetbtn = document.querySelector("#reset")
var scrbtn = document.querySelector("#score")
var scr = document.querySelector("#scr")
scrbtn.addEventListener("change", () => {
    maxscrore = Number(scrbtn.value);
    scr.textContent = maxscrore
    gameover = true
})
p1btn.addEventListener("click", () => {
    if (!gameover) {
        p1score++;
        p1dislay.textContent = p1score;
    }
    if (p1score == maxscrore) {
        gameover = true
    }

})
p2btn.addEventListener("click", () => {
    if (!gameover) {
        p2score++;
        p2dislay.textContent = p2score
    }
    if (p2score === maxscrore) {
        gameover = true
    }
})
resetbtn.addEventListener("click", () => {
    p1score = 0
    p2score = 0
    p1dislay.textContent = 0
    p2dislay.textContent = 0
    gameover = false
})