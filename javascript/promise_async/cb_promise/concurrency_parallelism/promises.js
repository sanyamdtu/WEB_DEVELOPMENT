function hellosayer(name, count) {
    return new Promise((resolve, reject) => {
        var c = 1;
        var timer = setInterval(() => {
            if (count === c) {
                clearInterval(timer)
                resolve()
            }
            console.log("hello" + name)
            c++
        }, 1000)
    })
}
hellosayer("sanyam", 3)
    .then(() => hellosayer("naruto", 4))
    .then(() => hellosayer("kakashi", 3))