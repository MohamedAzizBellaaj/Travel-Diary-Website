import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Comment } from './comment.entity';
// import {Post} from "./post.entity";

export enum CommentReactType {
  LIKE = 'like',
  DISLIKE = 'dislike',
  NONE = 'none',
}

@Entity('comment_reaction')
@Index(['user', 'comment'], { unique: true })
export class CommentReaction {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'enum',
    enum: CommentReactType,
    default: CommentReactType.NONE,
  })
  type: CommentReactType;

  @ManyToOne(() => User, (user) => user.comment_reactions)
  user: User;

  @ManyToOne(() => Comment, (comment) => comment.reactions)
  comment: Comment;
}
