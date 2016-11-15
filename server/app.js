var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/////******************MODULES******************************////
var index = require('./routes/index');
var budget = require('./routes/budget');

/**--------------------------------ROUTES------------------------**/


//**-------------------------------------------------------------**//

//*********************MIDDLEWARE**********************************//
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//*****************************************************************//

//*********EXPRESS ROUTES*****************************************//
app.use('/', index);
app.use('/budget', budget);
//////////////////////////MONGOOSE CONNECTION//////////////////////////////////
var databaseUri = 'mongodb://localhost:27017/budget';
mongoose.connect(databaseUri);
mongoose.connection.on('connected', function(){
  console.log("Mongoose connected to", databaseUri);
});


////////////*******************START SERVER*******************////
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("Listening on port", app.get('port'));
});
