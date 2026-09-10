import express from "express";

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Test route (created in Exercise 6)
import testRoutes from "./routes/testRoutes.js";
app.use("/api/test", testRoutes);

export default app;