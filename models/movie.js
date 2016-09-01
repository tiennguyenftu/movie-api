var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movie = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    imdb: {
        type: Number,
        default: 0,
        min: 0,
        max: 10
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 10
    },
    genres: {
        type: [String],
        required: true
    },
    actors: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Movie', movie);