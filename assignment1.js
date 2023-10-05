console.log("Grade calculator");
var data1 = Number(prompt("math"));
var data2 = Number(prompt("physics"));
var data3 = Number(prompt("chem"));
var a = console.log('Math', data1);
var b = console.log('Physics', data2);
var c = console.log('chemestry', data3);
var ave = ((data1 + data2 + data3) / (3));
console.log("Average is :", ave);
if (ave < 70) {
    console.log(" Your Grade C ");
}
else if (ave > 70 && ave < 90) {
    console.log("Your Grade B");
}
else if (ave > 90) {
    console.log("Your Grade A");
}
