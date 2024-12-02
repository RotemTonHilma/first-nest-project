import { Controller, Get, HttpCode, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { StudentsService } from './students.service';
@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService) {
    }

    @Get()
    // @HttpCode(500)
    findAll() {
        return this.studentsService.findAll()
    }

    @Get(":id")
    findStudent() {
        return this.studentsService.findOne();
    }


}
