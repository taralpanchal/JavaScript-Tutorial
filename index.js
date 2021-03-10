const number = arrayFromRange(1,5);

console.log(number);

function arrayFromRange(min,max){
    const output= [];
    for(let i=min; i<=max;i++)
        output.push(i);
    return output;    
}