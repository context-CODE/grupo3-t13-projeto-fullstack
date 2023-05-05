import { z } from "zod";

const commentReqSchema = z.object({
  comment: z.string().min(20).max(255),
});

const commentResSchema = commentReqSchema.extend({
  id: z.string().uuid(),
  created_at: z.date(),
  user: z.object({
    id: z.string().uuid(),
    name: z.string(),
    profile_img: z.string().max(127),
  }),
  advertisement: z.object({ id: z.string().uuid() }),
});

const commentListResSchema = commentResSchema.array();

export { commentReqSchema, commentResSchema, commentListResSchema };
