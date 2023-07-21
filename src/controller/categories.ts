import categoryService from "../service/categories";
import { Request, Response } from "express";
import { Category } from "../types/RootTypes";

const categoryController = {
  getAll: async (req: Request, res: Response) => {
    try {
      let list_cate = await categoryService.getAll();
      if (list_cate && list_cate.length > 0) {
        return res.status(200).json({
          categories: list_cate,
        });
      } else {
        return res.status(200).json({
          message: "Empty",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      let category: Category = req.body;
      let add_cate = await categoryService.create(category);
      if (add_cate) {
        return res.status(200).json({
          categories: add_cate,
        });
      } else {
        return res.status(404).json({
          message: "Category is exist!",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  findBySlug: async (req: Request, res: Response) => {
    try {
      let slug: string = req.params.slug;
      let cate = await categoryService.findBySlug(slug);
      if (cate) {
        return res.status(200).json({
          category: cate,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      let slug: string = req.params.slug;
      let category: Category = req.body;
      let cate = await categoryService.update(slug, category);
      if (cate) {
        return res.status(200).json({
          category: cate,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      let slug: string = req.params.slug;
      let cate = await categoryService.delete(slug);
      if (cate) {
        return res.status(200).json({
          message: "Delete success",
        });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
};
export default categoryController;
