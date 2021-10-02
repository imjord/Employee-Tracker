const inquirer = require('inquirer'); // import in quirer
const cTable = require('console.table') // import required package for assignemnt never used before 



inquirer.prompt([
    {
        type:'checkbox',
        name: 'myChoices',
        message: 'What would you like to do?',
        choices: ["View all employees", "View all employess by department", "View employess by manager", "add employee", "remove employee", "updated employee role", "update employee manager"],
        default: 'View all employees'
    }
]).then(answers => {
console.log('Answer:' + answers)
});