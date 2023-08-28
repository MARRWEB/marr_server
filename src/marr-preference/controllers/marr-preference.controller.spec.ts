import { Test, TestingModule } from '@nestjs/testing';
import { MarrPreferenceController } from './marr-preference.controller';

describe('MarrPreferenceController', () => {
  let controller: MarrPreferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarrPreferenceController],
    }).compile();

    controller = module.get<MarrPreferenceController>(MarrPreferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
