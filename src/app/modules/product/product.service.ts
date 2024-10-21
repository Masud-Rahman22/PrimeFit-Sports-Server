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

const getProductByNameFromDB = async (name:string)=>{
  try {
    const products = await Product.find({ name: new RegExp(name, 'i') }); // Case-insensitive search
    return products;
  } catch (error: unknown) {
    // Type assertion to ensure 'error' is an instance of Error
    if (error instanceof Error) {
      throw new Error('Error fetching product: ' + error.message);
    } else {
      throw new Error('An unexpected error occurred while fetching product.');
    }
  }
}

export const ProductServices = {
  createProductIntoDB,
  getASingleProductFromDB,
  getAllProductFromDB,
  deleteAProductFromDB,
  updateProdcutIntoDB,
  getProductByNameFromDB
};
