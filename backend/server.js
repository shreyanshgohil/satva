import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "./routes/index.js";
import cors from "cors";
import session from "express-session";
import MongoDBSession from "connect-mongodb-session";
// Inits

config();
const app = express();
const MongoDBStore = MongoDBSession(session);

const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: false, // Set it to true if using HTTPS
      maxAge: 24 * 60 * 60 * 1000, // Session expiration time (1 day)
    },
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// Routes
app.use("/user", userRoutes);

// Connection to DB and starting the server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"));
app.listen(process.env.PORT, () => console.log("server is started"));
