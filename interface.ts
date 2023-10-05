interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;

     Print(): string  // no body 
}

interface ITest {
    name: string;
}

// objects implements interface
var product: IProduct = {
    id: 123,
    name: 'IPhone',
    description: 'Its awesome',
    price: 120000,
    Print: function (): string {
        throw new Error("Function not implemented.");
    }
}



// class implements Interface
class Test implements IProduct, ITest {
    price: number;
    Print(): string {
        throw new Error("Method not implemented.");
    }
    id: number;
    name: string;
    description: string;
   

}

var objTest = new Test();
objTest.id = 111;
objTest.name = 'Samsung';
objTest.description = 'Good';
objTest.price = 100000;
console.log(objTest);