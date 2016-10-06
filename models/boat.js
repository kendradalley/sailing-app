var mongoose = require('mongoose');


var BoatSchema = new mongoose.Schema({
  name: String,
  make: String,
  model: String,
  year: Number,
  image: String,
  length: Number,
  lwl: Number,
  beam: Number,
  draft: Number,
  enginemake: String,
  enginemodel: String,
  horsepower: Number,
  hours: Number,
  fuel: Number,
  water: Number,
  holdingtank: Number,


});

module.exports = mongoose.model('Boat', BoatSchema);
