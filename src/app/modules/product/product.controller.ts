import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const productInfo = req.body;
  const result = await ProductServices.createProductIntoDB(productInfo);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

const getASingleProduct = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await ProductServices.getASingleProductFromDB(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All products are retrieved successfully',
    data: result,
  });
});

const deleteAProduct = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await ProductServices.deleteAProductFromDB(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is deleted successfully',
    data: result,
  });
});

const updateAProduct = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await ProductServices.updateProdcutIntoDB(_id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const cartProducts = catchAsync(async (req, res) => {
  const cartProductInfo = req.body;
  const result = await ProductServices.cartProductIntoDB(cartProductInfo.product);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is added to cart successfully',
    data: result,
  });
});

const getAllCategories = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllCategoriesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product categories is fetched successfully',
    data: result,
  });
});

const getAllCartProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllCartProductsFromDB();
  console.log(result)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products of cart is fetched successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getASingleProduct,
  cartProducts,
  getAllProducts,
  deleteAProduct,
  updateAProduct,
  getAllCategories,
  getAllCartProducts
};
