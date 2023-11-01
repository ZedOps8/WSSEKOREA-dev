const mysql = require('mysql');
let pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'task1database-instance-1.cgligov2d83s.ap-south-1.rds.amazonaws.com',
  user            : 'admin',
  password        : 'task1database',
  database        : 'competitor'
});

module.exports = pool