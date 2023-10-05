console.log(`Grade calculator`);

const data1 = Number(prompt("math"));
const data2 =Number( prompt("physics"));
const data3 =Number (prompt("chem"));
let a=console.log('Math', data1);
let b=console.log('Physics', data2);
let c=console.log('chemestry', data3);
let ave=((data1+data2+data3)/(3));
console.log("Average is :",ave);
if(ave<70){
    console.log(` Your Grade C `);
}else if(ave>70 && ave<90){
    console.log(`Your Grade B`);
}else if(ave>90){
    console.log(`Your Grade A`);
    
}



