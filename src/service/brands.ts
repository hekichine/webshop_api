import { Brand } from "../types/RootTypes";
import brands from "../model/brands";

const brandService = {
  getAll: async (): Promise<Brand[]> => {
    return brands.find();
  },
  create: async (brand: Brand): Promise<Brand> => {
    let new_br = new brands(brand);
    return new_br.save();
  },
  delete: async (slug: string): Promise<Brand> => {
    return brands.findOneAndDelete({ slug: slug });
  },
  update: async (slug: string, brand: Brand): Promise<Brand> => {
    return brands.findByIdAndUpdate({ slug: slug }, brand);
  },
};
export default brandService;
