import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import business from "./routes/business.js";


connectDB();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/business", business)

app.get('/',(req,res) => {
    res.send('API Working')
  });

  app.listen(port, () => console.log(`Server running on ${port}`));