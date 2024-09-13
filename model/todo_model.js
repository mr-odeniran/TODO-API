const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');
const getCurrentDateInGMTPlusOne = () => {
    const now = new Date();
    // Adjust to GMT+1 by adding one hour
    const gmtPlusOne = new Date(now.getTime() + (1 * 60 * 60 * 1000));
    // Remove milliseconds
    gmtPlusOne.setMilliseconds(0);
    return gmtPlusOne;
};



const todoSChema = Schema({
    title:{
        type:String,
        require:[true, "title is required"],
    },
    createdAt:{
        type: Date,
        default: getCurrentDateInGMTPlusOne,
    },
    completed:{
        type:Boolean,
        default:false
    }
});


const todo = mongoose.model("todo", todoSChema);

module.exports = todo