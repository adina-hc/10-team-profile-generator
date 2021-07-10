// Import required files and packages
// require Files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const {templateCreator, htmlCreate} = require("./src/template");




// function to validate if answer by user is a number
const isInt = (str) => {
  return !isNaN(str) && ID.isInteger(parseFloat(str));
};

//Declare and initialize arrays
const teamArr = [];
const employeeId = [];

// Prompt user for populating manager info
const menu = () => {
  popMgr();

};
// Populate Manager
const popMgr = () => {
  console.log("Follow the prompts to create your team");
  inquirer.prompt(mgrQ).then((responses) => {
    const mgr = new Manager(
      responses.mgrName,
      responses.mgrID,
      responses.mgrEmail,
      responses.officeNum
    );
    teamArr.push(mgr);
    //employeeId.push(responses.mgrID);
    popTeam();
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
        // To create a new html document & pass employee array
        fs.writeFile("./dist/myTeam.html", htmlCreate(teamArr), (err) => {
          if (err) throw err;
        });
    }
  });
};

// Manager variable
const mgrQ = [
  {
    name: "mgrName",
    type: "input",
    message: "What is the manager's name?",
  },
  {
    name: "mgrID",
    type: "number",
    message: "What is the managers's ID?",
  },
  {
    name: "mgrEmail",
    type: "input",
    message: "What is the manager's email address?",
  },
  {
    name: "officeNum",
    type: "number",
    message: "What is the manager's Office number?",
  },
];

// Prompts for adding employees
const teamQ = [
  {
    name: "position",
    type: "list",
    message: "What is the employee's position?",
    choices: ["Engineer", "Intern", "none"],
  },
];

// Prompts for entering engineer data
const engQ = [
  {
    type: "input",
    name: "engName",
    message: "Enter engineer's name",
  },
  {
    name: "engID",
    type: "input",
    message: "Enter engineer's ID",
  },
  {
    name: "engEmail",
    type: "input",
    message: "Enter engineer's email address",
  },
  {
    name: "engGitHub",
    type: "input",
    message: "Enter engineer's GitHub username",
  },
];

// Prompts for entering intern data
const intQ = [
  {
    name: "intName",
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
    // validate: (value) => {
    //   if (!isNaN(value) && value.isInteger(parseFloat(value))) {
    //     return "You must enter an ID number";
    //   } else {
    //     return true;
    //   }
    // },
  },
  {
    name: "intEmail",
    type: "input",
    message: "Enter intern's email address: ",
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
      responses.engGitHub
    );
    teamArr.push(eng);
    //employeeId.push(responses.engID);
    popTeam();
  });
};

// Populate intern
const popInt = () => {
  inquirer.prompt(intQ).then((responses) => {
    const intern = new Intern(
      responses.intName,
      responses.intID,
      responses.intEmail,
      responses.intSchool
    );
    teamArr.push(intern);
    //employeeId.push(responses.intID);
    popTeam()
  });
};



menu();





module.exports = { teamArr };