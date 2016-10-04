var mongoose = require('mongoose');

var MaintenanceSchema = new mongoose.Schema({
  title: String,
  description: String,
  // boat: reference or embed?
  vendor: String,
  category: String,
  date: Date,
  cost: Number,
  notes: String
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);