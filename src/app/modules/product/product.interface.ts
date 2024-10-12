import { Types } from 'mongoose';

export interface IProduct {
  _id: Types.ObjectId;
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
