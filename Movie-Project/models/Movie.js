const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    languages : {
        type: [String],
        default: []
    },
    genre : {
        type: [String],
        default: []
    },
    poster : {
        type : String,
        required: true
    },
    rating : {
        type : Number,
        required: true
    },
    duration : {
        type : String,
        required: true
    },
    desc : {
        type : String,
        required: true
    }
});

module.exports = mongoose.model("Movie", movieSchema);