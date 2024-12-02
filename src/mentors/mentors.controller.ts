import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { mentorDTO } from './mentor-dto';


@Controller('mentors')
export class MentorsController {
    constructor(private mentorsSrevice: MentorsService) { }

    @Get()
    findAllMentors() {

        return this.mentorsSrevice.findAll();
    }

    @Post()
    create(@Body(ValidationPipe) newMentor: mentorDTO) {
        this.mentorsSrevice.create(newMentor);
    }



}
