import express from "express";

const app = express();

app.get("/",(req,res) =>{
    res.send("It's Working with update perfect");
});

app.listen(5001, () => {
  console.log("Server is up and running on PORT:5001");
});
