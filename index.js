//Divisibale by 3 => Fizz
//Divisibale by 5 => Buzz
// Divisibale by both 3 & 5 => FizzBuzz
//Not Divisibale by 3 & 5 => input
//Not A Number => 'Not Number
const output = fizzBuzz('Mosh');
console.log(output);

function fizzBuzz(input){
    if(typeof input !==  'number')
        return NaN;

    if(input % 3 === 0 && input % 5 ===  0)
        return 'FizzBuzz';

    else if(input % 5 ===  0)
        return 'Buzz';

    else if(input % 3 === 0)
        return 'Fizz';
     
    return input;       
}