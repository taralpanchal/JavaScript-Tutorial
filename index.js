function interest(principal,rate=3.5,year=4){
    return principal * rate / 100 * year;
}
console.log(interest(15000));