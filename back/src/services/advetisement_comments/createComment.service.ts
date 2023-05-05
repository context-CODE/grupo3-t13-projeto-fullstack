import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import Comment from "../../entities/comments.entity";
import User from "../../entities/user.entity";
import { iAdvertisementEntity } from "../../interfaces/advertisements.interface";
import { iCommentReq, iCommentRes } from "../../interfaces/comments.interface";
import { iUserEntity } from "../../interfaces/users.interface";
import { commentResSchema } from "../../schemas/comments.schema";
import { Repository } from "typeorm";

const createCommentService = async (
  advertisementId: string,
  userId: string,
  commentData: iCommentReq
): Promise<iCommentRes> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const userRepository: iUserEntity = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  const advertisement = await advertisementRepository.findOneBy({
    id: advertisementId,
  });

  const createComment: Comment = commentRepository.create({
    ...commentData,
    user: user!,
    advertisement: advertisement!,
  });

  await commentRepository.save(createComment);

  const newComment = commentResSchema.parse(createComment);

  return newComment as iCommentRes;
};

export default createCommentService;
