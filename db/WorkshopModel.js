const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true,"Name cannot be blank"]
    },
    type: {
        type : String,
        required : [true, "Cannot be empty"]
    },
    date: {
        type : String,
        required : [true]
    },
    venue: {
        type : String,
    },
    link : {
        type : String
    }
})


module.exports = mongoose.model("WORKSHOPS",workshopSchema);