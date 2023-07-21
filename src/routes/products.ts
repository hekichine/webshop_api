import productController from "../controller/products";
import express from "express";
import "dotenv/config";

const router = express.Router();
const api_url = process.env.API_URL;

const productRoutes = (app: any) => {
  router.get("/", productController.getAll);

  // create
  router.post("/", productController.create);

  //update
  router.patch("/:slug", productController.update);

  // find one
  router.get("/:slug", productController.findId);

  // delete
  router.delete("/:slug", productController.delete);

  app.use(`${api_url}/products`, router);
};

export default productRoutes;
