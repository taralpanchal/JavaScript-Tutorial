//Speed Limit = 70
// 5 -> 1 point
//Math.floor(1.3)
//more then 12 ponts -> Suspended
checkSpeed(70);

function checkSpeed(speed){
    const speedLimit = 60;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint)
        console.log('Ok');
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points > 12)
            console.log('License suspended');
        else
            console.log('Ponits',points);
    }
 }