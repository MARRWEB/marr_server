import { IsNumber, IsString } from 'class-validator';

export class UpdatePreferenceDto {
  @IsNumber()
  readonly spice: number;

  @IsNumber()
  readonly spicy: number;

  @IsString()
  readonly meat_type: string;
}
