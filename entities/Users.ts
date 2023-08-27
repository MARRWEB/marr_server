import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users', { schema: 'MarrMarr' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'login_id', length: 50 })
  loginId: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('text', { name: 'phone_number' })
  phoneNumber: string;

  @Column('varchar', { name: 'email', length: 100 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 50 })
  nickname: string;

  @Column('int', { name: 'level', default: () => "'0'" })
  level: number;

  @Column('varchar', { name: 'access_token', length: 255 })
  accessToken: string;

  @Column('blob', { name: 'photo', nullable: true })
  photo: Buffer | null;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;

  @Column('decimal', {
    name: 'cur_longitude',
    nullable: true,
    precision: 9,
    scale: 6,
  })
  curLongitude: string | null;

  @Column('decimal', {
    name: 'cur_latitude',
    nullable: true,
    precision: 9,
    scale: 6,
  })
  curLatitude: string | null;
}
