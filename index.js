const inquirer = require('inquirer'); // import in quirer
require('console.table') // import required package 
const db = require('./database/connection.js'); // import my database 



    // can sucessfully query from table
    // db.query('SELECT * FROM employee;', (err, rows) => {
    //     console.log(err);    
    // console.table(rows)})


    // prompt the user with questions NODE INDEX
    function initialList () {
        console.log('=====================================================Employee Tracker================================')
        return  inquirer.prompt([
            {
                type:'list',
                name: 'myChoices',
                message: 'What would you like to do?',
                choices: ["View all employees","view all departments", "view all roles",  "add employee", "add department", "add role", "Exit"],
                default: 'View all employees'
            }
        ]).then(answers => {
                    // add a condititional if elses for their choices. 
                    if(answers.myChoices === 'View all employees') {
                        db.query('SELECT * FROM employee', (err,rows) => {
                            console.table(rows)
                            // display the employees then return to the prompt function 
                            timer();
                        })
                    } else if (answers.myChoices === "view all departments"){
                        db.query('SELECT * FROM department', (err, rows) => {
                            console.table(rows);
                            timer();
                        })
                    } else if (answers.myChoices === "view all roles"){
                        db.query('SELECT * FROM role', (err, rows) => {
                            console.table(rows);
                            timer();
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
                                message: "what is the employee id?"
                            },
                            {
                                type: 'Input',
                                name: 'employeeManager',
                                message: "what is the employees manager id?"
                            }

                        ]).then(answers=> {
                            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${answers.employeeRole}', '${answers.employeeManager}')`, (err, rows) => {
                                if(err) throw err;
                                console.log("employee added");
                                timer();
                            }
                )
                        })
                        } else if (answers.myChoices === "add department"){
                        inquirer.prompt([
                                    {
                                        type: 'Input',
                                        name: 'addDepartment',
                                        message: "what is the department name?"
                
                                    }
                                ]).then(answers => {
                                    db.query(`INSERT INTO department (name) VALUES ("${answers.addDepartment}")`, (err, rows) => {
                                        if(err) throw err;
                                        console.log("department added");
                                        timer();
                                    })
                                    // db.query(`INSERT INTO department() VALUES (?)`,[answers.addDepartment], (err,rows)=>{
                                    //     console.table(rows)
                                    // })
                                })
                            } else if(answers.myChoices == 'add role') {
                                inquirer.prompt([
                                    {
                                        type: 'Input',
                                        name: 'addRole',
                                        message: "what is the role name?"
                                    },
                                    {
                                        type: 'Input',
                                        name: 'addSalary',
                                        message: "what is the role salary?"
                                    },
                                    {
                                        type: 'Input',
                                        name: 'addDepartment',
                                        message: "what is the role department id? if no department, leave 1 default role please" 
                                    },
                                ]).then(answers => {
                                   
                                    db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${answers.addRole}", "${answers.addSalary}", "${answers.addDepartment}")`, (err, rows) => {
                                        if(err) throw err;
                                        console.log("role added");
                                        timer();
                                    })
                                })   


                            } else {
                                console.log("Thank you for using the employee tracker");
                                process.exit();
                            }

                }) 
        
    }

   

function timer(){
    setTimeout(()=>{
        initialList();
    }, 2000)
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

