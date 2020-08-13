// jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema  =new Schema({
    qFname:{
        type:String,
        required:true 
    },
    qEmail:{
        type:String,
        required:true
     },  
    qDesc:{
        type:String,
        required:true
    }      
},{timestamps:true});

const Query = mongoose.model('query',querySchema);

module.exports = Query;