const Employee = require("../lib/Employee.js")


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
