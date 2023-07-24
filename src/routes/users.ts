import userController from "../controller/users";
import express from "express";
import "dotenv/config";

const router = express.Router();
const api_url = process.env.API_URL;

const userRoutes = (app: any) => {
  router.get("/", userController.getAll);

  // create
  router.post("/", userController.create);

  //update
  router.patch("/:profile_id", userController.update);

  // find one
  router.get("/:profile_id", userController.findByProfile);

  // delete
  router.delete("/:profile_id", userController.delete);

  app.use(`${api_url}/user`, router);
};

export default userRoutes;
