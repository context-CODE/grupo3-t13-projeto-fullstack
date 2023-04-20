import { ReactNode } from 'react';
import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import User from '../../../back/src/entities/user.entity';
import {
  registerFormSchema,
  userReqSchema,
  userResSchema,
} from '../schemas/auth.schema';

export type iUserProfile {
  name: string;
}

export type iUserLogin {
  email: string;
  password: string;
}

export type iProviderProps {
  children: ReactNode;
}

export type iRegisterFormData = z.infer<typeof registerFormSchema>

export type iUserEntity = Repository<User>;

export type iUserReq = z.infer<typeof userReqSchema>;

export type iUserRes = z.infer<typeof userResSchema>;

export type iUserReqUpdate = DeepPartial<iUserReq>;


