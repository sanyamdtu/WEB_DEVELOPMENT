/*function rolldie() {
    let roll = Math.floor(Math.random() * 6 + 1);
    console.log('rolled: ${roll}')
}
rolldie()

function add(x, y) {
    console.log(x + y);
    return "done";
}

function sub(x, y) {
    console.log(x - y);
    return "done";
}

function multi(x, y) {
    console.log(x * y);
    return "done";
}

function divide(x, y) {
    console.log(x / y);
    return "done";
}
//  
let operations = [add, sub, multi, divide];
console.log(operations[1](77, 6));

function pickone(f1, f2) {
    console.log(f1(77, 33));
    console.log(f2(77, 33));
}
pickone(add, sub);


let con = {
    add,
    sub
}
con.add(33, 55);
con.sub(44, 22);

let cone = {
    add(x, y) {
        console.log(x + y);
        return "done";
    },

    sub(x, y) {
        console.log(x - y);
        return "done";
    },

    multi(x, y) {
        console.log(x * y);
        return "done";
    },

    divide(x, y) {
        console.log(x / y);
        return "done";
    }
}

cone.add(82, 22);


// higher order functions  with return statement as functions
const iterator = function(data) {
    return function(beg, end) {
        for (var i = beg - 1; i < end; i++) {
            console.log(data[i]);
        }
    }
}
const str = ["dio", "jotaro", "polnareff", "joseph"];
const string = iterator(str);
const arr = [9, 3, 5, 6, 6, 8, 7];
const array = iterator(arr);
string(1, 3);
array(1, 5);

const isinslusive = function(x, y) {
    return function(num) {
        if (x <= num && y >= num) {
            return true;
        }
        return false;
    }
}
const isgood = isinslusive(90, 100);
console.log(isgood(22));
const isdicenumber = isinslusive(1, 6);
console.log(isdicenumber(9));

function twice(f) {
    f();
    f();
}
const ask = function() {
    console.log("hahaha");
}
twice(ask);

*/
const 