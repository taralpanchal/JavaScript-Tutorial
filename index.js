 let address = {
    street: 'Cha',
    city : 'Ahme',
    zipcode : 123456
 };
 function showAddress(address){
     for(let key in address)
     console.log(key ,address[key]);
 }
 showAddress(address);