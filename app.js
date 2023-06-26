/*jshint esversion:6*/
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var newurl = "";
var change = "";
app.post("/",function(req,res){
    const tre = req.body.changetheurl;
    change = tre;
    newurl = "/"+tre;
    res.redirect(newurl);
});
app.get("/wish",function(req,res){
    res.render("/home/kingfisher/Desktop/wishyourloveones/views/Wish");
});
app.get("/skdfhskdjfhskdfjhsk",function(req,res){
    res.render("index")
})
app.get("/gift",function(req,res){
    res.render("new");
})

// how to change the route with the previous input? 
// app.get("/",function(req,res){
//     res.sendFile("/home/kingfisher/Desktop/wishyourloveones/dist/index.html");
// });
// i want to change the url name
var neww = "";
app.get("/",function(req,res){
    console.log(neww);
    res.render("list",{rahulsaini:""});
});
app.get("/birth",function(req,res){
    res.render("birth",{rahulsaini:""});
});
app.get("/:pot",function(req,res){
    var id = req.params.pot;
    res.render("list",{rahulsaini:id});
});













app.listen(8755,function(){
    console.log("server is started on 8755");
});