import { Brand } from "../types/RootTypes";
import brands from "../model/brands";

const brandService = {
  getAll: async (): Promise<Brand[]> => {
    return await brands.find();
  },
  create: async (brand: Brand): Promise<Brand> => {
    let new_br = new brands(brand);
    return new_br.save();
  },
  delete: async (slug: string): Promise<Brand> => {
    return await brands.findOneAndDelete({ slug: slug });
  },
  update: async (slug: string, brand: Brand): Promise<Brand> => {
    return await brands.findByIdAndUpdate({ slug: slug }, brand);
  },
  findBySlug: async (slug: string): Promise<Brand> => {
    return await brands.findOne({ slug: slug });
  },
};
export default brandService;
