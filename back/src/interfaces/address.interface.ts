import { z } from "zod";
import { addressReqSchema, addressResSchema } from "../schemas/addresses.schema";
import { DeepPartial, Repository } from "typeorm";
import Address from "../entities/address.entity";

type iAddressEntity = Repository<Address>

type iAddressReq = z.infer<typeof addressReqSchema>;
type iAddressRes = z.infer<typeof addressResSchema>;
type iAddressReqUpdate = DeepPartial<iAddressReq>;

export {
    iAddressEntity,
    iAddressReq,
    iAddressRes,
    iAddressReqUpdate
}