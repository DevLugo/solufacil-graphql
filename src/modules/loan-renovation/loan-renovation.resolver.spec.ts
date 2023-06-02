import { Test, TestingModule } from '@nestjs/testing';
import { LoanRenovationResolver } from './loan-renovation.resolver';

describe('LoanRenovationResolver', () => {
  let resolver: LoanRenovationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanRenovationResolver],
    }).compile();

    resolver = module.get<LoanRenovationResolver>(LoanRenovationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
