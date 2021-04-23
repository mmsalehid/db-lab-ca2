import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import UserEntity from 'src/db/entity/jobseekers_user.entity';

@Injectable()
export class JobseekersService {
    async insertUser(userDetail: CreateUserDTO): Promise<UserEntity>{
        const newUser = UserEntity.create();

        newUser.name = userDetail.name;
        newUser.family_name = userDetail.familyName;
        newUser.phoneNumber = userDetail.phoneNumber;
        newUser.email = userDetail.email;
        newUser.password = userDetail.password;
        
        await UserEntity.insert(newUser);
        return newUser;
    }

    async updateUser(id: number, userDetail: CreateUserDTO): Promise<UserEntity>{
        const user = UserEntity.create();

        user.name = userDetail.name;
        user.family_name = userDetail.familyName;
        user.phoneNumber = userDetail.phoneNumber;
        user.email = userDetail.email;
        user.password = userDetail.password;
        user.id = id;

        return UserEntity.save(user);
    }

    async getAllUsers(): Promise<UserEntity[]>{
        return UserEntity.find()
    }

    async getUserById(id: number): Promise<UserEntity>{
        return UserEntity.findOne(id);
    }

    async deleteUserById(id: number) {
        return UserEntity.delete(id);
    }


}
