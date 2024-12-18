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

router.get('/by-name', ProductControllers.getProductByName);

router.get('/:_id', ProductControllers.getASingleProduct);

router.get('/', ProductControllers.getAllProducts);

router.patch('/:_id', ProductControllers.deleteAProduct);

router.put(
  '/:_id',
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductControllers.updateAProduct,
);

export const ProductRoutes = router;
