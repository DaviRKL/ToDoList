import  express from "express";
import { createItem, getItems, updateItem, deleteItem, deleteAllItems } from "../controllers/item.controller.js";

const router = express.Router();

router.post("/items", createItem)

router.get("/items", getItems)

router.put("/items/:id", updateItem)

router.delete("/items:id", deleteItem)

router.delete("/items", deleteAllItems)

export default router;