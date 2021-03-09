const cources = [
    { id: 1 , name : 'a' },
    { id: 2 , name : 'b' },
];
console.log(cources.includes( {id:1 , name:'a'} ));
const cource = cources.find(cource =>  cource.name === 'a' );
  
const cource1 = cources.find(function(cource){
    return cource.name == 'a';
});
console.log(cource1)