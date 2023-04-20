import { z } from 'zod';
import { advertisementListResSchema } from './advertisement.schema';

const userReqSchema = z.object({
  profile_img: z.string().max(150),
  name: z.string().max(60),
  email: z.string().max(60),
  cpf: z.string().max(11),
  phone_number: z.string().max(18),
  birthdate: z.date(),
  description: z.string(),
  is_advertiser: z.boolean(),
  password: z.string().max(150),
  advertisements: advertisementListResSchema,
});

const registerFormSchema = z.object({
  name: z.string().max(60),
  email: z.string().max(60),
  cpf: z.string().max(11),
  phone_number: z.string().max(18),
  birthdate: z.date(),
  description: z.string(),
  cep: z.string().max(8),
  state: z.string().max(2),
  city: z.string().max(150),
  street: z.string().max(200),
  number: z.number().max(5).optional(),
  complement: z.string().max(128),
  password: z.string().max(150),
  confirm_password: z.string().max(150),
});

const userResSchema = userReqSchema.extend({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
});



const userReqUpdateSchema = userReqSchema.partial();

const userListResSchema = userResSchema.array();

export { userReqSchema, userResSchema, userReqUpdateSchema, userListResSchema, registerFormSchema };
