import {Entity, Column, PrimaryGeneratedColumn,  OneToMany, ManyToOne} from "typeorm"
import {User} from "../../users/entities/user.entity";
import {Post} from "../../posts/entities/post.entity";
import {CommentReaction} from "./comment_reaction.entity";



@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text:string;


    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

    @OneToMany(() => CommentReaction, reaction => reaction.comment)
    reactions: CommentReaction[];

}
