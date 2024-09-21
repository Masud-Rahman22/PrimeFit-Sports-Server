import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getASingleProductFromDB = async (id:string) => {
  const result = await Product.findById(id);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const deleteAProductFromDB = async (id:string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }

  product.isDeleted = true;
  const updatedProductInfo = await product.save();

  return updatedProductInfo;
};

const cartProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getASingleProductFromDB,
  cartProductIntoDB,
  getAllProductFromDB,
  deleteAProductFromDB
};