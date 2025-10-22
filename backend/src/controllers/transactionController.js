import {sql} from "../../config/db.js"

export async function getTransactionByUserId(req,res) {
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
}
export async function createTransaction(req, res) {
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
}

export async function deleteTransaction  (req, res) {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).json({ message: "Invalid transaction ID" });
    }
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
}

export async function getSummaryByUserId (req, res)  {
  try {
    const { user_Id } = req.params;

    const transactions =
      await sql` Select COALESCE(SUM(amount),0)  as balance From transcations where user_id= ${user_Id} `;

    const incomeResult =
      await sql` Select COALESCE(SUM(amount),0)  as income From transcations where 
      user_id= ${user_Id}  AND amount > 0`;

    const expenseResult =
      await sql` Select COALESCE(SUM(amount),0)  as expense From transcations where 
      user_id= ${user_Id}  AND amount < 0`;

    res.status(200).json({
      balance:transactions[0].balance,
      income:incomeResult[0].income,
      expense:expenseResult[0].expense
    });

  } catch (error) {
    console.log("Error in getting the transaction Summary", error);
    res.status(500).json({ message: "Internel Server Error" });
  }
}
