var express = require('express');
var Maintenance = require('../models/maintenance');
var router = express.Router();

router.route('/')
  .get(function(req, res){
    Maintenance.find(function(err, maintenances){
      if(err) return res.status(500).send(err);
      return res.send(maintenances);
    });
  })

  .post(function(req, res){
    Maintenance.create(req.body, function(err, maintenance){
      if (err) return res.status(500).send(err);
      return res.send(maintenance);
    });
  });

router.route('/:id')
  .get(function(req, res){
    Maintenance.findById(req.params.id, function(err, maintenance){
      if (err) return res.status(500).send(err);
      return res.send(maintenance);
    });
  })
  .put(function(req, res){
    Maintenance.findByIdAndUpdate(req.params.id, req.body, function(err){
      if(err) return res.status(500).send(err);
      return res.send({message: 'Update Successful'});
    })
  })
  .delete(function(req, res){
    Maintenance.findByIdAndRemove(req.params.id, function(err){
      if(err) return res.status(500).send(err);
      return res.send({message: 'Removed Maintenance log'})
    })
  });

  module.exports = router;