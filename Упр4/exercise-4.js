class Person {
    constructor() {
      var _salary = 1000;
      this.getSecretSalaryInfo = function () {
        return _salary;
      };
    }
}

var person1 = new Person();
var stoleSalaryInfo = person1.getSecretSalaryInfo();

console.log(person1.getSecretSalaryInfo()); //принтира 1000
console.log(stoleSalaryInfo); //принтира undefined