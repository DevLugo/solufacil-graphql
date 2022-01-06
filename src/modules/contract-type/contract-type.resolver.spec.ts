import { Test, TestingModule } from '@nestjs/testing';
import { ContractTypeResolver } from './contract-type.resolver';

describe('ContractTypeResolver', () => {
  let resolver: ContractTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractTypeResolver],
    }).compile();

    resolver = module.get<ContractTypeResolver>(ContractTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
