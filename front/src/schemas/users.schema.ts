/* eslint-disable no-useless-escape */
import { z } from 'zod';

const usersReqUpdateSchema = z.object({
  name: z.string().max(60).optional(),
  email: z.string().max(60).optional(),
  cpf: z.string().max(11).optional(),
  phone_number: z
    .string()
    .max(18)
    .refine((value) => {
      return !value || /^(\d{2}\s\d{5}\-\d{4})$/.test(value);
    })
    .optional(),
  birthdate: z
    .string()
    .refine((value) => {
      return !value || /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.test(value);
    })
    .optional(),
  description: z.string().optional(),
});

export { usersReqUpdateSchema };
