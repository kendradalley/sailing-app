var express = require('express');
var Fuel = require('../models/fuel');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Fuel.find(function(err, fuels) {
      if (err) return res.status(500).send(err);

      return res.send(fuels);
    });
  })
  .post(function(req, res) {
    Fuel.create(req.body, function(err, fuel) {
      if (err) return res.status(500).send(err);

      return res.send(fuel);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Fuel.findById(req.params.id, function(err, fuel) {
      if (err) return res.status(500).send(err);

      return res.send(fuel);
    });
  })
  .put(function(req, res) {
    Fuel.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'Update successful' });
    });
  })
  .delete(function(req, res) {
    Fuel.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'Deleted Fuel Log' });
    });
  });

module.exports = router;