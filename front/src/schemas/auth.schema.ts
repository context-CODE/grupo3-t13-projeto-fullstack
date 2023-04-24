import { z } from 'zod';
import { addressReqSchema } from './addresses.schema';

const registerFormSchema = z.object({
  name: z.string().max(60),
  email: z.string().max(60),
  cpf: z.string().max(11),
  phone_number: z.string().max(18),
  birthdate: z.string(),
  description: z.string(),
  is_advertiser: z.boolean().default(false),
  address: addressReqSchema,
  password: z.string().max(150),
  confirm_password: z.string().max(150),
  profile_img: z.string().max(150),
});

const registerResSchema = registerFormSchema
  .extend({
    id: z.string().uuid(),
    created_at: z.date(),
    updated_at: z.date(),
  })
  .omit({
    password: true,
  });

const loginReqSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const loginResSchema = z.object({
  token: z.string(),
  refresh: z.string(),
});

export {
  registerFormSchema,
  registerResSchema,
  loginReqSchema,
  loginResSchema,
};
