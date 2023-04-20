import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { iAddressEntity } from "../../interfaces/address.interface";
import { iUserEntity, iUserReq, iUserRes } from "../../interfaces/users.interface";
import { addressResSchema } from "../../schemas/addresses.schema";
import { usersResSchema } from "../../schemas/users.schema";

const createUserService = async (newUserData: iUserReq): Promise<iUserRes> => {
    const userRepository: iUserEntity = AppDataSource.getRepository(User);
    const addressRepository: iAddressEntity = AppDataSource.getRepository(Address);

    const password = newUserData.password
    const newAddressObj = newUserData.address

    const users = await userRepository.find()
    const addresses = await addressRepository.find()
    
    const emailAlreadyExists = users.find(user => user.email === newUserData.email)

    if (emailAlreadyExists) {
        throw new AppError("User already exists!")
    }

    const cpfAlreadyExists = users.find(user => user.cpf === newUserData.cpf)

    if (cpfAlreadyExists) {
        throw new AppError("CPF already exists!")
    }

    if (!password ) {
        throw new AppError("Password is missing")
    }

    const addressAlreadyExists = addresses.find(address => address.zip_code === newAddressObj.zip_code && address.number === newAddressObj.number)
    
    if (addressAlreadyExists) {
        throw new AppError("Address already exists!")
    }

    const address: Address = addressRepository.create(newAddressObj)
    await addressRepository.save(address)
    const newAddress = addressResSchema.parse(address)

    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
        name: newUserData.name,
        email: newUserData.email,
        password: hashedPassword,
        cpf: newUserData.cpf,
        phone_number: newUserData.phone_number,
        birthdate: newUserData.birthdate,
        profile_img: newUserData.profile_img,
        is_advertiser: newUserData.is_advertiser,
        address: newAddress,
        description: newUserData.description? newUserData.description : ""
    })

    await userRepository.save(user);
    const newUser = usersResSchema.parse(user);

    return newUser as iUserRes;
}

export default createUserService;