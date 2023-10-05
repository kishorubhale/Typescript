"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub = exports.Add = exports.EMP = exports.isPalindrome = void 0;
function Add(x, y) {
    return x + y;
}
exports.Add = Add;
function Sub(x, y) {
    return x - y;
}
exports.Sub = Sub;
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
var EMP = /** @class */ (function () {
    function EMP() {
    }
    EMP.prototype.getEmployee = function () {
        return 'Get Employee callled';
    };
    return EMP;
}());
exports.EMP = EMP;
var emp = new EMP();
