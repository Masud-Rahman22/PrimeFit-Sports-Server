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

export const ProductControllers = {
  createProduct,
  getASingleProduct,
  getAllProducts,
  deleteAProduct,
  updateAProduct,
};
