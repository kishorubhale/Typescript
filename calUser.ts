import { Add, Sub } from "./Calc";

import { isPalindrome } from "./Calc";
import { EMP } from "./Calc";

console.log(Add(2,3));
console.log(Sub(10,5));

console.log(isPalindrome('madam')); // truec
console.log(isPalindrome('madan')); // false

const emp=new EMP();
const emplo=emp.getEmployee();
console.log(emp.getEmployee());
