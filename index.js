const inquirer = require("inquirer");
const { promises: fs } = require("fs")

async function questions() {
    const answers = await inquirer.prompt([{
        // manager questions
        type: 'input',
        name: 'name',
        message: 'What is your name manager?'
    }, {
        type: 'input',
        name: 'id',
        message: 'Enter your ID number please'
    }, {
        type: 'input',
        name: 'email',
        message: 'Enter your email address please'
    }, {
        type: 'input',
        name: 'office number',
        message: 'What is your office number please'
    }, {
        // engineer questions
        type: 'input',
        name: 'engineer name',
        message: 'Hi engineer, what is your name please?'
    }, {
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
    }, {
        // engineer 2 questions
        type: 'input',
        name: 'engineer 2 name',
        message: 'Hi engineer 2, what is your name please?'
    }, {
        type: 'input',
        name: 'engineer 2 id',
        message: 'Enter your ID number please'
    }, {
        type: 'input',
        name: 'engineer 2 email',
        message: 'Enter your email address please'
    }, {
        type: 'input',
        name: 'engineer 2 github',
        message: 'What is your github username?'
    }, {
        // engineer 3 questions
        type: 'input',
        name: 'engineer 3 name',
        message: 'Hi engineer 3, what is your name please?'
    }, {
        type: 'input',
        name: 'engineer 3 id',
        message: 'Enter your ID number'
    }, {
        type: 'input',
        name: 'engineer 3 email',
        message: 'Enter your email address'
    }, {
        type: 'input',
        name: 'engineer 3 github',
        message: 'What is your github username?'
    }, {
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
    }])

    const templateContent = await fs.readFile("template.html");
    const newTemplateContent = Object.keys(answers).reduce(
        (previous, current) => previous.replace(`{{${current}}}`, answers[current]),
        templateContent.toString()
      );

      await fs.writeFile("dist/index.html", newTemplateContent);
}

questions();