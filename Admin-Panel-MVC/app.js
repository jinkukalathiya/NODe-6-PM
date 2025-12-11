const express = require('express');

const port = 9001;

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.urlencoded());

const adminRoutes = require('./routes/adminRoutes');

app.use('/admin', adminRoutes);

app.get('/',(req,res) => {
    res.redirect("/admin");
})

app.listen(port, (err) => {
    if(err){
        console.log("Error to Start Server..");
    }
    console.log("Server Start on http://localhost:9001");  
})