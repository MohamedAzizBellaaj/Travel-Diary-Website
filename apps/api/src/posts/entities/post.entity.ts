import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany, Index} from "typeorm"
import {User} from "../../users/entities/user.entity";
import {PostImage} from "./post_image.entity";
import {PostReaction} from "./post_reaction.entity";



@Entity('post')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: "varchar"
    })
    title: string;

    @Column({
        type: "varchar"
    })
    text: string;
    @Column({
        type: "varchar"
    })
    location: string;
    @OneToMany(()=> PostImage,image=>image.post)
    image:PostImage[]

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @OneToMany(() => PostReaction, reaction => reaction.post)
    reactions: PostReaction[];

}







