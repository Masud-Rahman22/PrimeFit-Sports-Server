import { Cart } from './cart.model';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getASingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const deleteAProductFromDB = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }

  product.isDeleted = true;
  const updatedProductInfo = await product.save();

  return updatedProductInfo;
};

const updateProdcutIntoDB = async (id: string, payload: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const cartProductIntoDB = async (payload: IProduct) => {
  const result = await Cart.create(payload);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const result = await Product.find({}, 'category');
  return result;
};

const getAllCartProductsFromDB = async () => {
  try {
    const result = await Cart.find();
    console.log('Cart products:', result);
    return result;
  } catch (error) {
    console.error('Error fetching cart products:', error);
    return null;
  }
};

export const ProductServices = {
  createProductIntoDB,
  getASingleProductFromDB,
  cartProductIntoDB,
  getAllProductFromDB,
  deleteAProductFromDB,
  updateProdcutIntoDB,
  getAllCategoriesFromDB,
  getAllCartProductsFromDB,
};
