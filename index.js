// const numbers= [3,2,1,5,8,6];
// console.log(numbers.sort());

// console.log(numbers.reverse());


const cource = [
    { id:1, name:'Node.js'},
    { id:2, name:'javascript'},
];
cource.sort(function(a,b){
    //a < b=-1
    //a > b=1
    //a===b =0
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(cource);