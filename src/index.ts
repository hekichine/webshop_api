import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connect from "./connectDB/connectDB";
import "dotenv/config";
import productRoutes from "./routes/products";
import RootRoutes from "./routes/RootRoutes";

const app = express();
const port = process.env.PORT;

app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

connect();

RootRoutes(app);
productRoutes(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
