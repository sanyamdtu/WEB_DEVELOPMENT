let str = ["jojo", "dio", "jotaro", "polnareff"];
for (let i = 0; i < str.length; i++) {
    console.log('${str[i]} is the name of the character ${i}');
}
for (let name of str) {
    console.log(name);
}
//
let anime = {
    name: ["jojo bizzare adventure", "detective conan", "inazuma eleven"],
    episodes: 920,
    time: "20 minutes",
    jojo: {
        cname: "dio",
        move: "muda muda muda",
        secons: 9,
    }
}
for (let itr of Object.keys(anime)) {
    console.log(itr, anime[itr]);
}
let price = {
    chicken_tikka: 180,
    paneertikka: 110,
    chicken_roll: 90,
    chicken_shawrma: 60,
}
let total = 0;
const cost = Object.values(price);
for (let tag of cost) {
    total += tag;
}
total /= cost.length;
console.log(total);