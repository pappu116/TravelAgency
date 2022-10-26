import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import usersRoute from "./routes/usersRoute.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongDb")
      } catch (error) {
        handleError(error);
      }
};

// MongoDisConnect Code
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


// Middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/hotels",hotelsRoute)


// Error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something Went Wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})


app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});