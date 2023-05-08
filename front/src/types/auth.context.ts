import { ReactNode } from 'react';
<<<<<<< HEAD

import {
  loginReqSchema,
  loginResSchema,
  registerFormSchema,
} from '../schemas/auth.schema';
import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import User from '../../../back/src/entities/user.entity';
import { userReqSchema, userResSchema } from '../schemas/auth.schema';

export type iLoginReq = z.infer<typeof loginReqSchema>;

export type iLoginRes = z.infer<typeof loginResSchema>;
=======
import { z } from 'zod';
import { loginReqSchema, registerFormSchema } from '../schemas/auth.schema';
import { iAddressRes } from './address.context';
>>>>>>> c8efdbdeff86d93ceb6b40d5ea3032181b6ab330

export type iProviderProps = {
  children: ReactNode;
};

export type iRegisterFormData = z.infer<typeof registerFormSchema>;

<<<<<<< HEAD
export type iUserProfile = {
  name: string;
};

export type iUserLogin = {
  email: string;
  password: string;
};

export type iUserEntity = Repository<User>;

export type iUserReq = z.infer<typeof userReqSchema>;

export type iUserRes = z.infer<typeof userResSchema>;

export type iUserReqUpdate = DeepPartial<iUserReq>;
=======
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
>>>>>>> c8efdbdeff86d93ceb6b40d5ea3032181b6ab330
