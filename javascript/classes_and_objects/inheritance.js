let p = {
    type1: 'a',
};
let q = Object.create(p);
q.type2 = 'b';
let r = Object.create(q);
r.type3 = 'c';
console.log(p.type1)
console.log(q.type1)
console.log(r.type1)
p.type1 = 'd';
console.log(p.type1)
console.log(q.type1)
console.log(r.type1)