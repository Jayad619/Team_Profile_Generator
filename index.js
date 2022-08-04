const inquirer = require("inquirer");
const fs = require("fs"); // do I need this?
const path = require("path"); // do I need this?

const employee = require(".lib/employee.js"); // this might not be needed - pass through manager/engineer/intern?
const manager = require(".lib/manager.js");
const engineer = require(".lib/engineer.js");
const intern = require(".lib/intern.js")

// inquirer - first questions (manager)
// then, create object with responses
// then, either run for engineer, intern, or end
// engineer questions
// intern questions
// run for engineer, intern, or end (repeated code)
// end and build web page.