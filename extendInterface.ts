interface IPerson {
    name: string;
}

interface IEmployee {
    id: number;
    salary: number;
}

interface Dev extends IPerson, IEmployee {
    course: string;
}


var newDev: Dev = {
    course: "Angular",
    name: "jack",
    id: 1,
    salary: 35000
}
console.log(newDev);
