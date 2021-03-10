const number = [1, 2, 3, 4];

const count = countOccurrenece(number, 1);
console.log(count);

function countOccurrenece(array, serachElement) {
    return array.reduce((accumulator, current) => {
    const occurrenece = (current === serachElement) ? 1 : 0; 
        console.log(accumulator, current, serachElement);
        return accumulator + occurrenece;
    }, 0);
}