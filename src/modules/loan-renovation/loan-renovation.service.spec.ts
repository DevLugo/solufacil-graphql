import { Test, TestingModule } from '@nestjs/testing';
import { LoanRenovationService } from './loan-renovation.service';

describe('LoanRenovationService', () => {
  let service: LoanRenovationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanRenovationService],
    }).compile();

    service = module.get<LoanRenovationService>(LoanRenovationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
