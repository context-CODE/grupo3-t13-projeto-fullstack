import { z } from 'zod';
import { usersReqSchema, usersReqUpdateSchema } from '../schemas/users.schema';
import { iAddressReq } from './address.context';

export type iUserReq = z.infer<typeof usersReqSchema>;

export type iUserReqUpdate = z.infer<typeof usersReqUpdateSchema>;
export interface iUserRes {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birthdate: string;
  profile_img: string;
  is_advertiser: boolean;
  description?: string;
  created_at: Date;
  updated_at: Date;
  address: iAddressReq;
}
