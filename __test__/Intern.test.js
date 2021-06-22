const Intern = require("../lib/Intern.js")


test("creates Intern object",() => {
    const intern = new Intern("joe","1","joe@gmail.com","MIT");
    expect(intern.name).toBe("joe");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("joe@gmail.com");
    expect(intern.school).toBe("MIT");
})
test("get Intern school",() => {
    const intern = new Intern("joe","1","joe@gmail.com","MIT");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(intern.getSchool()).toEqual(expect.stringContaining("MIT"));
})
test("get intern role",() => {
    const intern = new Intern("joe","1","joe@gmail.com","MIT");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(intern.getRole()).toBe("Intern");
})
