import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
    const productInfo = req.body;
  const result = await ProductServices.createProductIntoDB(productInfo)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

const cartProducts = catchAsync(async (req, res) => {
    const cartProductInfo = req.body;
  const result = await ProductServices.cartProductIntoDB(cartProductInfo)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is added to cart successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  cartProducts
};