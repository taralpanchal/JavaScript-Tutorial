const number = [1, 2, 3, 4];
//End
const last = number.pop();
console.log(number);
console.log(last);

//first
const first = number.shift();
console.log(number);
console.log(first);

//middle
const middle = number.splice(2,1);
console.log(number);
console.log(middle);
