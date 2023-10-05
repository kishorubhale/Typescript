var n1 = 10;
console.log(n1);
var movie = 'KGF';
var s1 = "you are the creater of your destiny";
var s2 = "powerful people come from powerful places ".concat(movie);
console.log(s1);
console.log(s2);
var b1 = true;
var b2 = false;
var b3;
console.log(b1); // op
console.log(b2); // op
function test() {
    return b3 = false;
    console.log(b3); // op
}
console.log('test method called', test());
var CardinalDirectios;
(function (CardinalDirectios) {
    CardinalDirectios["North"] = "North";
    CardinalDirectios["East"] = "East";
    CardinalDirectios["South"] = "South";
    CardinalDirectios["West"] = "West";
})(CardinalDirectios || (CardinalDirectios = {}));
var currentDirection = CardinalDirectios.North;
console.log('currentDirection', currentDirection);
