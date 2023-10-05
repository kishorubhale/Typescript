console.log("---------------using class with constructor------------------------");
var Employee = /** @class */ (function () {
    function Employee(ID, name, comapany, salary) {
        this.name = name;
        this.ID = ID;
        this.comapany = comapany;
        this.salary = salary;
    }
    return Employee;
}());
var emp1 = new Employee(11, "sham", "cognizant", 30000);
// console.log(emp1);
var emp2 = new Employee(12, "RAM", "Infoysis", 30000);
// console.log(emp1);
var emp3 = new Employee(13, "SITA", "TCS", 30000);
// console.log(emp1);
var emp4 = new Employee(14, "RADHA", "Wipro", 30000);
// console.log(emp1);
var emp = [emp1, emp2, emp3, emp4];
for (var _i = 0, emp_1 = emp; _i < emp_1.length; _i++) {
    var ele = emp_1[_i];
    console.log("ID: ".concat(ele.ID, ", NAME: ").concat(ele.name, ", Comapany Name: ").concat(ele.comapany, ", salary: ").concat(ele.salary));
}
console.log("--------using class parameter property---------");
function Student(name, college, city) {
    this.name = name;
    this.college = college;
    this.city = city;
}
var student = new Student("Ravi", "ASC college", "Jalgoan");
console.log("Name: ".concat(student.name, " , College: ").concat(student.college, " ,city: ").concat(student.city));
var student1 = new Student("sunder", "SP college", "pune");
console.log("Name: ".concat(student1.name, " , College: ").concat(student1.college, " ,city: ").concat(student1.city));
console.log("--------Remove duplicate  from the array");
function removeDuplicates(array) {
    return array.filter(function (item, index, self) { return self.indexOf(item) === index; });
}
var originalArray = [1, 2, 2, 4, 5, 4, 7, 8, 3, 6];
var uniqueArray = removeDuplicates(originalArray);
console.log("originalArray:".concat(originalArray));
console.log("uniqueArray:".concat(uniqueArray));
