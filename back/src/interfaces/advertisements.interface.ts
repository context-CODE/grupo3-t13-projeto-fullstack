import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import Advertisement from "../entities/advertisement.entity";
import {
  advertisementReqSchema,
  advertisementReqUpdateSchema,
  advertisementResSchema,
} from "../schemas/advertisement.schema";

type iAdvertisementEntity = Repository<Advertisement>;

type iAdvertisementReq = z.infer<typeof advertisementReqSchema>;
type iAdvertisementRes = z.infer<typeof advertisementResSchema>;
type iAdvertisementReqUpdate = DeepPartial<iAdvertisementReq>;
// type iAdvertisementReqUpdate = z.infer<typeof advertisementReqUpdateSchema>

export {
  iAdvertisementEntity,
  iAdvertisementReq,
  iAdvertisementRes,
  iAdvertisementReqUpdate,
};
