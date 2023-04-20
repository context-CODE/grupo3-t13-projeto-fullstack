import { z } from "zod";

const authReqSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export { authReqSchema };
