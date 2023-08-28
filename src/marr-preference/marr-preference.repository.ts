import { UpdatePreferenceDto } from './dtos/update.preference.dto';
import { Preferences } from './../../entities/Preferences';
import { DataSource, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PreferenceRepository extends Repository<Preferences> {
  constructor(private dataSource: DataSource) {
    super(Preferences, dataSource.createEntityManager());
  }

  async findMarrPreference(user_id: number) {
    return await this.find({
      where: {
        userId: user_id,
      },
    });
  }

  async updateMarrPreference(user_id: number, body: UpdatePreferenceDto) {
    const { spice, spicy, meat_type } = body;

    const changeUser = await this.update(
      { userId: user_id },
      {
        spice: spice,
        spicy: spicy,
        meatType: meat_type,
      },
    );

    if (changeUser.affected !== 1) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    return changeUser;
  }
}
