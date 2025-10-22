
import express from "express"
import { createTransaction, deleteTransaction, getSummaryByUserId, getTransactionByUserId } from "../controllers/transactionController.js";

const router= express.Router();

//transaction post
router.post("/", createTransaction);

//Get Request
router.get("/:user_Id",getTransactionByUserId);

//Delete  Request
router.delete("/:id", deleteTransaction);

//summary
router.get("/summary/:user_Id",getSummaryByUserId);

export default router;