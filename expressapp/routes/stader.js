var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const { count } = require('../Models/staderModel');
var staderModel = require('../Models/staderModel');

// Hämta alla städer
router.get('/', function(req, res, next) {
	staderModel.find(function(err, stader) {
		if(err) return next(stader);
		res.status(200).json(stader);
	});
});

// Hämta data för stad enligt namn
router.get('/:cityname', function(req, res, next){
	staderModel.find({ cityname: req.params.cityname}, req.body).exec(function(err, stader){
		if(err) return next(err);
		res.status(200).json(stader);
	})
});

router.post('/insert', function(req, res, next){
	staderModel.create(req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

// router.put('/:id', function(req, res, next) {
// 	staderModel.findByIdAndUpdate(req.params.id, req.body).exec(function(err, post){
// 		if(err) return next(err);
// 		res.status(200).json(post);
// 	});
// });

router.put('/:update', function(req, res, next) {
	staderModel.findByIdAndUpdate(req.params.update, req.body).exec(function(err, post){
		if(err) return next(err);
		res.status(200).json(post);
	});
});


router.delete('/:delete', function(req, res, next){
	staderModel.findByIdAndDelete(req.params.delete, req.body, function(err, post){
		if(err) return next(err);
		res.status(200).json(post);
	});
});


module.exports = router;
