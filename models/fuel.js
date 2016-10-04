var mongoose = require('mongoose');

var FuelSchema = new mongoose.Schema({
  date: Date, // is this auto-generated?
  // boat // ref?
  cost: Number,
  gallons: Number,
  engineHours: Number
});

module.exports = mongoose.model('Fuel', FuelSchema);