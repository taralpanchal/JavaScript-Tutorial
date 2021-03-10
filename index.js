 function sum(...items){
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a,b) => a + b); 
    // let total = 0;
    //  for(let n of items)
    //     total += n;
    //  return total;
 }
 console.log(sum(1,2,3,4,5));