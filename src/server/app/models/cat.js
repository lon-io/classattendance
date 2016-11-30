var mongoose = require('mongoose');

var CatSchema = mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});

var Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;