var Movie = require('../models/movie');

module.exports.getAllMovies = function (req, res, next) {
    Movie.find({}, function (err, movies) {
        if (err) return next(err);
        if (!movies) return res.json({msg: 'No movies found'});
        res.json(movies);
    });

};

module.exports.createNewMovie = function (req, res, next) {
    var body = req.body;
    var movie = new Movie({
        title: body.title,
        description: body.description,
        year: body.year,
        time: body.time,
        imdb: body.imdb,
        rating: body.rating,
        genres: body.genres,
        actors: body.actors
    });
    movie.save(function (err) {
        if (err) return next(err);
        res.json(movie);
    });
};

module.exports.getMovie = function (req, res, next) {
    Movie.findById(req.params.id, function (err, movie) {
        if (err) return next(err);
        res.json(movie);
    });
};

module.exports.updateMovie = function (req, res, next) {
    Movie.findOneAndUpdate({id: body.id}, req.body, {new: true, upsert: true}, function (err, movie) {
        if (err) return next(err);
        res.json(movie);
    });
};

module.exports.deleteMovie = function (req, res, next) {
    Movie.findOneAndRemove({id: req.body.id}, function (err) {
        if (err) return next(err);
        res.json({msg: 'Successful remove the movie'});
    });
};