const Manager = require("../lib/Manager.js")


test("creates Manager object",() => {
    const manager = new Manager("joe","1","joe@gmail.com","12");
    expect(manager.name).toBe("joe");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("joe@gmail.com");
    expect(manager.officeNumber).toBe("12");
})
test("get Manager school",() => {
    const manager = new Manager("joe","1","joe@gmail.com","12");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(manager.getOfficenumber()).toEqual(expect.stringContaining("12"));
})
test("get manager role",() => {
    const manager = new Manager("joe","1","joe@gmail.com","12");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(manager.getRole()).toBe("Manager");
})
