import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, UploadedFile, UploadedFiles, UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {editFileName} from "../posts/entities/edit_file_name";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()

  async create(@Body() createUserDto: CreateUserDto,)
  {
    return await  this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    const allUsers = []
    for (const user of users) {
      const {password,...userData}=user
      allUsers.push(userData)
    }
    return allUsers
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    const {password , ...userData } = user
    return userData
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
