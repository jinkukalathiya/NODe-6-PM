const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("StudentTbl", Student);