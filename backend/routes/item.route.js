import { Router } from "express";
import { createItem, getItems, updateItem, deleteItem, deleteAllItems } from "../controllers/item.controller.js";
Router.post("/items", createItem)

Router.get("/items", getItems)

Router.put("/items:id", updateItem)

Router.delete("/items:id", deleteItem)

Router.delete("/items", deleteAllItems)

export default Router;