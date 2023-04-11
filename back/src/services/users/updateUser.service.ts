import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { iUserResponse, iUserUpdateRequest } from "../../interfaces";

const updateUserService = async (
  data: iUserUpdateRequest,
  params_id: string
):Promise<iUserResponse> => {
  const userRepository = AppDataSource.getRepository(User)
  const findUser = await userRepository.findOneBy({
      id: params_id
  })

  const updatedUser = userRepository.create({
      ...findUser,
      ...data
  })
  await userRepository.save(updatedUser)

  const {password, ...userUpdatedWithoutPassword} = updatedUser

  return userUpdatedWithoutPassword

}
export default updateUserService