import RootRoutes from "./RootRoutes";
import brandRoutes from "./brands";
import cateRoutes from "./categories";
import productRoutes from "./products";
import userRoutes from "./users";

const AppRoutes = (app: any) => {
  RootRoutes(app);
  productRoutes(app);
  cateRoutes(app);
  brandRoutes(app);
  userRoutes(app);
};

export default AppRoutes;
