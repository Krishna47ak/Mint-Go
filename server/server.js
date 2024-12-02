import express from "express";
import { dbConnect } from "./data/dbConnect.js";
import characterRoute from "./routes/characterController.js"
import stepCountRoute from "./routes/stepCount.js"
const app = express();
const port = 3000;

//dbConnect
dbConnect();

// Middleware to parse JSON requests
app.use(express.json());

app.use("/api/v1/character", characterRoute);
app.use("/api/v1/step", stepCountRoute);

// Serve a welcome message at the root
app.get("/", (req, res) => {
  res.send("Welcome to the NFT Marketplace!");
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
