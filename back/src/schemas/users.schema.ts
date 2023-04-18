import {z} from "zod";
import { addressReqSchema } from "./addresses.schema";

const usersReqSchema = z.object({
  name: z.string().max(60),
  email: z.string().max(60),
  passworod: z.string().max(150),
  cpf: z.string().max(11),
  phone: z.string().max(18),
  birthdate: z.date(),
  profile_img: z.string().max(127),
  is_advertiser: z.boolean(),
  address: addressReqSchema,
  description: z.string().nullable(),
});

const usersResSchema = usersReqSchema.extend({
    id: z.string().uuid(),
    created_at: z.date(),
    updated_at: z.date(),
});

const usersReqUpdateSchema = usersReqSchema.partial();

export {
    usersReqSchema,
    usersResSchema,
    usersReqUpdateSchema,
}