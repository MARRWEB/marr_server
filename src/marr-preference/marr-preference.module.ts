import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarrPreferenceService } from './services/marr-preference.service';
import { MarrPreferenceController } from './controllers/marr-preference.controller';
import { PreferenceRepository } from './marr-preference.repository';
import { Preferences } from 'entities/Preferences';

@Module({
  imports: [TypeOrmModule.forFeature([Preferences])],
  providers: [MarrPreferenceService, PreferenceRepository],
  controllers: [MarrPreferenceController],
})
export class MarrPreferenceModule {}
