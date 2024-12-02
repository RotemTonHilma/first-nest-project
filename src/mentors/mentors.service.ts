import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { mentorDTO } from './mentor-dto';

@Injectable()
export class MentorsService {

    findAll() {
        throw new InternalServerErrorException("get all mentors route");

    }

    create(mentor: mentorDTO) {
        throw new InternalServerErrorException("post new mentor route");

    }
}
