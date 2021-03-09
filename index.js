let first = [{ id: 1 }];
let second = [5, 6, 7, 8];
const combined = first.concat(second);
first[0].id = 5;    
const slice = combined.slice(0,3);

console.log(combined);
console.log(slice); 