import AppDataSource from "../../data-source"
import Address from "../../entities/address.entity"
import User from "../../entities/user.entity"
import AppError from "../../errors/AppError"
import { iAddressEntity } from "../../interfaces/address.interface"
import { iUserEntity, iUserRes } from "../../interfaces/users.interface"


const deleteUserService = async (userId: string) => {
    const userRepository:iUserEntity = AppDataSource.getRepository(User)
    const addressRepository: iAddressEntity = AppDataSource.getRepository(Address)

    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }, 
        relations: {
            address: true
        }
    })

    if (!findUser) {
        throw new AppError("User not found!", 404)
    }

    const findAddress = await addressRepository.findOne({
        where: {
            id: findUser.address.id
        }
    })

    if (!findAddress) {
        throw new AppError("Address not found!", 404)
    }

    await userRepository.remove(findUser)
    await addressRepository.remove(findAddress)

    return "User deleted!"
}

export default deleteUserService