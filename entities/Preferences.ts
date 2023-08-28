import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Preferences', { schema: 'MarrMarr' })
export class Preferences {
  @PrimaryGeneratedColumn({ type: 'int', name: 'preference_id' })
  preferenceId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'spice', comment: '1 ~ 3' })
  spice: number;

  @Column('int', { name: 'spicy', comment: '1 ~ 3' })
  spicy: number;

  @Column('text', { name: 'meat_type', comment: '양고기/소고기' })
  meatType: string;
}
