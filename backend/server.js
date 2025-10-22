import express from "express";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionRoute.js"

dotenv.config();
const app = express();

//middleware

app.use(rateLimiter)

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

console.log("my port", process.env.PORT);
app.use("/api/transcations",transactionRoute)

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
