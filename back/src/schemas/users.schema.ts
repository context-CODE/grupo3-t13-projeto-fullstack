import { z } from "zod";
import { addressReqSchema } from "./addresses.schema";
import { advertisementResSchema } from "./advertisement.schema";

const usersReqSchema = z.object({
  name: z.string().max(60),
  email: z.string().email("Deve ser um email válido").max(60),
  password: z.string().max(150),
  cpf: z.string().min(11).max(11),
  phone_number: z.string().regex(/^(\d{2}\s\d{5}\-\d{4})$/),
  birthdate: z.string(),
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
    address: z.object({
      id: z.string(),
      zip_code: z.string().max(8),
      state: z.string().max(2),
      city: z.string().max(25),
      street: z.string().max(40),
      number: z.number(),
      complement: z.string().max(128)
    })
  })
  .omit({
    password: true,
  });

const usersReqUpdateSchema = usersReqSchema.partial();

const usersResUpdateSchema = usersReqUpdateSchema.extend({
  birthdate: z.string().optional()
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
