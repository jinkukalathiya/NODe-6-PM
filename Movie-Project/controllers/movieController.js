const Movie = require('../models/Movie');

const fs = require('fs');

const path = require('path');

exports.getAllMovies = async (req, res) => {
    res.render('index');
}