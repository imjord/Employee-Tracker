const mysql = require('mysql2'); // CONNECT TO MYSQL 


// Connect to database
const db =  mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '1290BecomeEZdeveloper123',
      database: 'employee_tracker'
    },
    console.log('Connected to the EMPLOYEE database.')
  );


  db.connect(function (err) {  
    if (err) throw err;
    });

  module.exports = db;  // export me db 