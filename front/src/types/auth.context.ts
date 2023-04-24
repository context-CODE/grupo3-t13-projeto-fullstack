import { ReactNode } from 'react';

import { z } from 'zod';

import {
  loginReqSchema,
  loginResSchema,
  registerFormSchema,
} from '../schemas/auth.schema';

export type iLoginReq = z.infer<typeof loginReqSchema>;

export type iLoginRes = z.infer<typeof loginResSchema>;

export type iProviderProps = {
  children: ReactNode;
};

export type iRegisterFormData = z.infer<typeof registerFormSchema>;
