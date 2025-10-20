import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

dotenv.config();
const app = express();

//middleware

app.use(express.json());

const PORT = process.env.PORT || 5001;

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transcations(
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;

    console.log("Database initalized successfully");
  } catch (error) {
    console.log("error initalizing database", error);
    process.exit(1); //status code 1 faliure , 0 Success
  }
}


app.post("/api/transcations", async (req,res)=>{

  //title, amount, category, user_id
  try {
      const {title,amount,category,user_id}=req.body;
      if(!title || !category || !user_id || amount===undefined)
      {
        return res.status(400).json({message:"All Fields are required"});
      }

     const transaction = await sql` INSERT INTO transcations(user_id,title,amount,category)
      VALUES (${user_id},${title},${amount},${category}) 
      RETURNING *
      `;
      console.log(transaction);
      res.status(201).json(transaction[0]);

  } catch (error) {
    console.log("Error Creating the transaction",error);
    res.status(500).json({message: "Internel Server Error"})
  }
});

console.log("my port", process.env.PORT);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
