import express from "express";
import "dotenv/config";
import brandController from "../controller/brands";

const router = express.Router();
const api_url = process.env.API_URL;

const brandRoutes = (app: any) => {
  // default
  router.get("/", brandController.getAll);

  // add category
  router.post("/", brandController.create);
  // find by slug
  router.get("/:slug", brandController.findBySlug);
  // update
  router.patch("/:slug", brandController.update);
  //delete
  router.delete("/:slug", brandController.delete);

  app.use(`${api_url}/brand`, router);
};

export default brandRoutes;
