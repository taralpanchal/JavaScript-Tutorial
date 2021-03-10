const number = [1, 2, 3, 4];

const output = except(number, [1]);
console.log(output);
function except(array, excluded){
    const output = [];
    for(let n of array)
        if(!excluded.includes(n))
            output.push(n);
    return output;
}