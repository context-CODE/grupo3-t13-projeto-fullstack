import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import Advertisement from "../entities/advertisement.entity";
import {
  advertisementReqSchema,
  advertisementResSchema,
} from "../schemas/advertisement.schema";

type iAdvertisementEntity = Repository<Advertisement>;

type iAdvertisementReq = z.infer<typeof advertisementReqSchema>;
type iAdvertisementRes = z.infer<typeof advertisementResSchema>;
type iAdvertisementReqUpdate = DeepPartial<iAdvertisementReq>;

export {
  iAdvertisementEntity,
  iAdvertisementReq,
  iAdvertisementRes,
  iAdvertisementReqUpdate,
<<<<<<< HEAD
};
=======
};
>>>>>>> 0946a2ad8bef42cd5036b9f2a88341004ab9077d
