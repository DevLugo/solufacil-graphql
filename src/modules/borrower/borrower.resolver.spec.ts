import { Test, TestingModule } from '@nestjs/testing';
import { BorrowerResolver } from './borrower.resolver';

describe('BorrowerResolver', () => {
  let resolver: BorrowerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowerResolver],
    }).compile();

    resolver = module.get<BorrowerResolver>(BorrowerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
