const express = require('express');

const port = 9000;

const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/node-6-pm')
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("Error to Connect MongoDB :",err));

const studentRoute = require('./routes/studentRoutes');

app.use("/students",studentRoute);

app.get("/",(req,res) => {
    res.redirect("/students");
})

app.listen(port, (err) => {
    if(err){
        console.log("Error in Server Start...!");
    }
    console.log("Server Start...!");
})
