// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//first thing was to make all directories and files for each employee ect.
const pageRenderhtml = require("./src/pageRender")
const inquirer = require("inquirer");

const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { tsNamedTupleMember } = require("@babel/types");

const Team = [];
const addManager = () => {
  console.log("buildYourteam");
  inquirer
  .prompt([
    {
      type: "input",
      name: "ManagersName",
      message: "Enter the name of your Manager",
      validate: (answer) => {
        if (answer === "") {
          console.log("Please enter a name");
          return false;
        }
        return true;
      },
    },
    {
      type: "number",
      name: "Managersid",
      message: "Enter the ID",
      validate: (answer) => {
        if (answer === "") {
          console.log("Please enter a ID");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "Managersemail",
      message: "Enter the email for you Manager",
      validate: (answer) => {
        let passAnswer = answer.match(/\S+@\S+\.\S+/);
        if (passAnswer) {
          return true;
        }
        console.log("Please enter a email");
        return false;
      },
    },
    {
      type: "input",
      name: "Managersofficenumber",
      message: "Enter your managers office number.",
      validate: (answer) => {
        if (answer === "") {
          console.log("Please enter Office Number");
          return false;
        }
          return true;
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.ManagersName,
        answers.Managersid,
        answers.Managersemail,
        answers.Managersofficenumber
        );
        Team.push(manager);
        console.log(Team);
        return employeeMenu();
      });
    };
    addManager();
  



function employeeMenu(){
  inquirer
  .prompt({
    type: "list",
    name:"choice",
    message:"Would you like to add a new team member?",
    choices:["Engineer","Intern","Exit"]
  })
  .then(function(data){
    if(data.choice==="Engineer"){
      addEngineer();
    } else if (data.choice==="Intern"){
      addIntern();
    } else{
     buildTeam();
    }
  })
}

const buildTeam=()=>{
  // fs.writeFile('index.html', htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log('Successfully created index.html!')
  //   );
  fs.writeFileSync(`./dist/Team.html`,pageRenderhtml(Team),"UTF-8")
}

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EngineersName",
        message: "Enter the name of your engineer",
        validate: (answer) => {
          if (answer === "") {
            console.log("Please enter a name");
            return false;
          }
          return true;
        },
      },
      {
        type: "number",
        name: "Engineersid",
        message: "Enter the ID",
        validate: (answer) => {
          if (answer === "") {
            console.log("Please enter a ID");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "Engineersemail",
        message: "Enter the email for you Engineer",
        validate: (answer) => {
          let passAnswer = answer.match(/\S+@\S+\.\S+/);
          if (passAnswer) {
            return true;
          }
          console.log("Please enter a email");
          return false;
        },
      },
      {
        type: "input",
        name: "Engineersgithub",
        message: "Enter the github for your engineer.",
        validate: (answer) => {
          if (answer === "") {
            console.log("Please enter a github");
            return false;
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.EngineersName,
        answers.Engineersid,
        answers.Engineersemail,
        answers.Engineersgithub
      );
      Team.push(engineer);
     
      return employeeMenu();
    });
};



const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "InternsName",
        message: "Enter the name of your Interns",
        validate: (answer) => {
          if (answer === "") {
            console.log("Please enter a name");
            return false;
          }
          return true;
        },
      },
      {
        type: "number",
        name: "Internsid",
        message: "Enter the ID",
        validate: (answer) => {
          if (answer === "") {
            console.log("Please enter a ID");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "Internsemail",
        message: "Enter the email for you Interns",
        validate: (answer) => {
          let passAnswer = answer.match(/\S+@\S+\.\S+/);
          if (passAnswer) {
            return true;
          }
          console.log("Please enter a email");
          return false;
        },
      },
      {
        type: "input",
        name: "Internsschool",
        message: "Enter the Interns School.",
        validate: (answer) => {
          if (answer === "") {
            console.log("Please enter a school");
            return false;
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.InternsName,
        answers.Internsid,
        answers.Internsemail,
        answers.Internsschool
      );
      Team.push(intern);
      console.log(Team);
    });
};

