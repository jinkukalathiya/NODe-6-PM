const express = require('express');

const app = express();

const port = 8000;

app.set("view engine","ejs");

app.use(express.urlencoded());

// Student Array

let students = [
    {
        id : 1,
        name : "Mehul",
        city : "Surat"
    },
    {
        id : 2,
        name : "Dhrumil",
        city : "Surat"
    },
    {
        id : 3,
        name : "Krinal",
        city : "Surat"
    },
    {
        id : 4,
        name : "Manorie",
        city : "Surat"
    }
]

app.get("/show",(req,res) => {
    res.render('showData',{students});
});

app.get("/add",(req,res) => {
    res.render("form");
})

app.post("/addData",(req, res) =>{
    const newStudent = {
        id: Number(req.body.id),
        name: req.body.name,
        city: req.body.city
    };

    students.push(newStudent);
    
    res.redirect("/show");
})

app.get("/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    students = students.filter(stu => stu.id !== id);
    // console.log(students);

    res.redirect("/show");
})

app.get("/edit/:id",(req, res) => {
    const id = Number(req.params.id);
    const student = students.find(stu => stu.id === id);
    console.log(student);

    res.render("edit", {student});
})

app.post("/update/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(stu => stu.id === id);

    students[index].name = req.body.name;
    students[index].city = req.body.city;

    res.redirect("/show");
})
app.listen(port,(err) => {
    if(err){
        console.log("Server not start on Port...");
    }
    console.log("Server Start on http://localhost:8000/");
})