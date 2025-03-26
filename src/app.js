import express from "express"
import dotenv from "dotenv"
import cors from "cors"




dotenv.config();
const app = express();

// middlewares 
app.use(cors());
app.use(express.json());


//routes import
import resumeRouter from "./routes/resume.routes.js"


app.use("/api/v1/resume", resumeRouter);



export default app;