import productController from "../controller/products";
import express from "express";
import "dotenv/config";
import upload from "../midleware/upload";

const router = express.Router();
const api_url = process.env.API_URL;

const productRoutes = (app: any) => {
  router.get("/", productController.getAll);

  // create
  router.post("/", upload.array("images"), productController.create);

  //update
  router.patch("/:slug", upload.array("images"), productController.update);

  // find one
  router.get("/:slug", productController.findId);

  // delete
  router.delete("/:slug", productController.delete);

  app.use(`${api_url}/product`, router);
};

export default productRoutes;
