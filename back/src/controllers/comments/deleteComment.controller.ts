import { Request, Response } from "express";
import deleteCommentService from "../../services/advetisement_comments/deleteComment.service";

const deleteCommentController = async (req: Request, res: Response) => {
  const { ad_id, comment_id } = req.params;

  await deleteCommentService(ad_id, req.user.id, comment_id);

  return res.status(204).send();
};

export default deleteCommentController;
