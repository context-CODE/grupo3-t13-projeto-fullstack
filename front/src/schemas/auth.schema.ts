/* eslint-disable no-useless-escape */
import { z } from 'zod';
import { addressReqSchema } from './addresses.schema';

const registerFormSchema = z.object({
  name: z.string().max(60),
  email: z.string().email('Deve ser um email válido').max(60),
  cpf: z.string().max(11),
  phone_number: z
    .string()
    .max(18)
    .regex(/^(\d{2}\s\d{5}\-\d{4})$/, 'Deve vir no formato "11 99999-9999"'),
  // eslint-disable-next-line no-useless-escape
  birthdate: z
    .string()
    .regex(
      /(\d{2})[-.\/](\d{2})[-.\/](\d{4})/,
      'Deve vir no formato "dd/mm/yyyy" ou "dd-mm-yyyy" '
    ),
  description: z.string(),
  is_advertiser: z.boolean().default(false),
  address: addressReqSchema,
  password: z
    .string()
    .max(150)
    .min(8, 'Deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .regex(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
    .regex(/\d/, 'Deve conter ao menos 1 número')
    .regex(/[\W|_]/, 'Deve conter um caractere especial')
    .nonempty('Campo obrigatório!'),
  confirm_password: z.string().max(150),
  profile_img: z.string().max(150),
});

const loginReqSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { registerFormSchema, loginReqSchema };
