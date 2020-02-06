/*console.log("hello world")
console.log({} == []);
var arr = ["", 12, 728, [822, 282, 828], {}]
console.log(arr[0]);
console.log(Number.MAX_SAFE_INTEGER);
let jojo = {
    dio: "muda muda muda",
    polnareff: {
        power: "hamon",
        joseph: "owa nomaye shinduni",
    },
    jotaro: 9,
    roadroller: [9, 8, 7, 6, 5, 4, 3, 2, 1],
}
console.log(jojo.polnareff.power);

jojo.roadroller[20] = 0;
console.log(jojo.roadroller)

function cal(x) {
    if (x === 10) {
        return;
    }
    console.log(x);
    cal(x + 1);
}
//cal(1);
var x = 10
    //console.log(jojo.dio);

function myfun() {
    var x = 20;

    function me(x) {
        if (x < 15)
            console.log("x==" + x)
        x = 40;
        if (x === 40)
            console.log("x " + x)
        console.log("x==" + x)
    }
    me(10);
}
console.log("x==" + x)*/
function testvar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);

    function xa() {
        var x = 40;
        console.log(x);
    }
    xa();
    console.log(x);
}
testvar();