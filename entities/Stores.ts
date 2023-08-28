import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Stores', { schema: 'MarrMarr' })
export class Stores {
  @PrimaryGeneratedColumn({ type: 'int', name: 'store_id' })
  storeId: number;

  @Column('varchar', { name: 'store_name', length: 50 })
  storeName: string;

  @Column('varchar', { name: 'address', length: 255 })
  address: string;

  @Column('varchar', {
    name: 'telephone',
    comment: '070-0000-0000',
    length: 50,
  })
  telephone: string;

  @Column('decimal', { name: 'longitude', precision: 9, scale: 6 })
  longitude: string;

  @Column('decimal', { name: 'latitude', precision: 9, scale: 6 })
  latitude: string;

  @Column('timestamp', { name: 'created_date' })
  createdDate: Date;

  @Column('text', { name: 'operation_time' })
  operationTime: string;
}
