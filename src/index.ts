import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import connect from "./connectDB/connectDB";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

connect();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
