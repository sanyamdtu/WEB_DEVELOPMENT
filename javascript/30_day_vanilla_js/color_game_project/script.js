var easy_btn = document.querySelector(".easy")
var hard_btn = document.querySelector(".hard")
var new_btn = document.querySelector(".new")
var red_color = random(255)
var green_color = random(255)
var blue_color = random(255)
var ans_id = random(6) + 1;
var ans_box = document.getElementById(`${ans_id}`);
var span_var = document.querySelector("#var")
var mode = 2; //for hard 2 easy-1
var boxes = document.querySelectorAll(".boxes")
var heading_area = document.querySelector(".heading")
var move_text = document.querySelector("#move_text");
span_var.textContent = red_color + "," + green_color + "," + blue_color;

function random(limit) {
    return Math.floor(Math.random() * limit);
}

function rgb_random() {
    red_color = random(255)
    green_color = random(255)
    blue_color = random(255)
    ans_id = random(3 * mode) + 1;
    // ans_box = document.querySelector("#" + ans_id)
    span_var.textContent = red_color + "," + green_color + "," + blue_color;
    for (var i = 0; i < 3 * mode; i++) {
        //console.log(box.id)
        var r = random(255)
        var g = random(255)
        var b = random(255)
        if (r === red_color && green_color === g && blue_color === b) {
            r = random(255);
            g = random(255);
            b = random(255);
        }
        boxes[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        if (boxes[i].id == ans_id) {
            ans_box = boxes[i]
            boxes[i].style.backgroundColor = "rgb(" + red_color + "," + green_color + "," + blue_color + ")";
        }
    }
    ans_box.addEventListener("click", ans_func)
    new_btn.textContent = "NEW COLORS"
    heading_area.style.backgroundColor = "#04ABD6";
}
easy_btn.addEventListener("mouseover", () => {

    if (mode != 1)
        easy_btn.classList.add("selected-btn")
})
easy_btn.addEventListener("mouseout", () => {
    if (mode != 1)
        easy_btn.classList.remove("selected-btn")
})

hard_btn.addEventListener("mouseover", () => {
    if (mode != 2)
        hard_btn.classList.add("selected-btn")
})
hard_btn.addEventListener("mouseout", () => {
    if (mode != 2)
        hard_btn.classList.remove("selected-btn")
})
new_btn.addEventListener("mouseover", () => {
    new_btn.classList.add("selected-btn")
})
new_btn.addEventListener("mouseout", () => {
    new_btn.classList.remove("selected-btn")
})

new_btn.addEventListener("click", rgb_random)
easy_btn.addEventListener("click", () => {
    if (mode != 1) {
        mode = 1
        rgb_random();

        easy_btn.classList.add("selected-btn");
        hard_btn.classList.remove("selected-btn");
        for (var i = 3; i < 6; i++) {
            boxes[i].style.backgroundColor = "#30302D"
        }
    }
})

hard_btn.addEventListener("click", () => {
    if (mode != 2) {
        mode = 2;
        rgb_random();
        hard_btn.classList.add("selected-btn");

        easy_btn.classList.remove("selected-btn");

    }

})



function ans_func() {

    new_btn.textContent = "WANNA PLAY AGAIN?"
    move_text.textContent = "CORRECT"
    new_btn.addEventListener("click", () => {
        new_btn.textContent = "NEW COLORS"
    })
    for (var i = 0; i < 3 * mode; i++) {
        boxes[i].style.backgroundColor = ans_box.style.backgroundColor
        heading_area.style.backgroundColor = ans_box.style.backgroundColor
    }
    this.removeEventListener("click", ans_func)
}
ans_box.addEventListener("click", ans_func)