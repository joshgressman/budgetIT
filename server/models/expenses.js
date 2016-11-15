//budget model for mongoose
//dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var budgetSchema = new Schema({
name: {type: String, required: true},
month: {type: String, required: true},
income: Number,
housing: Number,
auto: Number,
student: Number,
health: Number,
autoIns: Number,
credit: Number,
cell: Number,
cable: Number,
internet: Number,
utility: Number,
misc1: Number,
misc2: Number,
misc3: Number,
misc3: Number,
living: Number,
});

//model created
var expenses = mongoose.model('expenses', budgetSchema);

//Exports model to use in other parts of app
module.exports = expenses;
