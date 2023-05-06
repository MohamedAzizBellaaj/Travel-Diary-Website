import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import {User} from "./users/entities/user.entity";
import {Post} from "./posts/entities/post.entity";
import {PostReaction} from "./posts/entities/post_reaction.entity";
import {PostImage} from "./posts/entities/post_image.entity";
import { CommentsModule } from './comments/comments.module';
import {Comment} from "./comments/entities/comment.entity";
import {CommentReaction} from "./comments/entities/comment_reaction.entity";
import {PostTag} from "./posts/entities/post_tags.entity";

@Module({
  imports: [
    ConfigModule.forRoot(
        {
            isGlobal:true
        }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
      TypeOrmModule.forRoot(
          {
            type:'mysql',
            host: process.env.DB_HOST,
            port: 3306,
            username:"root",
            database: process.env.DATABASE,
            synchronize: true,
            entities:[User,Post,PostReaction,PostImage,Comment,CommentReaction,PostTag],
            logging:true
          }
      ),
      UsersModule,
      PostsModule,
      CommentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
