// objects implements interface
var product = {
    id: 123,
    name: 'IPhone',
    description: 'Its awesome',
    price: 120000,
    Print: function () {
        throw new Error("Function not implemented.");
    }
};
// class implements Interface
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.Print = function () {
        throw new Error("Method not implemented.");
    };
    return Test;
}());
var objTest = new Test();
objTest.id = 111;
objTest.name = 'Samsung';
objTest.description = 'Good';
objTest.price = 100000;
console.log(objTest);
