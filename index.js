import mongoose from "./connect/connectDB.js";
import 'dotenv/config'
import express from "express"
import cors from 'cors'
import userRouter from "./routes/userRoutes.js";
import categories from "./routes/catagories.js";
import { surgeryRoute } from "./routes/surgeries.js";
import { surgeryBokingRoute } from "./routes/surgeryBooking.js";

const app = express()

const port = process.env.PORT || 4000;  // use process.env.PORT for Vercel

// for mongo db connection
mongoose.connection.on("error", (err) => {
    console.log("Error in connection", err);
})
mongoose.connection.on("open", () => {
    console.log("MongoDB is connected successfully");
});


app.get("/", (req, res) => {
    res.send("Life Line Hospital")
})

app.use(express.json()) // This will allow us to handle JSON bodies
app.use(cors());

app.use("/user", userRouter)
app.use("/catagories", categories)
app.use("/surgeries", surgeryRoute)
app.use("/surgeryRequest", surgeryBokingRoute)

app.listen(port, () => {
    console.log("Server is live on port : ", port);

})