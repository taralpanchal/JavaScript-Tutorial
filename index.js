const numbers= [3,2,-1,5,8,6];
// let sum = 0;
// for(let n of numbers)
// sum += n;
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0);
console.log(sum);
 