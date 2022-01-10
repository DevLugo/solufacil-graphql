import { Test, TestingModule } from '@nestjs/testing';
import { LoanTypeService } from './loan-type.service';

describe('LoanTypeService', () => {
  let service: LoanTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanTypeService],
    }).compile();

    service = module.get<LoanTypeService>(LoanTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
