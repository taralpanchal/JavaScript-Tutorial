const circle = {
    radius:1
};

circle.color = 'yellow';
circle.x = 5;
delete circle.x;
circle.draw = function(){}
console.log(circle);