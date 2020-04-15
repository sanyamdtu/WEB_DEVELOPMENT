function hellosayer(name, count, callback) {
    var c = 0;
    var timer = setInterval(() => {
        if (count === c) {
            callback()
            clearInterval(timer)
        }
        console.log("hello" + name)
        c++
    }, 1000)
}
hellosayer("sanyam", 3, () => {
    hellosayer("naruto", 2, () => {})
})