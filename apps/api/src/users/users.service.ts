import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto)

  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne({ where: [{ id: id }] });
    return this.handleUser(user)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByEmail(email: string) {
    const user =  await this.usersRepository.findOneBy({mail :email })
    return this.handleUser(user)
  }
  async emailExist(email:string):Promise<boolean>{
    const user =  await this.usersRepository.findOneBy({mail :email })
    return user===null

  }
  handleUser(user){
    if(!user) throw new NotFoundException("User not found.");
    return user;
  }
}
