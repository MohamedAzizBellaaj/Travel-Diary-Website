import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./post.entity";

@Entity("post_image")
@Index(["image", "post"], { unique: true })
export class PostImage {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    image:string;

    @ManyToOne(() => Post, post => post.reactions)
    post: Post;
}
