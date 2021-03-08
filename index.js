function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle = new Function('radius',
`this.radius = radius;
this.draw = function(){
    console.log('draw');
}`);

// Circle.call({}, 1);
Circle.apply();
const circle = new Circle(1);
console.log(circle);