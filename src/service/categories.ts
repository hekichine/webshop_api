import categories from "model/categories";
import { Category } from "types/RootTypes";

const categoryService = {
  getAll: async (): Promise<Category[]> => {
    return categories.find();
  },
};
