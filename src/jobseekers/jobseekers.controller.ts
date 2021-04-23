import { Controller, Get, Post } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {
    constructor(private readonly jobseekersService: JobseekersService){}

    @Post("user")
    createUser()
}
