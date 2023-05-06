import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany} from "typeorm"
import {Post} from "../../posts/entities/post.entity";
import {PostReaction} from "../../posts/entities/post_reaction.entity";



@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar",unique:true
    })
    username: string;

    @Column({
        type: "varchar"
    })
    firstname: string;


    @Column({
        type: "varchar"
    })
    lastname: string;

    @Column({
        type: "varchar"
    })
    bio: string;

    @Column({
        type: "varchar"
    })
    mail: string;

    @Column({
        type: "varchar"
    })
    password: string;

    @Column({
        type: "varchar"
    })
    avatar: string;

    @ManyToMany(() => User)
    @JoinTable()
    followers: User[];


    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    @OneToMany(() => PostReaction, reaction => reaction.user)
    reactions: PostReaction[];

}
