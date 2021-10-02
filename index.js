const inquirer = require('inquirer'); // import in quirer
require('console.table') // import required package 
const db = require('./database/connection.js'); // import my database 



    // can sucessfully query from table
    // db.query('SELECT * FROM employee;', (err, rows) => {
    //     console.log(err);    
    // console.table(rows)})


    // prompt the user with questions NODE INDEX
    function initialList () {
        return  inquirer.prompt([
            {
                type:'list',
                name: 'myChoices',
                message: 'What would you like to do?',
                choices: ["View all employees","view all departments", "view all roles",  "add employee", "add department", "add role"],
                default: 'View all employees'
            }
        ]).then(answers => {
            // add a condititional if elses for their choices. 
            if(answers.myChoices === 'View all employees') {
                db.query('SELECT * FROM employee;', (err,rows) => {
                    console.table(rows)
                    // display the employees then return to the prompt function 
                    initialList();
                })
            } else if (answers.myChoices === "view all departments"){
                db.query('SELECT * FROM department;', (err, rows) => {
                    console.table(rows);
                    initialList();
                })
            } else if (answers.myChoices === "view all roles"){
                db.query('SELECT * FROM role', (err, rows) => {
                    console.table(rows);
                    initialList();
                })
            } else if (answers.myChoices === "add employee") {
                inquirer.prompt([
                    {
                        type: 'Input',
                        name: 'employeeFirstName',
                        message: "what is the employees first name?"

                    },
                    {
                        type: 'Input',
                        name: 'employeeLastName',
                        message: "what is the employees last name?"
                    },
                    {
                        type: 'Input',
                        name: 'employeeRole',
                        message: "what is the employees role?"
                    },
                    {
                        type: 'Input',
                        name: 'employeeManager',
                        message: "what is the employees manager name?"
                    }

                ]).then(answers=> {
                    let firstName = 
                    let lastName = 
                    let role = 
                    let Manager = 

                    if(answers.employeeFirstName){
                        db.query(`INSERT INTO employee (first_name) VALUES (${answers.employeeFirstName});`, (err, rows) => {
                        
                        })
                    }
                })
            }
    
        // console.log('Answer:' + answers) // console log what user checkboxes
        });
    }
   



initialList();





















































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

