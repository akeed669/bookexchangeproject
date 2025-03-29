import express from "express";
import { addBook, getAllBooks } from "../controllers/bookController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", auth, addBook);
router.get("/listAll", auth, getAllBooks);

export default router;
