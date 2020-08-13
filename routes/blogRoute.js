// jshint esversion:6

const express = require("express");
const Blog = require("../models/blog");


const router =express.Router();



router.get("/blogs",(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('blogs',{blogs:result});
        })
        .catch((err)=>{
            console.log(err);
        });
});

router.get("/blogs/compose",(req,res)=>{
    res.render("compose");
});

router.post("/blogs/compose",(req,res)=>{
    
    const blog = new Blog(req.body);

    blog.save()
        .then((result)=>{
            res.redirect("/blogs");
        })
        .catch((err)=>{
            console.log(err);
        });

});



router.get("/blogs/:id",(req,res)=>{
    const id =req.params.id;
    Blog.findById(id)
        .then(result=>{
            res.render('single-blog',{blog:result});
        })
    .catch(err=>{
        console.log(err);
    });  
});


module.exports = router;