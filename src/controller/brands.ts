import brandService from "../service/brands";
import { Request, Response } from "express";

const brandController = {
  getAll: async (req: Request, res: Response) => {
    try {
      let list_brand = brandService.getAll();
      if (list_brand && (await list_brand).length > 0) {
        return res.status(200).json({
          message: "List brands",
          brands: list_brand,
          err: 0,
        });
      }
      return res.status(404).json({
        message: "Not found",
        err: 1,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },
};
export default brandController;
