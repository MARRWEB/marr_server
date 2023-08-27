import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MyDibs', { schema: 'MarrMarr' })
export class MyDibs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'dibs_id' })
  dibsId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'store_id' })
  storeId: number;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;
}
