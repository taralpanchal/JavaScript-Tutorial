const numbers = [1,2,3,4,5];

const items = numbers.map((n,index) => {
    return { index :   index,
            id : n , 
             name : 'apple',
             price : 50,
             color : 'red'
    } ;    
});

console.log( "Apple", items); 