console.log(`---------------using class with constructor------------------------`);

class Employee{
    ID:Number;
     name: string;
     comapany:string;
     salary:Number
constructor(ID:Number, name: string,comapany:string ,salary:Number){
this.name=name;
this.ID=ID;
this.comapany=comapany;
this.salary=salary;
}
}
const emp1=new Employee(11,"sham","cognizant",30000);
// console.log(emp1);
const emp2=new Employee(12,"RAM","Infoysis",30000);
// console.log(emp1);
const emp3=new Employee(13,"SITA","TCS",30000);
// console.log(emp1);
const emp4=new Employee(14,"RADHA","Wipro",30000);
// console.log(emp1);
const emp=[emp1,emp2,emp3,emp4];
for (const ele of  emp) {
    console.log(`ID: ${ele.ID}, NAME: ${ele.name}, Comapany Name: ${ele.comapany}, salary: ${ele.salary}`);
}
console.log(`--------using class parameter property---------`);
function Student(
    name:string,
    college:string,
    city:string){
        this.name=name;
        this.college=college;
        this.city=city;
    }
const student=new Student("Ravi","ASC college","Jalgoan");
console.log(`Name: ${student.name} , College: ${student.college} ,city: ${student.city}`);
const student1=new Student("sunder","SP college","pune");
console.log(`Name: ${student1.name} , College: ${student1.college} ,city: ${student1.city}`);
console.log(`--------Remove duplicate  from the array`);


function removeDuplicates<T>(array: T[]): T[] {
    return array.filter((item, index, self) => self.indexOf(item) === index);
  }
  
  const originalArray: number[] = [1,2,2,4,5,4,7,8,3,6]
  const uniqueArray: number[] = removeDuplicates(originalArray);
  console.log(`originalArray:${originalArray}`);
  
  console.log(`uniqueArray:${uniqueArray}`);
  
