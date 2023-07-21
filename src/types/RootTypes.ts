export type Product = {
  name: string;
  slug: string;
  price: number;
  cost: number;
  desc: string;
  images: string[];
  totalSell: number;
  vendor: User[];
  brand: Brand[];
  category: Category[];
  featured: boolean;
  variants: string[];
  tags: string[];
  countInStock: number;
  review: number;
  rating: number;
};

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  displayname: string;
  email: string;
  username: string;
  profile_id: string;
  password: string;
  phone: string;
  address: string;
  shippingaddress: string;
  image: string;
  role: number;
  root: boolean;
};

export type Brand = {
  name: string;
  image: string;
  count: number;
  slug: string;
};

export type Category = {
  name: string;
  desc: string;
  slug: string;
};
