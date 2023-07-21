import { Product } from "../types/RootTypes";
import productService from "../service/products";
import { Request, Response } from "express";

const productController = {
  getAll: async (req: Request, res: Response) => {
    let list_products = await productService.getAll();
    if (list_products && list_products.length > 0) {
      return res.status(200).json({
        message: "Get products",
        products: list_products,
        err: 0,
      });
    } else {
      return res.status(404).json({
        message: "Empty",
        err: 1,
      });
    }
  },
  create: async (req: Request, res: Response) => {
    let product: Product = req.body;
    try {
      let create_product = await productService.create(product);

      if (create_product) {
        return res.status(200).json({
          message: "Create success",
          err: 0,
        });
      } else {
        return res.status(404).json({
          message: "Error",
          err: 1,
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        message: "Server error",
        err: 1,
        err_Message: error,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    let product: Product = req.body;
    let slug: string = req.params.slug;

    try {
      let update_product = await productService.update(slug, product);

      if (update_product) {
        return res.status(200).json({
          message: "Update success",
          err: 0,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
          err: 1,
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        message: "Error",
        err: 1,
        err_Message: error,
      });
    }
  },
  findId: async (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    try {
      let find_product = await productService.findId(slug);
      if (find_product) {
        return res.status(200).json({
          message: "Find success",
          err: 0,
          product: find_product,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
          err: 1,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        err: 1,
        err_Message: error,
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    try {
      let dlt_product = await productService.delete(slug);
      if (dlt_product) {
        return res.status(200).json({
          message: "Delete success",
          err: 0,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
          err: 1,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        err: 1,
        err_Message: error,
      });
    }
  },
};
export default productController;
