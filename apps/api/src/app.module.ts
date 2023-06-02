import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import * as process from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Token } from './auth/entities/auth.entity';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/entities/comment.entity';
import { CommentReaction } from './comments/entities/comment_reaction.entity';
import { Post } from './posts/entities/post.entity';
import { PostImage } from './posts/entities/post_image.entity';
import { PostReaction } from './posts/entities/post_reaction.entity';
import { PostTag } from './posts/entities/post_tags.entity';
import { PostsModule } from './posts/posts.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3307,
      username: 'root',
      // password: process.env.DB_PASSWORD,
      database: "travel_diary",
      synchronize: true,
      entities: [
        User,
        Post,
        PostReaction,
        PostImage,
        Comment,
        CommentReaction,
        PostTag,
        Token,
      ],
      logging: false,
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
