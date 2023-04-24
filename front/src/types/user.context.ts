import { z } from 'zod';
import { usersReqSchema, usersResSchema } from '../schemas/users.schema';

import User from '../../../back/src/entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';

export type iUserEntity = Repository<User>;

export type iUserReq = z.infer<typeof usersReqSchema>;
export type iUserRes = z.infer<typeof usersResSchema>;
export type iUserReqUpdate = DeepPartial<iUserReq>;
