function createCircle(radius){

    return{
        radius,  
        draw() {
           console.log('SAM')
        }
    };
}
const circle1 = createCircle(5);
console.log(circle1);