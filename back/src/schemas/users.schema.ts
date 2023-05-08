import { z } from "zod";
import { addressReqSchema } from "./addresses.schema";
import { advertisementResSchema } from "./advertisement.schema";

const usersReqSchema = z.object({
  name: z.string().max(60),
  email: z.string().email("Deve ser um email válido").max(60),
  password: z.string().max(150),
  cpf: z.string().min(11).max(11),
  phone_number: z.string().regex(/^(\d{2}\s\d{5}\-\d{4})$/),
  birthdate: z.string().regex(/(\d{2})[-.\/](\d{2})[-.\/](\d{4})/),
  profile_img: z.string().max(127),
  is_advertiser: z.boolean(),
  address: addressReqSchema,
  description: z.string().nullable(),
});

const usersResSchema = usersReqSchema
  .extend({
    id: z.string().uuid(),
    created_at: z.date(),
    updated_at: z.date(),
  })
  .omit({
    password: true,
  });

const usersReqUpdateSchema = usersReqSchema.partial();

const usersResUpdateSchema = usersReqUpdateSchema.extend({
  birthdate: z.string().refine((value) => {
    // Verifica se o valor é vazio ou corresponde ao formato "dd/mm/aaaa"
    return !value || /^(\d{2})\/(\d{2})\/(\d{4})$/.test(value);
  }).optional()
}).omit({
  password: true,
})

const userAdvertisementsResSchema = z.object({
  id: z.string(),
  name: z.string(),
  is_advertiser: z.boolean(),
  profile_img: z.string(),
  description: z.string(),
  advertisements: z.array(advertisementResSchema),
});

const userReqSendMailResetPassword = z.object({
  email: z.string().email().nonempty(),
});

const userReqResetPassword = z.object({
  password: z.string().max(150).nonempty(),
});

export {
  usersReqSchema,
  usersResSchema,
  usersReqUpdateSchema,
  userReqSendMailResetPassword,
  userReqResetPassword,
  userAdvertisementsResSchema,
  usersResUpdateSchema,
};
