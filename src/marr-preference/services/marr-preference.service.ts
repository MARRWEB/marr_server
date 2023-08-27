import { PreferenceRepository } from './../marr-preference.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MarrPreferenceService {
  constructor(private preferenceRepository: PreferenceRepository) {}

  async getMarrPreference(userId) {
    return this.preferenceRepository.findMarrPreference(userId);
  }
}
