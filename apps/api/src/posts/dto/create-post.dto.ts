
import {ArrayMinSize, IsArray, IsNotEmpty, IsString, MaxLength, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {User} from "../../users/entities/user.entity";
import {PostImage} from "../entities/post_image.entity";
import {PostReaction} from "../entities/post_reaction.entity";
import {Post} from "../entities/post.entity";
import {PostTag} from "../entities/post_tags.entity";
import {IsNull} from "typeorm";
import {PostTagDto} from "./post-tag.dto";

export class CreatePostDto{
    @IsNotEmpty({message:"title cant be empty"})
    @MaxLength(15)
    title:string;
    @IsNotEmpty({message:"text cant be empty"})
    text:string;
    @IsNotEmpty({message:"location cant be empty"})
    location:string;


    @ValidateNested()
    @Type(()=>User)
    user:User;


    @ValidateNested()
    @Type(()=>PostImage)
    images:PostImage[];


    @ValidateNested()
    @Type(()=>PostTagDto)
    tags:PostTagDto[];

}
