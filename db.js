require('./config/config'); //Init config variables

const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : CONFIG.RDS_HOSTNAME,
    database : CONFIG.RDS_DATABASE,
    user     : CONFIG.RDS_USERNAME,
    password : CONFIG.RDS_PASSWORD,
    port     : CONFIG.RDS_PORT
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');

    connection.query(`create table if not exists contacts(contact_id int primary key auto_increment,
                                                          name varchar(25) not null,
                                                          email varchar(25) not null,
                                                          number varchar(10) not null)`, (err, results, fields) => {
                                                            if (err){
                                                              console.log(err.message);
                                                            }
                                                          });
  });

  module.exports = connection;