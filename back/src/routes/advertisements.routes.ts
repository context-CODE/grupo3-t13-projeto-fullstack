import { Router } from "express";
import createAdvertisementController from "../controllers/advertisements/createAdvertisement.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import {
  advertisementReqSchema,
  advertisementReqUpdateSchema,
} from "../schemas/advertisement.schema";
import updateAdvertisementController from "../controllers/advertisements/updateAdvertisement.controller";
import deleteAdvertisementController from "../controllers/advertisements/deleteAdvertisement.controller";
import listAdvertisementsController from "../controllers/advertisements/listAdvertisement.controller";
import retrieveAdvertisementController from "../controllers/advertisements/retrieveAdvertisement.controller";
import ensurePaginationMiddleware from "../middlewares/pagination/ensurePagination.middleware";
import ensureAuthMiddleware from "../middlewares/authentication/ensureAuth.middleware";
import { commentReqSchema } from "../schemas/comments.schema";
import createCommentController from "../controllers/comments/createComment.controller";
import updateCommentController from "../controllers/comments/updateComment.controller";
import deleteCommentController from "../controllers/comments/deleteComment.controller";

const advertisementRouter = Router();

advertisementRouter.post(
  "/:id/comments",
  ensureAuthMiddleware,
  ensureIsValidDataMiddleware(commentReqSchema),
  createCommentController
);
advertisementRouter.patch(
  "/:ad_id/comments/:comment_id",
  ensureAuthMiddleware,
  ensureIsValidDataMiddleware(commentReqSchema),
  updateCommentController
);
advertisementRouter.delete(
  "/:ad_id/comments/:comment_id",
  ensureAuthMiddleware,
  deleteCommentController
);

advertisementRouter.post(
  "",
  ensureAuthMiddleware,
  ensureIsValidDataMiddleware(advertisementReqSchema),
  createAdvertisementController
);

advertisementRouter.get(
  "",
  ensurePaginationMiddleware,
  listAdvertisementsController
);

advertisementRouter.get("/:id", retrieveAdvertisementController);

advertisementRouter.patch(
  "/:id",
  ensureIsValidDataMiddleware(advertisementReqUpdateSchema),
  updateAdvertisementController
);

advertisementRouter.delete("/:id", deleteAdvertisementController);

export default advertisementRouter;
