import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('RestaurantRatings', { schema: 'MarrMarr' })
export class RestaurantRatings {
  @PrimaryGeneratedColumn({ type: 'int', name: 'rating_id' })
  ratingId: number;

  @Column('int', { name: 'review_id' })
  reviewId: number;

  @Column('tinyint', { name: 'spice', nullable: true, width: 1 })
  spice: boolean | null;

  @Column('tinyint', { name: 'spicy', nullable: true, width: 1 })
  spicy: boolean | null;

  @Column('tinyint', { name: 'volume', nullable: true, width: 1 })
  volume: boolean | null;

  @Column('tinyint', { name: 'service', nullable: true, width: 1 })
  service: boolean | null;

  @Column('tinyint', { name: 'clean', nullable: true, width: 1 })
  clean: boolean | null;
}
