import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Reviews', { schema: 'MarrMarr' })
export class Reviews {
  @PrimaryGeneratedColumn({ type: 'int', name: 'review_id' })
  reviewId: number;

  @Column('int', { name: 'store_id' })
  storeId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('decimal', {
    name: 'rating',
    comment: '1.00 ~ 5.00',
    precision: 3,
    scale: 2,
  })
  rating: string;

  @Column('text', { name: 'content' })
  content: string;

  @Column('blob', { name: 'photo', nullable: true })
  photo: Buffer | null;

  @Column('timestamp', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  updatedAt: Date;
}
