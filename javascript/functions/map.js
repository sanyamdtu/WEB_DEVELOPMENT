const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const double2 = data.map(function(num) {
    return num * 2;
})
const double = []
data.map(function(n) {
        double.push(n * 3);
    })
    //console.log(double);
const obj = data.map(function(n) {
    return {
        value: n,
        change: n * 3
    }
})
console.log(obj);
//reduce is uesd for cumulative starting of something
const kadane = data.reduce(function(n, t) {
    console.log(n);
    return n + t;
})
console.log(kadane);