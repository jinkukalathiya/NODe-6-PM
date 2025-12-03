const express = require('express');

const route = express.Router();

const multer = require('multer');

const path = require('path');

const movieCtl = require('../controllers/movieController');

// Movie Poster Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"public/uploads");
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// File Filter
const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

const upload= multer({
    storage : storage,
    fileFilter : fileFilter
})

route.get("/", movieCtl.getAllMovies);

module.exports = route;