import { Injectable } from '@nestjs/common';
import {PersonDto} from './dto/person.dto'

@Injectable()
export class HelloService {
    async welcome(person: PersonDto): Promise<string> {
        //check if user exists in the db
        let message: string;
        if(person.year) {
            let current_year = new Date().getFullYear();
            console.log(`Welcome ${person.name} - your birthday is ${person
                .year}`)
            message = `Welcome ${person.name} - your are ${current_year - person.year} years old!`
        }
        else{
            console.log(`Welcome ${person.name} - your birthday is Undefined`)
            message = `Welcome ${person.name} - your birthday is Undefined!!!`
        }
        return message;
    }

}
