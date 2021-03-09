let first = [{ id: 1 }];
let second = [5, 6, 7, 8];
// const combined = first.concat(second);
 const combined = [...first,'a',...second,'b'];
// const slice = combined.slice(0,3);
const copy = [...combined];
console.log(combined);
console.log(copy); 