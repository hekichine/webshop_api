import express, { Response, Request } from "express";

const router = express.Router();
const api_url = process.env.API_URL;

const RootRoutes = (app: any) => {
  router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "WEBSHOP API V1",
      api_base: `${api_url}`,
      api_url: {
        product: `${api_url}/product`,
        brand: `${api_url}/brand`,
        category: `${api_url}/category`,
        user: `${api_url}/user`,
      },
    });
  });
  router.get(`${api_url}`, (req: Request, res: Response) => {
    res.redirect("/");
  });

  app.use("/", router);
};

export default RootRoutes;
