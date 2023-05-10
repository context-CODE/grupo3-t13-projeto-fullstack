import AppDataSource from "../../data-source";
import Comment from "../../entities/comments.entity";
import AppError from "../../errors/AppError";
import { Repository } from "typeorm";

const deleteCommentService = async (
  advertisementId: string,
  userId: string,
  commentId: string
): Promise<void> => {
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

  await commentRepository.remove(comment);
};

export default deleteCommentService;
