const Engineer = require("../lib/Engineer.js")


test("creates Engineer object",() => {
    const engineer = new Engineer("joe","1","joe@gmail.com","joe@github.com");
    expect(engineer.name).toBe("joe");
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("joe@gmail.com");
    expect(engineer.github).toBe("joe@github.com");
})
test("get Engineer github",() => {
    const engineer = new Engineer("joe","1","joe@gmail.com","joe@github.com");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})
test("get engineer role",() => {
    const engineer = new Engineer("joe","1","joe@gmail.com","joe@github.com");
    // employee.getName() = joe toEqual toString(); puts joe into a string.
    expect(engineer.getRole()).toBe("Engineer");
})
