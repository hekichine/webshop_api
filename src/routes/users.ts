import userController from "../controller/users";
import express from "express";
import "dotenv/config";
import upload from "../midleware/upload";

const router = express.Router();
const api_url = process.env.API_URL;

const userRoutes = (app: any) => {
  router.get("/", userController.getAll);

  // create
  router.post("/", upload.single("image"), userController.create);

  //update
  router.patch("/:profile_id", upload.single("image"), userController.update);

  // find one
  router.get("/:profile_id", userController.findByProfile);

  // delete
  router.delete("/:profile_id", userController.delete);

  app.use(`${api_url}/user`, router);
};

export default userRoutes;
