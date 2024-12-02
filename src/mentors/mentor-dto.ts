import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class mentorDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    lesson: number;

    @IsInt()
    chapter: number;

}