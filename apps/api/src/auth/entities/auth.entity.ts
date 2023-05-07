import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('token')
export class Token {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "varchar",unique:true
    })
    access_token: string;

}
