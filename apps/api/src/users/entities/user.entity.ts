import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
import { CommentReaction } from '../../comments/entities/comment_reaction.entity';
import { Post } from '../../posts/entities/post.entity';
import { PostReaction } from '../../posts/entities/post_reaction.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
  })
  firstname: string;

  @Column({
    type: 'varchar',
  })
  lastname: string;

  @Column({
    type: 'varchar',
  })
  bio: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  mail: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
  })
  avatar: string;

  @Column({
    type: 'varchar',
  })
  coverPhoto: string;

  @ManyToMany(() => User)
  @JoinTable()
  followers: User[];

  @ManyToMany(() => Post)
  @JoinTable()
  favorite_posts: Post[];

  @ManyToMany(() => Post)
  @JoinTable()
  to_watch_later_posts: Post[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
  @OneToMany(() => PostReaction, (reaction) => reaction.user)
  post_reactions: PostReaction[];

  @OneToMany(() => CommentReaction, (reaction) => reaction.user)
  comment_reactions: CommentReaction[];
}
