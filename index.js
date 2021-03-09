let numbers= [1,2,3];
for(let number of numbers)
    console.log(number);

const num = numbers.forEach((number, index) => console.log(index, number));