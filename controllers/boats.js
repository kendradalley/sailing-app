var express = require('express');
var Boat = require('../models/boat');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Boat.find(function(err, boats) {
      if (err) return res.status(500).send(err);

      return res.send(boats);
    });
  })
  .post(function(req, res) {
    Boat.create(req.body, function(err, boat) {
      if (err) return res.status(500).send(err);

      return res.send(boat);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Boat.findById(req.params.id, function(err, boat) {
      if (err) return res.status(500).send(err);

      return res.send(boat);
    });
  })
  .put(function(req, res) {
    Boat.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  })
  .delete(function(req, res) {
    Boat.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  });

module.exports = router;
