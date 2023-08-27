import { UpdatePreferenceDto } from './../dto/update.preference.dto';
import { Body, Controller, Get, Patch } from '@nestjs/common';
import { MarrPreferenceService } from './../services/marr-preference.service';

@Controller('marr-preference')
export class MarrPreferenceController {
  constructor(private readonly marrPreferenceService: MarrPreferenceService) {}

  @Get()
  async getMarrPreference() {
    const user_id = 1;
    return this.marrPreferenceService.getMarrPreference(user_id);
  }

  @Patch()
  async updateMarrPreference(@Body() body: UpdatePreferenceDto) {
    const user_id = 1;
    return this.marrPreferenceService.updateMarrPreference(user_id, body);
  }
}
