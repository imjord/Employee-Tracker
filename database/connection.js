const mysql = require('mysql2'); // CONNECT TO MYSQL 


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '1290BecomeEzdeveloper123',
      database: 'Employee_Tracker'
    },
    console.log('Connected to the EMPLOYEE database.')
  );

  module.exports = db;  // export me db 