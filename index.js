try {
    const number = [1, 2, 3, 4];
    const count = countOccurrenece(0, 1);
    console.log(count);
}
catch (e){
    console.log(e.message);
}
function countOccurrenece(array, serachElement) {
    if(!Array.isArray(array))
        throw new Error('Invalid array');
    return array.reduce((accumulator, current) => {
        const occurrenece = (current === serachElement) ? 1 : 0; 
        console.log(accumulator, current, serachElement);
        return accumulator + occurrenece;
    }, 0);
}