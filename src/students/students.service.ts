import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class StudentsService {
    findAll() {
        throw new InternalServerErrorException("get all students route");

    }

    findOne() {
        throw new InternalServerErrorException("get one students route");

    }
}
