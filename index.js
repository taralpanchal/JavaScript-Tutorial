For Loop
for(let i = 5; i >= 1 ; i--){
   if(i % 2 !== 0) console.log(i);
}  

While loop
let i = 0;
while(i<=5){
    if(i % 2 !== 0) console.log(i);
    i++;
}

Do-While loop  
let i = 1;
do{
    if(i % 2 !== 0) console.log(i);
    i++; 
}while(i <= 5);

infinite loop
let i = 1;
while(i <= 5){
    console.log(i);
  i++;
}

while(true){

}

let x=0;
do{
    
}while(x<5);

for(let i = 0; i < 10);

For In Loop
const person = {
    name:"Taral",
    age:21
}
for(let key in person)
    console.log(key, person[key]);

const colors=['red','blue','green'];
for(let i in colors)
    console.log(i,colors[i]);

//For..Of
 const colors=['red','blue','green'];
 for(let color of colors)
    console.log(color);

// break and Continue
let i = 0;
while(i<=10){
    // if(i === 5) break;
    if(i % 2 == 0)
        console.log(i);
        i++;
        continue;
};