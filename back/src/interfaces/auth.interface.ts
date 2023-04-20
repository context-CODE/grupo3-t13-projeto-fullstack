import { z } from "zod";
import { authReqSchema } from "../schemas/auth.schema";

type iAuthReq = z.infer<typeof authReqSchema>;

type iAuthRes = {
  token: string;
};

export { iAuthReq, iAuthRes };
