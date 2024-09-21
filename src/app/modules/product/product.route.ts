import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidation.productValidationSchema),
  ProductControllers.createProduct,
);

router.post(
    '/cart',
    ProductControllers.cartProducts
)

export const ProductRoutes = router;