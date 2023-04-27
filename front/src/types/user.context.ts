import { z } from 'zod';
import { usersReqSchema } from '../schemas/users.schema';
import { DeepPartial } from '@chakra-ui/react';
import { iAddressReq } from './address.context';

export type iUserReq = z.infer<typeof usersReqSchema>;

export type iUserReqUpdate = DeepPartial<iUserReq>;

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
