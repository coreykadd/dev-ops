// require('./config/config'); //Init config variables
// require('dotenv').config(); //Init env variables
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'contactlistdb.cwwnavucu4nf.eu-west-1.rds.amazonaws.com',
    database : 'contacts',
    user     : 'corey',
    password : 'Testing22',
    port     : '3306'
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