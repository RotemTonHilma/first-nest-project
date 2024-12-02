import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { ChaptersModule } from './chapters/chapters.module';
import { MentorsModule } from './mentors/mentors.module';

@Module({
  imports: [StudentsModule, ChaptersModule, MentorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
