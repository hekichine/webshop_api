export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  cost: number;
  desc: string;
  images: { image: string }[];
  totalSell: number;
  vendor: string;
  brand: string;
  category: string;
  featured: boolean;
  variants: string[];
  tags: string;
  countInStock: number;
  review: number;
  rating: number;
};

export type User = {
  id: string;
  name: string;
  account: string;
  password: string;
  avatar: string;
  info: {
    address: string;
    phone: string;
  };
  email: string;
  isAdmin: boolean;
};

export type CartItem = {
  image: string | undefined;
  slug: string;
  quantity: number;
  countInstock: number;
  price: number;
  id: string;
  name: string;
};

export type Cart = {
  itemsPrice: number;
  tax: number;
  totalPrice: number;
  cartItems: CartItem[];
  paymentMethod: string;
};
