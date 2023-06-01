import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Post } from './entities/post.entity';
import { PostImage } from './entities/post_image.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    TypeOrmModule.forFeature([Post, User, PostImage]),
  ],
  controllers: [PostsController],
  providers: [PostsService, UsersService],
  exports: [PostsService],
})
export class PostsModule {}
