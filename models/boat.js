var mongoose = require('mongoose');

var BoatSchema = new mongoose.Schema({
  name: String,
  make: String,
  model: String,
  year: Number,
  image: String,
  engines: Number,
  batteries: Number,
  generators: Number,
  tanks: Number,

});

module.exports = mongoose.model('Boat', BoatSchema);
