const Employee = require(".lib\Employee.js")

describe("Employee",() =>{
    describe(`initilizzation`, ()=>{
        it("should create a obj",()=>{
            //Arrange
            const employee = new Employee("nick","n@2uu.com",1)
            //act?
            //assert
            expect(`name` in employee).toBe(true);
            expect(`email` in employee).toBe(true);
            expect(`id` in employee).toBe(true);
        })
    })
});

module.exports = Employee.test;