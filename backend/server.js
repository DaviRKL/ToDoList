import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/item.route.js"
dotenv.config();

const app = express();

//Midleware
app.use(cors());
app.use(express.json());

app.use("/api", itemRoutes);

app.get("/", (req,res) => {
    res.send("API is running");
})

const PORT = process.env.port || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is runnig in port ${PORT}`)
    })
})
