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

app.post("/api/transcations", async (req, res) => {
  //title, amount, category, user_id
  try {
    const { title, amount, category, user_id } = req.body;
    if (!title || !category || !user_id || amount === undefined) {
      return res.status(400).json({ message: "All Fields are required" });
    }

    const transaction =
      await sql` INSERT INTO transcations(user_id,title,amount,category)
      VALUES (${user_id},${title},${amount},${category}) 
      RETURNING *
      `;
    console.log(transaction);
    res.status(201).json(transaction[0]);
  } catch (error) {
    console.log("Error Creating the transaction", error);
    res.status(500).json({ message: "Internel Server Error" });
  }
});

//Get Request
app.get("/api/transcations/:user_Id", async (req, res) => {
  try {
    const { user_Id } = req.params;
    console.log(user_Id);

    const transactions =
      await sql` Select * From transcations where user_id= ${user_Id} 
     ORDER BY created_at DESC `;

    res.status(200).json(transactions);
  } catch (error) {
    console.log("Error getting the transaction", error);
    res.status(500).json({ message: "Internel Server Error" });
  }
});

//Delete  Request
app.delete("/api/transcations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transactions =
      await sql` Delete From transcations where id= ${id}  RETURNING *`;
    if (transactions.length === 0) {
      return res.status(400).json({ message: "Transcations not found" });
    }
    res.status(200).json({ message: "Transcation deleted Successfully" });
  } catch (error) {
    console.log("Error deletig the transaction", error);
    res.status(500).json({ message: "Internel Server Error" });
  }
});

console.log("my port", process.env.PORT);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
