import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./model/routes/userRoute.js"
import cors from "cors"


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
       .connect(MONGOURL)
       .then(()=>{
        console.log("DB connected succefully.")
        app.listen(PORT,()=>{
            console.log(`server is running on port :${PORT} `)
        });

       })

       .catch((error) => console.log(error));

       app.use("/api", route);