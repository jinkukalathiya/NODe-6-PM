const express = require('express');

const port = 9000;

const mongoose = require('mongoose');

const multer = require('multer');

const path = require('path');

const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : true}));

app.use('/uploads',express.static('uploads'));

mongoose.connect("mongodb://localhost:27017/node-6-pm")
    .then(() => console.log("MongoDB Connected.."))
    .catch(err => console.log("Error To Connect MongoDB.."));

const Student = require('./models/Student');

const imageStorage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage : imageStorage})

app.get("/",(req,res) => {
    res.render("add");
})

app.post("/addData",upload.single("image"), async(req, res) => {
    const {name, city, age} = req.body;

    await Student.create({
        name : name,
        city : city,
        age : age,
        image : req.file ? req.file.filename : null
    });

    res.redirect("/view");
});

app.get("/view", async (req, res) => {
    const allStudent = await Student.find();
    console.log(allStudent);

    res.render("view", {students : allStudent});
})

app.get("/delete/:id", async (req, res) => {
    const id = req.params.id;

    const student = await Student.findById(id);

    if(student.image){
        const imagePath = path.join(__dirname,"uploads",student.image);
        if(fs.existsSync(imagePath)){
            fs.unlinkSync(imagePath);
        }
    }

    await Student.findByIdAndDelete(id);

    res.redirect("/view");
})

app.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const student = await Student.findById(id);
    res.render("edit",{student});
})

app.post("/update/:id", upload.single("image"), async (req, res) => {
    const id = req.params.id;
    const {name, city, age} = req.body;

    const oldStudent = await Student.findById(id);

    let newImage = oldStudent.image

    if(req.file){
        newImage = req.file.filename;
        if(oldStudent.image){
            const oldPath = path.join(__dirname,"uploads",oldStudent.image);
            if(fs.existsSync(oldPath)){
                fs.unlinkSync(oldPath);
            }
        }
    }
    await Student.findByIdAndUpdate(id, {
        name,
        city,
        age,
        image : newImage
    });

    res.redirect("/view");
})


app.listen(port,(err) => {
    if(err){
        console.log("Server not start on Port...");
    }
    console.log("Server Start on http://localhost:9000/");
});