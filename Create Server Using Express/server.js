const express = require('express');

const app = express();

const port = 9000;

app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.render("Home", {name: "Jinkal Kalathiya", subject: "Node JS"});
});

app.get("/about",(req,res) => {
    res.render("About");
});

app.listen(port, (err) =>{
    if(err){
        console.log("Problem to Start Server...");
    }
    console.log("Server Start on http://localhost:9000/");
})