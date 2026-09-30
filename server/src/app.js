import express from "express";
import requestLogger from "./middleware/requestLogger.js";
import productRoutes from "./routes/productRoutes.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use("/api/test", testRoutes);
app.use("/api/products", productRoutes);

export default app;