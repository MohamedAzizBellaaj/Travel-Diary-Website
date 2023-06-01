import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
import { User } from '../../users/entities/user.entity';
import { PostImage } from './post_image.entity';
import { PostReaction } from './post_reaction.entity';
import { PostTag } from './post_tags.entity';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'varchar',
  })
  text: string;
  @Column({
    type: 'varchar',
  })
  location: string;
  @OneToMany(() => PostImage, (image) => image.post, {
    cascade: ['insert', 'update'],
  })
  image: PostImage[];

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @OneToMany(() => PostReaction, (reaction) => reaction.post, { cascade: true })
  reactions: PostReaction[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToMany(() => PostTag, (tag) => tag.post, { cascade: true })
  tags: PostTag[];
}
