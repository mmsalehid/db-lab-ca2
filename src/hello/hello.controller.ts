import { Controller, Post, Header, Body, Query, Get} from '@nestjs/common';
import { HelloService } from './hello.service';
import { PersonDto } from './dto/person.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger'; 

@Controller('hello')
export class HelloController {
    constructor(
        private readonly helloService: HelloService,
    ){}

        @Header('Content-Type', 'application/json')
        @ApiResponse({ status: 200, description: 'Say Hello!!!' }) 
        @Post('welcome')
        @Header('Content-Type', 'application/json')
        async sayWelcome(@Body() personDto: PersonDto): Promise<{data: string}> {
            let message = await this.helloService.welcome(personDto);
            return {data: message};
        }
        
        @ApiResponse({ status: 200})
        @ApiQuery({
            name: 'name',
            required: true,
            type: String,
            // enum : ["All", "Browser", "Device"]
        })
        @ApiQuery({
            name: 'year',
            required: false,
            type: Number,
            description: 'you can ignore this'
        })
        @Get('welcome')
        async sayWelcome2(@Query('name') iname, @Query('year') iyear ): Promise<{data: string}> {
            let message = await this.helloService.welcome({name: iname, year: iyear});
            return {data: message};
        }

}
