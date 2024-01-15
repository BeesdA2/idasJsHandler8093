// app.js
var express = require('express');
 

var cors = require('cors');
var app = express();




 
 



app.use(cors());
//  Explanation: requests to `localhost:3000/` should be redirected to `routes/home.js`
var homeRouter = require('./routes/home')
app.use('/', homeRouter);




var idasNodeJsHandlerRouter = require('./routes/idasNodeJsHandler');
app.use('/idasNodeJsHandler', idasNodeJsHandlerRouter);



module.exports = app;

