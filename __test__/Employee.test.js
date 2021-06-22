const Employee = require("../lib/Employee.js")

// describe("Employee",() =>{
//     describe(`initilizzation`, ()=>{
//         it("should create a obj",()=>{
//             //Arrange
//             const employee = new Employee("nick","n@2uu.com",1)
//             //act?
//             //assert
//             expect(`name` in employee).toBe(true);
//             expect(`email` in employee).toBe(true);
//             expect(`id` in employee).toBe(true);
//         })
//     })
// });

test("creates employee object",() => {
    const employee = new Employee("joe","1","joe@gmail.com");
    expect(employee.name).toBe("joe");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("joe@gmail.com");
})

test("get employee name",() => {
    const employee = new Employee("joe","1","joe@gmail.com");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test("get employee id",() => {
    const employee = new Employee("joe","1","joe@gmail.com");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
})
test("get employee email",() => {
    const employee = new Employee("joe","1","joe@gmail.com");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})
test("get employee role",() => {
    const employee = new Employee("joe","1","joe@gmail.com");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(employee.getRole()).toBe("Employee");
})
