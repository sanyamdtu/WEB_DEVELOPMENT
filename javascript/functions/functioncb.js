function greeter(name) {
    let firstname = name.split(" ")[0];
    return function(firstnname) {
        console.log("Hello " + firstname);
    }
}
let sanyamgreet = greeter("John Wick");
let sanyamop = greeter("david mathhew");
sanyamgreet();
//console.log("5" == 5)
function countto(initial, delta) {
    let val = initial;
    return function co() {
        val = val + delta;
        return val;
    }
}
let countofive = countto(5, 5);
console.log(countofive());
console.log(countofive());
console.log(countofive());