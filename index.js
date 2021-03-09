const numbers= [3,2,-1,5,8,6];

// const filtered = numbers.filter(n => n >= 0);

// const item = filtered.map( n => '<li>' + n + '<li>' );

// const html = '<ul>' + item.join(' ')+ '<ul> ';
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value : n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);  
