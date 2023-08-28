import { UpdatePreferenceDto } from './../dto/update.preference.dto';
import { PreferenceRepository } from './../marr-preference.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MarrPreferenceService {
  constructor(private preferenceRepository: PreferenceRepository) {}

  async getMarrPreference(user_id: number) {
    return await this.preferenceRepository.findMarrPreference(user_id);
  }

  async updateMarrPreference(user_id: number, body: UpdatePreferenceDto) {
    return await this.preferenceRepository.updateMarrPreference(user_id, body);
  }
}
