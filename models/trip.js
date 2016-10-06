var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
   boat: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boat'
    }],
    title: String,
    date: Date,
    time: Number,
    startdate: Date,
    enddate: Date,
    starttime: Number,
    endtime: Number,
    image: String,
    distance: Number,
    departure: String,
    destination: String,
    enginehours: Number,
    speed: Number,
    windSpeed: Number,
    windDirection: String,
});

module.exports = mongoose.model('Trip', TripSchema);
