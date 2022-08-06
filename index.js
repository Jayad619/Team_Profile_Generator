const inquirer = require('inquirer');
const { promises: fs } = require('fs')

async function managerQuestions() {
    const answers = await inquirer.prompt([{
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
    }])

    const templateContent = await fs.readFile('dist/index.html');
    const newTemplateContent = Object
    .keys(answers)
    .reduce((previous, current) => previous.replace(`{{${current}}}`, answers[current]), templateContent.toString()) 

await fs.writeFile('index.html', newTemplateContent)
}

managerQuestions()