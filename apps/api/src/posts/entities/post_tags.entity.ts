import {Column, Entity,  ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./post.entity";

@Entity("post_tags")
export class PostTag {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    text: string

    @ManyToOne(()=>Post,post=>post.tags)
    post:Post
}