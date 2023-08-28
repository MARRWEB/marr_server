import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('RestaurantImages', { schema: 'MarrMarr' })
export class RestaurantImages {
  @PrimaryGeneratedColumn({ type: 'int', name: 'store_photo_id' })
  storePhotoId: number;

  @Column('int', { name: 'store_id' })
  storeId: number;

  @Column('blob', { name: 'photo' })
  photo: Buffer;
}
