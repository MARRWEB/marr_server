import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('LocalTop5', { schema: 'MarrMarr' })
export class LocalTop5 {
  @PrimaryGeneratedColumn({ type: 'int', name: 'local_recomds_id' })
  localRecomdsId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'store_id' })
  storeId: number;
}
