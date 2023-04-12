import { z } from "zod";

const advertisementReqSchema = z.object({
  brand: z.string().max(60),
  model: z.string().max(120),
  year: z.number(),
  fuel: z.string().max(20),
  color: z.string().max(20),
  kilometers: z.number(),
  price: z.number().or(z.string()),
  description: z.string(),
  image: z.string().max(300),
  is_available: z.boolean(),
});

const advertisementResSchema = advertisementReqSchema.extend({
  id: z.string().uuid(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});

const advertisementReqUpdateSchema = advertisementReqSchema.partial();

const advertisementListResSchema = advertisementResSchema.array();

export {
  advertisementReqSchema,
  advertisementResSchema,
  advertisementListResSchema,
  advertisementReqUpdateSchema,
};
