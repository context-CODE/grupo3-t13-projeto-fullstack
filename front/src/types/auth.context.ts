import { ReactNode } from 'react';
import { z } from 'zod';
import { loginReqSchema, registerFormSchema } from '../schemas/auth.schema';
import { iAddressRes } from './address.context';

export type iProviderProps = {
  children: ReactNode;
};

export type iRegisterFormData = z.infer<typeof registerFormSchema>;

export interface iRegisterRes {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birthdate: string;
  description?: string;
  is_advertiser: boolean;
  profile_img: string;
  created_at: Date;
  updated_at: Date;
  address: iAddressRes;
}

export type iLoginReq = z.infer<typeof loginReqSchema>;

export type iLoginRes = {
  token: string;
  refresh: string;
};
