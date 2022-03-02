import { Test, TestingModule } from '@nestjs/testing';
import { LocalResolver } from './local.resolver';

describe('LocalResolver', () => {
  let resolver: LocalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalResolver],
    }).compile();

    resolver = module.get<LocalResolver>(LocalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
