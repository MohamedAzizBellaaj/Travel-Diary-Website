import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username cant be empty' })
  username: string;
  @IsNotEmpty({ message: 'FirstName cant be empty' })
  firstname: string;
  @IsNotEmpty({ message: 'LastName cant be empty' })
  lastname: string;
  @IsString()
  bio: string;
  @IsNotEmpty({ message: 'Email cant be empty' })
  @IsEmail()
  mail: string;
  @IsNotEmpty({ message: 'Password cant be empty' })
  password: string;
  avatar: string;
  coverPhoto: string;
}
