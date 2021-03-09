 function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = city;
 }
 let add1 = new Address('asv','asdf',1233);
 let add2 = new Address('asv','asdf',1233);
 let add3 = add1;

 console.log(areEqual(add1,add2));
console.log(areSame(add1,add2));  
console.log(areSame(add1,add3)); 

function areEqual(add1,add2){
  return add1.street === add2.street && 
    add1.city === add2.city  && 
    add1.zipCode === add2.zipCode;
}


function areSame(add1,add2){
    return add1 === add2;    
}
