import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { iAddressEntity, iAddressReqUpdate, iAddressRes } from "../../interfaces/address.interface";
import { iUserEntity } from "../../interfaces/users.interface";


const updateAddressService = async (updateData: iAddressReqUpdate, userId:string): Promise<iAddressRes> => {
    const userRepository:iUserEntity = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            address: true
        }
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const addressRepository:iAddressEntity = AppDataSource.getRepository(Address)
    const address = await addressRepository.findOne({
        where: {
            id: user.address.id
        }
    })

    if (!address) {
        throw new AppError("Address not found", 404)
    }
    
    
    const updatedAddressObject = {
       
        zip_code: updateData.zip_code? updateData.zip_code : address.zip_code,
        state: updateData.state? updateData.state : address.state,
        city: updateData.city? updateData.city : address.city,
        street: updateData.street? updateData.street : address.street,
        number: updateData.number? updateData.number : address.number,
        complement: updateData.complement? updateData.complement : address.complement,
        
    }

    const newAddressUpdated = addressRepository.create(updatedAddressObject)

    await addressRepository.update(
        user.address.id, newAddressUpdated
    )

    const updatedAddress = await addressRepository.findOne({
        where: {
            id: user.address.id
        },
    })

   

    return updatedAddress! 
}

export default updateAddressService