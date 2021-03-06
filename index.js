// Logical And(&&) Both operand True
// console.log(true && true);
// console.log(false && false);

// let highIncome = true;
// let googCreditScore = true;
// let eligibleForLone = highIncome && googCreditScore;
// console.log(eligibleForLone);


//Logical Or(||) If One operand True
let highIncome = false;
let googCreditScore = false;
let eligibleForLone = highIncome || googCreditScore;
console.log('Eligble',eligibleForLone);

//Logical Not(!) 
let applicationRefused = !eligibleForLone;
console.log('Application Refused',applicationRefused);