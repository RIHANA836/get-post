const express = require("express");
const app= express();
const mongoose = require("mongoose");
const UserModel= require('./models/Users')

  mongoose.connect("mongodb://localhost:27017/TADatab");

  const cors=require("cors");
  app.use(express.json());
  app.use(cors());

  app.get("/getUsers",(req, res)=>{
    UserModel.find({}, (err,result)=>{
      console.log(result,err)
      if (err) {
        res.json(err);

      } else {
        res.json(result);

      }
    });
  });
  app.post("/createUser",async(req,res)=>{
    const user=req.body;
    const newUser= new UserModel(user);
    await newUser.save();
    res.json(user)
  })
app.listen(3001,() => {
    console.log("Hello")
});