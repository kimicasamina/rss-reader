import express from "express";
import connectDB from "./config/db.js";

// middleware imports
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ErrorHandler } from "./middleware/errorHandler.js";

// routes
import userRoute from "./routes/userRoute.js";
import subscriptionRoute from "./routes/subscriptionRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

const app = express();
dotenv.config();
connectDB();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL
        : "http://localhost:5173",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Server is ready..."));
}

app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/subscription", subscriptionRoute);
app.use(ErrorHandler);

app.listen(process.env.PORT || 4000, () => {
  console.log("SERVER STARTS AT:", process.env.PORT);
  console.log("NODE_ENV:", process.env.NODE_ENV);
});
