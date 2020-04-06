// console.log("from app.js")
// var cat = require("cat-me")
// console.log(cat("sanyam"))
// var jokes = require("knock-knock-jokes")
// console.log(jokes());
const fakers = require('faker')
    //console.log(faker) 
var shop = []
for (var i = 0; i < 10; i++) {
    var object = {}
    object.product_Name = fakers.commerce.productName()
    object.prices = fakers.commerce.price()
    shop.push(object);
    console.log(shop)
}
console.log(shop)