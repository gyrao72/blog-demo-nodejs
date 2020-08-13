// jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const blogRoute = require("./routes/blogRoute");
const Query = require("./models/query");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

const dbURI = "mongodb+srv://gyrao:Allen123@nodejs-base.a6ug8.gcp.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result) =>{
        app.listen(process.env.PORT || 3000);
        console.log("Server is Running");
        })
    .catch((err) =>console.log(err));



app.get("/",(req,res) =>{
    res.render("home");
});


app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});


app.post("/contact",(req,res)=>{
    const query = new Query(req.body);

    query.save()
        .then((result)=>{
            res.render("success");
        })
        .catch((err)=>{
            console.log(err);
        });
});


app.use(blogRoute);

