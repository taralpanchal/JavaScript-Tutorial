const numbers= [3,2,-1,5,8,6];

// const atLeastOnepositive = numbers.some(function(value){
//     return value >= 0;
// });
// console.log(atLeastOnepositive);

const every = numbers.every(function(value){
    return value>=0;
});
console.log(every);