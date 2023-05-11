import AppDataSource from "../../data-source";
import Comment from "../../entities/comments.entity";
import AppError from "../../errors/AppError";
import { iCommentReq } from "../../interfaces/comments.interface";
import { Repository } from "typeorm";

const updateCommentService = async (
  advertisementId: string,
  userId: string,
  commentId: string,
  commentData: iCommentReq
): Promise<Comment> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);
  const comment = await commentRepository.findOneBy({
    id: commentId,
    user: {
      id: userId,
    },
    advertisement: {
      id: advertisementId,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  const commentUpdate = await commentRepository.save({
    ...comment,
    user: comment.user,
    advertisement: comment.advertisement,
    comment: commentData.comment,
  });
  return commentUpdate;
};

export default updateCommentService;
