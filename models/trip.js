var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
  // boat: reference to boat?
  // date: Date,
  // time: Number, are these automatically created by mongoose
    startdate: Date,
    enddate: Date,
    starttime: Number,
    endtime: Number,
    distance: Number,
    departure: String,
    destination: String,
    enginehours: Number,
    speed: Number,
    windSpeed: Number,
    windDirection: String,
});

module.exports = mongoose.model('Trip', TripSchema);
