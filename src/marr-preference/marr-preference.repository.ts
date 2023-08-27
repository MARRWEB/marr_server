import { Preferences } from './../../entities/Preferences';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PreferenceRepository extends Repository<Preferences> {
  constructor(private dataSource: DataSource) {
    super(Preferences, dataSource.createEntityManager());
  }

  async findMarrPreference(userId) {
    return await this.find({
      where: {
        userId: userId,
      },
    });
  }
}
