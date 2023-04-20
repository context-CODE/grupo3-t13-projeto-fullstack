import { z } from "zod";
import { usersReqSchema, usersResSchema } from "../schemas/users.schema";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/user.entity";

type iUserEntity = Repository<User>;

type iUserReq = z.infer<typeof usersReqSchema>;
type iUserRes = z.infer<typeof usersResSchema>;
type iUserReqUpdate = DeepPartial<iUserReq>;

export {
    iUserEntity,
    iUserReq,
    iUserRes,
    iUserReqUpdate,
}