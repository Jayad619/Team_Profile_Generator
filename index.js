const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Library/manager");
const Engineer = require("./Library/engineer");
const Intern = require("./Library/intern");

//require the function from folder src that has the template.js in it.
const renderHtml = require("./src/template");

//create an empty array that I can use to push my objects into in order to create an array of objects.
const members = [];

function promptManager() {
    inquirer.prompt([{
        // manager questions
        type: 'input',
        name: 'name',
        message: 'What is your name manager?',
    }, {
        type: 'input',
        name: 'id',
        message: 'Enter your ID number please',
    }, {
        type: 'input',
        name: 'email',
        message: 'Enter your email address please',
    }, {
        type: 'input',
        name: 'office number',
        message: 'What is your office number please',
    }, ])
    .then((answers) => {
      //use the Manager constructor to create my new Manager object to be displayed.
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );

      members.push(manager);

      //after being done with manager questions need to create a loop to go into main menu.
      menu();
    });
}
//create function with main menu for the next team members and/or Teambuild
function menu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "mainMenu",
          message: "What would you like to do next?",
          choices: ["Engineer", "Intern", "Build Team"],
        },
      ])
      .then((answers) => {
        //build a switch case to deal with the 3 options given to the user
        switch (answers.mainMenu) {
          case "Engineer":
            promptEngineer();
            break;
          case "Intern":
            promptIntern();
            break;
          default:
            buildTeam();
        }
      });
  }
  
  promptManager();
  
  function promptEngineer(){
    inquirer.prompt([
      {
        // engineer questions
        type: 'input',
        name: 'engineer name',
        message: 'Hi engineer, what is your name please?',
    }, 
    {
        type: 'input',
        name: 'engineer id',
        message: 'Enter your ID number please'
    }, {
        type: 'input',
        name: 'engineer email',
        message: 'Enter your email address please'
    }, {
        type: 'input',
        name: 'engineer github',
        message: 'What is your github username?'
    },
]).then((answers)=>{
  const engineer= new Engineer(
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.engineerGithub
  )
  members.push(engineer)
  menu();
})

} 
function promptIntern(){
    inquirer.prompt([
    {
        // intern questions
        type: 'input',
        name: 'intern name',
        message: 'Hi intern, what is your name?'
    }, {
        type: 'input',
        name: 'intern id',
        message: 'Enter your ID number'
    }, {
        type: 'input',
        name: 'intern email',
        message: 'Enter your email address'
    }, {
        type: 'input',
        name: 'intern school',
        message: 'What school did you study at?'
    },
]).then((answers)=>{
        const intern= new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        )
        members.push(intern)
        menu();
     })
   }

    //created function buildTeam to allow the index.html in dist to be overwritten with the new information input by the user. 
function buildTeam(){
    //write file sync takes the path to the file I want to overwrite.
    //and the function with the parameter that contains all the data with the new objects to be rendered.
      fs.writeFileSync("./dist/index.html", renderHtml(members),(err)=>{
        if(err) throw err;
      })
  }