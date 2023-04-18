import { z } from "zod";
import { usersReqSchema, usersResSchema } from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type iUserReq = z.infer<typeof usersReqSchema>;
type iUserRes = z.infer<typeof usersResSchema>;
type iUserReqUpdate = DeepPartial<iUserReq>;

export {
    iUserReq,
    iUserRes,
    iUserReqUpdate,
}