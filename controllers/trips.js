var express = require('express');
var Trip = require('../models/trip');
var router = express.Router();

router.route('/trips')
  .get(function(req, res){
    Trip.find(function(err, trips){
      if(err) return res.status(500).send(err);
      return res.send(trips);
      });
  })

  .post(function(req, res){
    Trip.create(req.body, function(err, trip){
      if (err) return res.status(500).send(err);
      return res.send(trip);
    });
  });

  router.route('/trips/:id')
    .get(function(req, res){
      Trip.findById(req.params.id, function(err, trip){
        if(err) return res.status(500).send(err);
        return res.send(trip);
      });
    })
    .put(function(req, res){
      Trip.findByIdAndUpdate(req.params.id, req.body, function(err){
        if(err) return res.status(500).send(err);
        return res.send({message: 'Update Successful'});
      })
    })
    .delete(function(req, res){
      Trip.findByIdAndRemove(req.params.id, function(err){
        if (err) return res.status(500).send(err);

        return res.send({message: 'Removed successfully'})
      })
    });

    module.exports = router;