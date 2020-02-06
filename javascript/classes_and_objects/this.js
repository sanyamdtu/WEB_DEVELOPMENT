/*let obj = {
    color: "blue",               //not so much clear
    volume: 600

}
obj.brand = "asian"
console.log(obj);
//adding any new property to the object which is created previously\
let abc = new function() {
        this.color = "green" //            __
        this.brand = "nerolac" //\\
        this.volume = 9900 //  \\
    } //the object can be created by using the object of function and this keyword 
console.log(abc);
abc = obj;
console.log(obj);
//sanyam srivastava is name of the certifie


*/


let obj = {
    type: 'a',
    str: ["jojo", "dio", "jotaro"],
    show() {
        console.log(this);
    }
}

function show2() {
    console.log(this);
}
console.log(this); //this creates an empty object which means it does npt contain anything
obj.show(); //it shows about the object
console.log(this.type); //
show2(); //this acts like a window it contains all the property