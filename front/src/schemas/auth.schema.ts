import { z } from 'zod';
import { advertisementListResSchema } from './advertisement.schema';
import errorMap from 'zod/lib/locales/en';

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

const userResSchema = userReqSchema.extend({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
});

const userReqUpdateSchema = userReqSchema.partial();

const userListResSchema = userResSchema.array();

export { userReqSchema, userResSchema, userReqUpdateSchema, userListResSchema };
