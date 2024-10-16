// import { Types } from 'mongoose';

export interface ICartProduct {
  productId: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
  isDeleted: boolean;
}
