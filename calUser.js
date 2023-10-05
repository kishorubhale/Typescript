"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calc_1 = require("./Calc");
var Calc_2 = require("./Calc");
var Calc_3 = require("./Calc");
console.log((0, Calc_1.Add)(2, 3));
console.log((0, Calc_1.Sub)(10, 5));
console.log((0, Calc_2.isPalindrome)('madam')); // truec
console.log((0, Calc_2.isPalindrome)('madan')); // false
var emp = new Calc_3.EMP();
var emplo = emp.getEmployee();
console.log(emp.getEmployee());
