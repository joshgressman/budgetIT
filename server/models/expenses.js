//budget model for mongoose
//dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var budgetSchema = new Schema({
name: {type: String, required: true},
month: {type: String, required: true},
expenseName: String,
expense: Number,
});

//model created
var expenses = mongoose.model('expenses', budgetSchema);

//Exports model to use in other parts of app
module.exports = expenses;
