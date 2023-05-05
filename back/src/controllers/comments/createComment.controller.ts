import { Request, Response } from "express";
import createCommentService from "../../services/advetisement_comments/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const newComment = await createCommentService(
    req.params.id,
    req.user.id,
    req.body
  );
  return res.status(201).send(newComment);
};

export default createCommentController;
