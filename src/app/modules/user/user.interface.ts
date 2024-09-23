/* eslint-disable no-unused-vars */

import { ObjectId } from 'mongoose';
import { USER_ROLE } from './auth.constant';

export type TUser = {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
};

export type TLoginInfo = {
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;