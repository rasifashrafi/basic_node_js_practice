//creating the express object to be used within the file
const express = require('express');
//the path object helps save and handle the server location
const path = require('path');
const routes = require('./routes');
//Run the express main function and save it as the app object
const app = express();
//app.set allows me to set settings pertaining to this particular server instance
app.set('view engine', 'ejs');
//tells the server instance to serve the public folder to the client
app.use(express.static(path.join(__dirname, 'public')));
//created home page route
app.get('/', routes.home);
//create test route to see how does it work
app.get('/test', routes.test);
//setup a listener to listen for width port we are going to use
app.listen(3002, () => console.log('app listener on port 3000!'));