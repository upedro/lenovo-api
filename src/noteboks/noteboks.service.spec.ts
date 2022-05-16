import { Test, TestingModule } from '@nestjs/testing';
import { NoteboksService } from './noteboks.service';

describe('NoteboksService', () => {
  let service: NoteboksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteboksService],
    }).compile();

    service = module.get<NoteboksService>(NoteboksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
