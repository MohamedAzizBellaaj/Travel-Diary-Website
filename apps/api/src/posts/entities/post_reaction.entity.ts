import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";
import {Post} from "./post.entity";

export enum PostReactType  {
    LIKE = 'like',
    DISLIKE = 'dislike',
    NONE= "none"
}

@Entity("post_reaction")
@Index(["user", "post"], { unique: true })
export class PostReaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum", enum:PostReactType,default:PostReactType.NONE
    })
    type: PostReactType;

    @ManyToOne(() => User, user => user.reactions)
    user: User;

    @ManyToOne(() => Post, post => post.reactions)
    post: Post;

}