import { z } from "zod";

const advertisementReqSchema = z.object({
  brand: z.string().max(60),
  model: z.string().max(120),
  year: z.number(),
  fuel: z.string().max(20),
  color: z.string().max(20),
  kilometers: z.number(),
  price: z.number(),
  description: z.string(),
  image: z.string().max(300),
});

const advertisementResSchema = advertisementReqSchema.extend({
  id: z.string().uuid(),
  is_available: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

const advertisementListResSchema = advertisementResSchema.array();

export {
  advertisementReqSchema,
  advertisementResSchema,
  advertisementListResSchema,
};
