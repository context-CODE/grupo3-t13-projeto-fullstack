import {
  advertisementReqSchema,
  advertisementResSchema,
} from '@/schemas/advertisement.schema';
import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import { iUserReq } from './auth.context';

export type iAdvertisement = {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  color: string;
  quilometers: number;
  price: number;
  cover_img: string;
  description?: string;
  is_available: boolean;
  user_id: iUserReq;
};

export type iAdvertisementReq = z.infer<typeof advertisementReqSchema>;

export type iAdvertisementRes = z.infer<typeof advertisementResSchema>;

export type iAdvertisementUpdate = DeepPartial<iAdvertisementReq>;
