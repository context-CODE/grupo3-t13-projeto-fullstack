import {z} from "zod";
import { addressReqSchema } from "./addresses.schema";

const usersReqSchema = z.object({
  name: z.string().max(60),
  email: z.string().email('Deve ser um email válido').max(60),
  password: z.string().max(150),
  cpf: z.string().min(11).max(11),
  phone_number: z.string().regex(/^(\d{2}\s\d{5}\-\d{4})$/),
  birthdate: z.string().regex(/(\d{4})[-.\/](\d{2})[-.\/](\d{2})/),
  profile_img: z.string().max(127),
  is_advertiser: z.boolean(),
  address: addressReqSchema,
  description: z.string().nullable(),
});

const usersResSchema = usersReqSchema.extend({
    id: z.string().uuid(),
    created_at: z.date(),
    updated_at: z.date(),
}).omit({
    password: true,
});

const usersReqUpdateSchema = usersReqSchema.partial();

export {
    usersReqSchema,
    usersResSchema,
    usersReqUpdateSchema,
}