// made the class of employee due to all staff sharing all the same info.
//class of employee
class Employee {
  //used constructor
  constructor(name, id, email) {
    // employee name
    this.name = name;
    // employee id
    this.id = id;
    //employee email
    this.email = email;
  }
  // call for getting name
  getName() {
    return this.name;
  }
  // call for getting ID
  getId() {
    return this.id;
  }
  // call for getting email
  getEmail() {
    return this.email;
  }
  // if no role  then emloyee is the title.
  getRole() {
    return "Employee";
  }
}
// exports or info to be called on in other files as needed.
module.exports = Employee;
