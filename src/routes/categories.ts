import express from "express";
import "dotenv/config";
import categoryController from "../controller/categories";

const router = express.Router();
const api_url = process.env.API_URL;

const cateRoutes = (app: any) => {
  // default
  router.get("/", categoryController.getAll);

  // add category
  router.post("/", categoryController.create);
  // find by slug
  router.get("/:slug", categoryController.findBySlug);
  // update
  router.patch("/:slug", categoryController.update);
  //delete
  router.delete("/:slug", categoryController.delete);

  app.use(`${api_url}/category`, router);
};

export default cateRoutes;
