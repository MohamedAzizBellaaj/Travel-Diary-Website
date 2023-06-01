import {IsNotEmpty} from "class-validator";

export class PostTagDto  {
    @IsNotEmpty()
    text: string
}