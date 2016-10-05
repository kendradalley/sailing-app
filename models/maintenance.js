var mongoose = require('mongoose');

var MaintenanceSchema = new mongoose.Schema({
  boat: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Boat'
  }],
  title: String,
  description: String,
  vendor: String,
  category: String,
  date: Date,
  cost: Number,
  notes: String
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);