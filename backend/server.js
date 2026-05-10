const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:27017")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const express = require('express');
const app = express();

app.use(express.json());
const users = [
    {"id": 1, "name": "Rupesh", "age": 20},
    {"id": 2, "name": "venkata", "age": 23}
];
//declaring a get request
app.get('/',(req,res)=>{
    res.send("server is running");
    console.log("server is working");
});
//retriving the user names
app.get('/users',(req,res)=>{

    res.json({message: "Users fetches successfully", data: users});
});
app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});
