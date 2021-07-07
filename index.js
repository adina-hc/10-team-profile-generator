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

// function to validate if answer by user is a number
const isInt = (str) => {
  return !isNaN(str) && ID.isInteger(parseFloat(str));
};

// create html website
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
  popMgr();
  popTeam();
};
// Populate Manager
const popMgr = () => {
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
const popTeam = () => {
  inquirer.prompt(teamQ).then((mgrResponse) => {
    switch (mgrResponse.position) {
      case "Engineer":
        popEng();
        break;
      case "Intern":
        popInt();
        break;
      default:
        htmlCreate();
    }
  });
};

// Manager variable
const mgrQ = [
  {
    name: `mgrName`,
    type: `input`,
    message: `What is the manager's name?`,
  },
  {
    name: `mgrID`,
    type: `number`,
    message: `What is the managers's ID?`,
  },
  {
    name: `mgrEmail`,
    type: `input`,
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
const engQ = [
  {
    type: "input",
    name: "engName",
    message: "Enter engineer's name",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "You must enter a name";
      }
    },
  },
  {
    name: "engID",
    type: "input",
    message: "Enter engineer's ID",
    validate: (value) => {
      if (!isNaN(value) && value.isInteger(parseFloat(value))) {
        return "You must enter an ID number";
      } else {
        return true;
      }
    },
  },
  {
    name: "engEmail",
    type: "input",
    message: "Enter engineer's email address",
    validate: emailValidator,
  },
  {
    name: "gitHub",
    type: "input",
    message: "Enter engineer's GitHub username",
    validate: "",
  },
];

// Prompts for entering intern data
const internQ = [
  {
    name: "internName",
    type: "input",
    message: "Enter intern's name",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "You must enter a name";
      }
    },
  },
  {
    name: "intID",
    type: "input",
    message: "Enter intern's ID",
    validate: (value) => {
      if (!isNaN(value) && value.isInteger(parseFloat(value))) {
        return "You must enter an ID number";
      } else {
        return true;
      }
    },
  },
  {
    name: "intEmail",
    type: "input",
    message: "Enter intern's email address: ",
    validate: emailValidator,
  },
  {
    name: "intSchool",
    type: "input",
    message: "Enter intern's school: ",
  },
];

// Populate engineer
const popEng = () => {
  inquirer.prompt(engQ).then((responses) => {
    const eng = new Engineer(
      responses.engName,
      responses.engID,
      responses.engEmail,
      responses.gitHub
    );
    teamArr.push(eng);
    employeeId.push(responses.engID);
  });
  menu();
};

// Populate intern
const popInt = () => {
  inquirer.prompt(intQ).then((responses) => {
    const intrn = new Intern(
      responses.intName,
      responses.intID,
      responses.intEmail,
      responses.school
    );
    teamArr.push(intrn);
    employeeId.push(responses.intID);
  });

  menu();
};
