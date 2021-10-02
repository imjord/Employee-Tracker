const inquirer = require('inquirer'); // import in quirer
require('console.table') // import required package 
const db = require('./database/connection.js'); // import my database 



    // can sucessfully query from table
    db.query('SELECT * FROM employee;', (err, rows) => {
        console.log(err);    
    console.table(rows)})


    prompt the user with questions NODE INDEX
    inquirer.prompt([
        {
            type:'list',
            name: 'myChoices',
            message: 'What would you like to do?',
            choices: ["View all employees", "View all employess by department", "View employess by manager", "add employee", "remove employee", "updated employee role", "update employee manager"],
            default: 'View all employees'
        }
    ]).then(answers => {
    console.log('Answer:' + answers) // console log what user checkboxes
    });

























































// ignore these just debuggins with abcbc assistant
    // db.query('SELECT * FROM employee', (err, rows) => {    
    //     let departments = rows
    //     console.table(departments)
    //     })



// function randomfact() {
//     let sql = 'SELECT * FROM employee;';
//     return new Promise((resolve, reject) => {
//       db.query(sql, (err, result) => {
//         if (err) {
//           reject(err);
//         }
//         else {
//           resolve(result);
//         }
//       });
//     });
//   }


//   function runQuery() {
//     const result = await randomfact();
    
//     console.log(randomfact());
//  };


//  runQuery();

