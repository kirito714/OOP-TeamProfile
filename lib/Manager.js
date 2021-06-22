const Employee = require("./Employee.js");
// const ROLE of manager
const ROLE = "Manager";
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getOfficenumber() {
    return this.officeNumber;
  }
  getRole() {
    return ROLE;
  }
}

module.exports = Manager;
