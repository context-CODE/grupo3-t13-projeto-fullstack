import { Request, Response } from "express";
import updateCommentService from "../../services/advetisement_comments/updateComment.service";

const updateCommentController = async (req: Request, res: Response) => {
  const { ad_id, comment_id } = req.params;

  const data = await updateCommentService(
    ad_id,
    req.user.id,
    comment_id,
    req.body
  );
  return res.status(200).send(data);
};

export default updateCommentController;
