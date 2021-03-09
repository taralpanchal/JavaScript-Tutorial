//  let address = {
//     street: 'Cha',
//     city : 'Ahme',
//     zipcode : 123456
//  };

function showAddress(street,city,zipCode){
     return{
         street,
         city,
         zipCode,
         
         };
     }

 let add1 = new showAddress('cha','ahme',123456);
 console.log(add1);

 function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = city;
 }
 let add2 = new showAddress('asv','asdf',1233);
 console.log(add2);
