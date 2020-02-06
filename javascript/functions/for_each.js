/*/console.log(character);
//var character = "jotaro"
console.log(move);
var move = function(x) {
    console.log(x);
}
move("dio");
*/

let books = [{
    name: "stay alive",
    author: "simon kennerick",
    price: 33,

}, {
    name: "an unquiet mind",
    author: "jennifer",
    price: 300
}, {
    name: "GONE",
    author: "sanyam srivastava",
    price: 100
}]
books.forEach(function(books) {
    console.log(books.name);
})
var arr = ["jotaro", "dio", "polnareff", "joseph"]
arr.forEach(function() {
    console.log(arr);
})