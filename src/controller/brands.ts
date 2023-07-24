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
        message: "Empty",
        err: 1,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "Server error",
        error: error,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      let slug = req.params.slug;
      let brand = req.body;
      let update_brand = brandService.update(slug, brand);
      if (update_brand != null) {
        return res.status(200).json({
          message: "Update brand success",
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
  findBySlug: async (req: Request, res: Response) => {
    try {
      let slug = req.params.slug;
      let list_brand = brandService.findBySlug(slug);
      if (list_brand && list_brand != null) {
        return res.status(200).json({
          message: "Find by slug",
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
  delete: async (req: Request, res: Response) => {
    try {
      let slug = req.params.slug;
      let list_brand = brandService.delete(slug);
      if (list_brand && list_brand != null) {
        return res.status(200).json({
          message: "Delete brands",

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
  create: async (req: Request, res: Response) => {
    try {
      let brand = req.body;
      let list_brand = brandService.create(brand);
      if (list_brand !== null) {
        return res.status(200).json({
          message: "Create brands",
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
