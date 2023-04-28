import { z } from 'zod';
import { addressReqSchema } from './addresses.schema';

const usersReqSchema = z.object({
  name: z.string().max(60),
  email: z.string().max(60),
  password: z.string().max(150),
  cpf: z.string().max(11),
  phone_number: z.string().max(18),
  birthdate: z.string(),
  profile_img: z.string().max(127),
  is_advertiser: z.boolean(),
  description: z.string().nullable(),
  address: addressReqSchema,
});

const usersReqUpdateSchema = usersReqSchema.partial();

export { usersReqSchema, usersReqUpdateSchema };
