import { Router } from 'express';
import { ProductRoutes } from '../modules/product/product.router';
import { AuthRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
