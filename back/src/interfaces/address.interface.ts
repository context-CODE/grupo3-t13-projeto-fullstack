import { z } from "zod";
import { addressReqSchema, addressResSchema } from "../schemas/addresses.schema";
import { DeepPartial } from "typeorm";

type iAddressReq = z.infer<typeof addressReqSchema>;
type iAddressRes = z.infer<typeof addressResSchema>;
type iAddressReqUpdate = DeepPartial<iAddressReq>;

export {
    iAddressReq,
    iAddressRes,
    iAddressReqUpdate
}