const express = require('express');

const port = 9000;

const path = require('path');

const app = express();

const connectDB = require('./config/db');

connectDB();

const movieRoutes = require('./routes/movieRoutes');

app.set('view engine', 'ejs');

// app.use('/uploads', path.join(__dirname,'uploads'));

app.use(express.urlencoded());

app.use('/movies',movieRoutes);

app.get('/',(req,res) => {
    res.redirect("/movies");
})

app.listen(port,(err) => {
    if(err){
        console.log("Error to Start Server..");
    }
    console.log("Server Running on port http://localhost:9000");
})

