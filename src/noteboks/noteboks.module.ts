import { Module } from '@nestjs/common';
import { NoteboksService } from './noteboks.service';
import { NoteboksController } from './noteboks.controller';

@Module({
  controllers: [NoteboksController],
  providers: [NoteboksService]
})
export class NoteboksModule {}
