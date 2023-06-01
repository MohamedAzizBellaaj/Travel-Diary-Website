import {Injectable} from '@nestjs/common';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Post} from "./entities/post.entity";
import {UsersService} from "../users/users.service";
import {PostImage} from "./entities/post_image.entity";

@Injectable()
export class PostsService {
  constructor(
      @InjectRepository(Post)
      private postRepository: Repository<Post>,
      @InjectRepository(PostImage)
      private postImageRepository: Repository<PostImage>,

      private userService: UsersService,

  ) {}
  async create(createPostDto: CreatePostDto,userId:string,files :Array<Express.Multer.File>) {
    createPostDto.images=[]

    createPostDto.user= await this.userService.findOne(userId)
    const post  = await this.postRepository.save(createPostDto)
    for (const file of files) {
    await this.postImageRepository.save({ "image":file.filename,post:post})

    }
    return post;
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: string) {
    return await this.postRepository.findOne({ where: [{ id: id }] });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
