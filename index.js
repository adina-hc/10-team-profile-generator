// 1. Import required files and packages
// require Files
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
// const Employee = require('./lib/Employee');

// require npm inquirer package
const inquirer = require("inquirer");
const emailValidator = require("email-validator");

// require fs package
const fs = require("fs");

function htmlCreate() {
  return `
        Bagles
    `;
}
//pass employee array
fs.writeFile("./dist/test.html", htmlCreate(), (err) => {
  if (err) throw err;
});

// Prompt user for populating manager info
const menu = () => {
  populateMgr()
  populateTeam()
};
// Populate Manager
const populateMgr = () => {
  console.log("Follow the prompts to create your team");
  inquirer.prompt(mgrQ).then((responses) => {
    const mgr = new Mgr(
      responses.mgrName,
      responses.mgrID,
      responses.mgrEmail,
      responses.mgrOfficeNum
    );
    teamArr.push(mgr);
    employeeId.push(responses.mgrID);
  });
};
// Prompt user for adding employees to the team
const populateTeam = () => {
  inquirer.prompt(teamQ).then((mgrResponse) => {
    switch (mgrResponse.position) {
      case "Engineer":
        popEngineer();
        break;
      case "Intern":
        popIntern();
        break;
      default:
        writeTeam();
    }
  });
};

// Manager variable
const mgrQ = [
  {
    name: mgrName,
    type: input,
    message: `What is the manager's name?`,
  },
  {
    name: mgrID,
    type: number,
    message: `What is the managers's ID?`,
  },
  {
    name: mgrEmail,
    type: input,
    message: `What is the manager's email address?`,
    validate: emailValidator,
  },
  {
    name: mgrOfficeNum,
    type: number,
    message: `What is the manager's Office number?`,
  },
];

// Prompts for adding employees
const teamQ = [
  {
    name: position,
    type: list,
    message: `What is the employee's position?`,
    choices: ("engineer", "intern", "none"),
  },
];

// Prompts for entering engineer data
const engineer = [
  {
    type: "input",
    name: "engName",
    message: "Enter engineer's name",
    validate: "",
  },
  {
    name: "engID",
    type: "input",
    message: "Enter engineer's ID",
    validate: valResp => {
      const correctResp = valResp.match()
     

      }

    }
  
]

// Populate engineer
const popEngineer = () => {

}

// Team validation
