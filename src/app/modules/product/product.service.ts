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

const cartProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getASingleProductFromDB,
  cartProductIntoDB
};