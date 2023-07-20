import { Product } from "../types/RootTypes";
import products from "../model/products";

const productService = {
  getAll: async (): Promise<Product[]> => {
    return products.find();
  },
  create: async (product: Product): Promise<Product> => {
    let new_product = new products(product);
    return new_product.save();
  },
  update: async (slug: string, product: Product): Promise<Product> => {
    return products.findOneAndUpdate({ slug: slug }, product);
  },
  findId: async (slug: string): Promise<Product> => {
    return products.findOne({ slug: slug });
  },
  delete: async (slug: string): Promise<Product> => {
    return products.findOneAndDelete({ slug: slug });
  },
};
export default productService;
