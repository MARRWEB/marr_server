import { Test, TestingModule } from '@nestjs/testing';
import { MarrPreferenceService } from './marr-preference.service';

describe('MarrPreferenceService', () => {
  let service: MarrPreferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarrPreferenceService],
    }).compile();

    service = module.get<MarrPreferenceService>(MarrPreferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
