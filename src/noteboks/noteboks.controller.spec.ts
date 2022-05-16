import { Test, TestingModule } from '@nestjs/testing';
import { NoteboksController } from './noteboks.controller';
import { NoteboksService } from './noteboks.service';

describe('NoteboksController', () => {
  let controller: NoteboksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteboksController],
      providers: [NoteboksService],
    }).compile();

    controller = module.get<NoteboksController>(NoteboksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
