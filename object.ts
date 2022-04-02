type person = {
    name:string;
    age:number;
    salary:number;
}
const student:person={
    name : 'Flora',
    age: 21,
    salary: 10000
}
// ===============================

const employee:{name:string,age:number,salary:number} ={
    name : 'Sonia',
    age : 21,
    salary : 100000
}
// ==================================
function getSalary(player1:{name?:string,age?:number,salary:number}): 
number {
     return player1.salary;
}
getSalary({salary:90})