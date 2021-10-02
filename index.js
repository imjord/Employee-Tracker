const inquirer = require('inquirer'); // import in quirer
const cTable = require('console.table') // import required package 
const db = require('./database/connection'); // import my database 

db.query('SELECT * FROM roleboi', (err, rows) => {
    console.log(rows)
})

// prompt the user with questions NODE INDEX
// inquirer.prompt([
//     {
//         type:'list',
//         name: 'myChoices',
//         message: 'What would you like to do?',
//         choices: ["View all employees", "View all employess by department", "View employess by manager", "add employee", "remove employee", "updated employee role", "update employee manager"],
//         default: 'View all employees'
//     }
// ]).then(answers => {
// console.log('Answer:' + answers) // console log what user checkboxes
// });