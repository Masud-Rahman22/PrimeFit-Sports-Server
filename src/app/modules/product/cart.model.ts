import mongoose, { Schema } from 'mongoose';
import { IProduct } from './product.interface';

const cartSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true, // to remove white space
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean
  }
}, { timestamps: true });

export const Cart = mongoose.model<IProduct>('Cart', cartSchema);