import express from "express";
import { dbConnect } from "./data/dbConnect.js";
import characterRoute from "./routes/characterController.js"
import userRoute from "./routes/user.js"
import cors from 'cors'
const app = express();
const port = 8000;

//dbConnect
dbConnect();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());


app.use("/api/v1/character", characterRoute);
app.use("/api/v1/user", userRoute);

// Serve a welcome message at the root
app.get("/", (req, res) => {
  res.send("Welcome to the NFT Marketplace!");
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

// Start the server
// app.listen(port, '0.0.0.0', () => {
//   console.log(`Server is running on http://0.0.0.0:${port}`);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
