var express = require('express');
var router = express.Router();

var movieCtrl = require('../controllers/movie');

//GET  movies
router.get('/movies', movieCtrl.getAllMovies);

//POST movies
router.post('/movies', movieCtrl.createNewMovie);

//GET movies/:id
router.get('/movies/:id', movieCtrl.getMovie);

//PUT movies/:id
router.put('/movies/:id', movieCtrl.updateMovie);

//DELETE
router.delete('/movies/:id', movieCtrl.deleteMovie);



module.exports = router;
