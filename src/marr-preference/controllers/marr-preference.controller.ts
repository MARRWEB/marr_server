import { Controller, Get } from '@nestjs/common';
import { MarrPreferenceService } from './../services/marr-preference.service';

@Controller('marr-preference')
export class MarrPreferenceController {
  constructor(private readonly marrPreferenceService: MarrPreferenceService) {}

  @Get()
  async getMarrPreference() {
    const userId = 1;
    return this.marrPreferenceService.getMarrPreference(userId);
  }
}
