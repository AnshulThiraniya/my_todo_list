import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import allUsersRoute from "./UserControllerRoutes.js"

mongoose.set("strictQuery", true);
const app = express();
app.use(bodyParser.json());
app.use(express.json());

dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect("mongodb+srv://anshul:anshul@cluster0.njobxxh.mongodb.net/?retryWrites=true&w=majority");
      console.log("Connected to mongodb");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });
  
  app.use(cors());
  app.use("/api/anshul/users/", allUsersRoute); ////////// Here we are create a user

  app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
  });