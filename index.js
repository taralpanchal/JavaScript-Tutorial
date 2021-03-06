 //Read Write Execute
 //000000100
 //000000010
 //000000001  
 const readPermission = 4;
 const writePermission = 2;
 const executrPermission = 1;

 let myPermission = 0;
 myPermission = myPermission | readPermission | writePermission;

 let message = (myPermission & readPermission) ? 'yes' : 'no';
 console.log(message);