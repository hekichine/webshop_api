import categories from "../model/categories";
import { Category } from "../types/RootTypes";

const categoryService = {
  getAll: async (): Promise<Category[]> => {
    return categories.find();
  },
  create: async (category: Category): Promise<Category> => {
    let find_cate = await categories.find({ slug: category.slug });
    if (find_cate && find_cate.length > 0) {
      return null;
    }
    let new_cate = new categories(category);
    return new_cate.save();
  },
  findBySlug: async (slug: string): Promise<Category> => {
    return categories.findOne({ slug: slug });
  },
  update: async (slug: string, category: Category): Promise<Category> => {
    return categories.findOneAndUpdate({ slug: slug }, category);
  },
  delete: async (slug: string): Promise<Category> => {
    return categories.findOneAndDelete({ slug: slug });
  },
};

export default categoryService;
