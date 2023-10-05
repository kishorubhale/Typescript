var n1:number=10;
console.log(n1);
var movie = 'KGF';

var s1: string = "you are the creater of your destiny";

var s2: string = `powerful people come from powerful places ${movie}`;

console.log(s1);

console.log(s2);
var b1 : boolean = true;
var b2 : boolean = false;

var b3 : boolean;

console.log(b1); // op
console.log(b2); // op

function test() {
   return b3 = false;
    console.log(b3); // op
   
}

console.log('test method called', test()); 
enum CardinalDirectios {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West'
}

let currentDirection = CardinalDirectios.North;

console.log('currentDirection', currentDirection);