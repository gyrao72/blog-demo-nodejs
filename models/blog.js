// jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema  =new Schema({
    cName:{
        type:String,
        required:true 
    },
    cTitle:{
        type:String,
        required:true
     },  
    cDesc:{
        type:String,
        required:true
    }      
},{timestamps:true});

const Blog = mongoose.model('blog',blogSchema);

module.exports = Blog;
