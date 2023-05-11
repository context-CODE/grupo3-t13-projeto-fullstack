import { z } from 'zod';
import { usersReqUpdateSchema } from '../schemas/users.schema';
import { iAddressRes } from './address.context';

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
  address: iAddressRes;
}
