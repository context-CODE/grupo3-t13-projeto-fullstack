import { ReactNode } from 'react';

import { z } from 'zod';

import { authReqSchema, registerFormSchema } from '../schemas/auth.schema';

export type iAuthReq = z.infer<typeof authReqSchema>;

export type iAuthRes = {
  token: string;
};

export type iProviderProps = {
  children: ReactNode;
};

export type iRegisterFormData = z.infer<typeof registerFormSchema>;
