   //function declaration
   function walk(){
       console.log('walk');
   } 

   //Anonymous Function Experassion
   let run = function(){
        console.log('run');
   };
   let move = run;
   run();
   move();