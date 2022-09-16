
const exp=require("express");
const app=exp();
const path= require("path");
app.get("/",function(req,res)
{
    console.log(__dirname);
    res.send("home page");
    //res.sendFile(path.join(__dirname,"home.html"));
});
var port=process.env.PORT || 3000;
app.listen(port);