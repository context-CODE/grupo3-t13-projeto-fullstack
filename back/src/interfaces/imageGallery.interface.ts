import { Repository } from "typeorm";
import ImageGallery from "../entities/imageGallery.entity";
import { z } from "zod";
import { imageGalleryListSchema, imageGalleryReqSchema, imageGalleryResSchema } from "../schemas/imageGallery.schema";

type iImageGalleryEntity = Repository<ImageGallery>

type iImageGalleryReq = z.infer<typeof imageGalleryReqSchema>
type iImageGalleryRes = z.infer<typeof imageGalleryResSchema>
type iImageGalleryList = z.infer<typeof imageGalleryListSchema>

export {
    iImageGalleryEntity,
    iImageGalleryList,
    iImageGalleryReq,
    iImageGalleryRes
}