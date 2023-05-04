import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { iUserReqUpdate, iUserRes } from "../../interfaces/users.interface";
import { usersResUpdateSchema } from "../../schemas/users.schema";

const updateUserService = async (updateData: iUserReqUpdate, userId: string): Promise<iUserRes> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("Id inválido", 404)
    }
    
    const updatedUserObject = {
        name: updateData.name? updateData.name : user.name,
        email: updateData.email? updateData.email : user.email,
        cpf: updateData.cpf? updateData.cpf : user.cpf,
        phone_number: updateData.phone_number? updateData.phone_number : user.phone_number,
        birthdate: updateData.birthdate? updateData.birthdate : user.birthdate,
        description: updateData.description? updateData.description : user.description,
    }

    const newUserUpdated = userRepository.create(updatedUserObject)

    await userRepository.update(
        userId, newUserUpdated
    )

    const updatedUser = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            address: true
        }
    })
    return usersResUpdateSchema.parse(updatedUser) as iUserRes
}

export default updateUserService