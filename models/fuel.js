var mongoose = require('mongoose');

var FuelSchema = new mongoose.Schema({
  date: Date,
  boat: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Boat'
  }],
  fueltype: String,
  cost: Number,
  gallons: Number,
  engineHours: Number
});

module.exports = mongoose.model('Fuel', FuelSchema);