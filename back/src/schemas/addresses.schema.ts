import {z} from "zod";

const addressReqSchema = z.object({
    zip_code: z.string().max(8),
    state: z.string().max(2),
    city: z.string().max(25),
    street: z.string().max(40),
    number: z.number(),
    complement: z.string().max(128),
});

const addressResSchema = addressReqSchema.extend({
    id: z.string().uuid(),
    updated_at: z.date(),
});

const addressReqUpdateSchema = addressReqSchema.partial();

export {
    addressReqSchema,
    addressResSchema,
    addressReqUpdateSchema,
}