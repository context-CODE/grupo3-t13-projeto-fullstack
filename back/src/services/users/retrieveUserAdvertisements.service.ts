import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"
import { iUserAdvertisements, iUserEntity } from "../../interfaces/users.interface"
import { userAdvertisementsResSchema } from "../../schemas/users.schema"

const retrieveUserAdvertisementsService = async (userId: string): Promise<iUserAdvertisements> => {
    const userRepository:iUserEntity = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            advertisements: true
        }
    })

    const userAdvertisements = userAdvertisementsResSchema.parse(user)

    return userAdvertisements
}

export default retrieveUserAdvertisementsService