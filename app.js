require('./config/config'); //Init config variables

// Variables
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var contacts = require('./routes/contactList.routes');

// App uses
publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/api', contacts);

// Listens server
app.listen(CONFIG.port);
module.exports = app;
