import { z } from "zod";
import { commentReqSchema, commentResSchema } from "../schemas/comments.schema";
import { Repository } from "typeorm";
import Comment from "../entities/comments.entity";

type iCommentEntity = Repository<Comment>;

type iCommentReq = z.infer<typeof commentReqSchema>;
type iCommentRes = z.infer<typeof commentResSchema>;

export { iCommentEntity, iCommentReq, iCommentRes };
