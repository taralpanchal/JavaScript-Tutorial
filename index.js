const number = [1, 2, 3, 4];

console.log(include(number, -1));

function include(array, searchElement){
    for(let n of array)
        if(n === searchElement)
            return true;
        return false;
}