import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { editFileName } from './entities/edit_file_name';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
    }),
  )
  async create(
    @Body() createPostDto: CreatePostDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Request() request,
  ) {
    return {
      file: files,
      result: await this.postsService.create(
        createPostDto,
        request.user.userId,
        files,
      ),
    };
  }
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('getFile')
  getFile(@Res() res) {
    return {
      message: 'aaslema',
      result: res.sendFile('cb478925-4ea1-46a4-aade-c00833e9cb41heart.png', {
        root: './uploads/',
      }),
    };
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }
  @Get('user/:id')
  findByUser(@Param('id') id: string) {

    console.log(id)
    return this.postsService.findPostByUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
