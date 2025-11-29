const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

app.set('view engine','ejs');

app.use('/',express.static(path.join(__dirname,'public')));

const middleware = (req,res,next) => {
    if(req.query.register = "Yes"){
        return next();
    }
    return res.redirect('/');
}

app.get("/",(req,res) => {
    res.render("dashboard");
})
app.get("/withOutMenu",middleware,(req,res) => {
    res.render("layout-without-menu");
})
app.listen(port, (err) => {
    if(err){
        console.log("Server Not Start on Port...");
    }
    console.log("Server Start on Port http://localhost:9000/");
})