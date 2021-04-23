import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateValuesMissingError, getCustomRepository } from 'typeorm';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersService: JobseekersService){}

    @Post("user")
    createUser(@Body() userDetail: CreateUserDTO){
        return this.jobseekersService.insertUser(userDetail);
    }


    @Put("user/:id")
    updateUser(@Param('id') id: number, @Body() userDetail: CreateUserDTO){
        this.jobseekersService.updateUser(id, userDetail);
    }

    @Get("user")
    getAllUsers(){
        this.jobseekersService.getAllUsers();
    }

    @Get("user/:id")
    getUser(@Param('id') id: number) {
        this.jobseekersService.getUserById(id);
    }

    @Delete("user/:id")
    deleteUser(@Param('id') id: number){
        this.jobseekersService.deleteUserById(id);
    }
}
