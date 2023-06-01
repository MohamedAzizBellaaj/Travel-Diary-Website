import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile, UploadedFiles, StreamableFile, Res
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {AuthGuard} from "../auth/auth.guard";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {editFileName} from "./entities/edit_file_name";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {join} from "path";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(FilesInterceptor("files",20,{
    storage:diskStorage({
      destination:"./uploads",
      filename:editFileName,
    })
  }))
  async create(@Body()createPostDto:CreatePostDto, @UploadedFiles() files: Array< Express.Multer.File>, @Request() request) {

    return {"file":files,
    "result":await this.postsService.create(createPostDto,request.user.userId,files)
    }
  }
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get("getFile")
  getFile(@Res() res) {

    return {
      "message":"aaslema",
      "result":res.sendFile("cb478925-4ea1-46a4-aade-c00833e9cb41heart.png", { root : "./uploads/"})
    };
  }
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
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
