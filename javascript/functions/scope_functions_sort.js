// /*let sanyam = function(val, res) {
//     function msanyam() {
//         console.log(val);
//     }
//     let cast = {
//         show: function() {
//             console.log(val)
//         },
//         inc: function() {
//             val += res;
//         },
//         desc: function() {
//             val -= res;
//         }
//     }
//     return cast;
// }
// let fast = sanyam(50, 5);
// console.log(fast.inc());
// console.log(fast.show());
// fast.desc();
// fast.desc();
// fast.show(); */ //
// /*
// function compare(a, b) {
//     return a % 10 - b % 10;
// }
// let arr = [8, 6, 2, 4, 6, 99, 56, 2, 1, 44, 67];
// arr.sort(compare);
// console.log(arr); //the array is muttable and it does sorting lexicographically 
// //and it does normal sorting by defining another function and passsing it as arguments
// */
// let menu = ["paneer tikka", "chicken tandoori", "chicken momos", "egg roll", "egg biryani",
//     "panner parantha", "kadhi chaaawal", "eggless cake"
// ];
// let veg_food = menu.filter(function(men) {
//     if (men.indexOf("chicken ") != -1)
//         return false;
//     if (men.indexOf("egg ") != -1)
//         return false;
//     return true;
// });
// console.log(veg_food);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = arr.reduce(function(a, i) {
//     return a + arr[i];
// });
// console.log(sum);

var object = [{
    type: "hamon",
    power: "road roller",
    special_power: "muda muda muda"
}, {
    type: "shadow",
    power: "shinobi",
    special_power: "rasengan"
}]

function func(obj) {
    var asd = obj
    var sarthak = {
        type: "leaf",
        power: "Eitachi",
        special_power: "mangekyo sharengan"
    }
    var sanyam = {
            type: "sasuke",
            power: "chitori",
            special_power: "fire ball jutsu"
        }
        // obj[0] = sarthak;
        // sarthak = sanyam
    asd[0] = sanyam
}
func(object)
console.log(object)