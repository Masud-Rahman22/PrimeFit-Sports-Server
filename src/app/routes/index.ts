import { ProductRoutes } from './../modules/product/product.route';
import { Router } from 'express';

const router = Router();

const moduleRoutes = [
    {
        path: '/products',
        route: ProductRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;