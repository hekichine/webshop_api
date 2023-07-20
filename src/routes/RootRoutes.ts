import express, { Response, Request } from "express";

const router = express.Router();
const api_url = process.env.API_URL;

const RootRoutes = (app: any) => {
  router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "WEBSHOP API V1",
    });
  });

  app.use("/", router);
};

export default RootRoutes;
