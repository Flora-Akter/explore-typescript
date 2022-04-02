let money:number = 7;
let friendSalary:number[] = [5200,3004,23000,11900,24400];
const friend : string[] = ['flora', 'sonia', 'raisa'];

friendSalary[0]=10500;
friendSalary.push(5689);

let max =0;
for( const salary of friendSalary){
    if(salary>max){
        max = salary;
    }

}