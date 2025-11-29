const express = require('express');
const app = express();
const port = 8020;

app.set("view engine", "ejs");

app.use(express.static("public"));

// function requestHandler(req, res,next) {
//     console.log("Request :",req.method, req.url);
//     next();
// }

// app.use(requestHandler);

const middleware = (req,res, next) => {
    // console.log("Hello....");
    if(req.query.age >= 18){
        return next();
    }
    return res.redirect("/");
}
app.get("/",(req,res) => {
    res.render("index");
})
app.get("/home",middleware,
    (req,res) => {
    res.render("home");
})

app.get("/about",(req,res) => {
    res.render("about");
})

app.listen(port, (err) => {
    if(err){
        console.log("Server Not Start on Port...");
    }
    console.log("Server Start on Port http://localhost:8020/");
})