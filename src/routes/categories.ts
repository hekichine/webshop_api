import express from "express";
import categories from "model/categories";
import "dotenv/config";

const router = express.Router();
const api_url = process.env.API_URL;

const cateRoutes = (app: any) => {
  // default
  router.get("/");

  app.use(`${api_url}/category`, router);
};

export default cateRoutes;
