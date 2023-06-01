import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
import {Post} from "./entities/post.entity";
import {PostTag} from "./entities/post_tags.entity";
import {UsersService} from "../users/users.service";
import {MulterModule} from "@nestjs/platform-express";
import {PostImage} from "./entities/post_image.entity";

@Module({
  imports:[
    MulterModule.register({dest:"./uploads"}),
    TypeOrmModule.forFeature([Post,User,PostImage])
  ],
  controllers: [PostsController],
  providers: [PostsService,UsersService],
  exports:[PostsService]
})
export class PostsModule {}
