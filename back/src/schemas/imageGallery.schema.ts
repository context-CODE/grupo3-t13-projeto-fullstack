import {z} from 'zod'

const imageGalleryReqSchema = z.object({
    image_url: z.string().max(150)
});

const imageGalleryResSchema = imageGalleryReqSchema.extend({
    id: z.string().uuid()
});

const imageGalleryListSchema = imageGalleryResSchema.array()

export {
    imageGalleryListSchema,
    imageGalleryResSchema,
    imageGalleryReqSchema
}