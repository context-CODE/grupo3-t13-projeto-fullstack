import { Request, Response } from "express";
import { iAddressReqUpdate } from "../../interfaces/address.interface";
import updateAddressService from "../../services/addresses/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
    const updateData: iAddressReqUpdate = req.body
    const userToBeUpdated = req.user.id
    const addressUpdated = await updateAddressService(updateData, userToBeUpdated)
    return res.send(addressUpdated)
}

export default updateAddressController