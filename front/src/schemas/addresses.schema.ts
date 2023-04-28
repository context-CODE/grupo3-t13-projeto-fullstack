import { z } from 'zod';

const addressReqSchema = z.object({
  zip_code: z.string().max(8),
  state: z.string().max(2),
  city: z.string().max(25),
  street: z.string().max(40),
  number: z.string().transform((value) => Number(value)),
  complement: z.string().max(128).nullable(),
});

const addressReqUpdateSchema = addressReqSchema.partial();

export { addressReqSchema, addressReqUpdateSchema };
