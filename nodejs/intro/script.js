//let awesome = function() {//both the ways are correct
function awesome() {
    console.log("there has been a attack") //te function is exported from the 
        // script file then it is used in the other inherited file to call he function
        //and export the functions and data in form of json

}
module.exports = {
    awesome, //the awesome function is exported in the file using the require function 
    //it is used to get the 
}