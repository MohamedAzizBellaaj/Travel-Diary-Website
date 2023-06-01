import {Injectable, NotAcceptableException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {hash,compare} from 'bcrypt';
import {UsersService} from "../users/users.service";
import {User} from "../users/entities/user.entity";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {Repository} from "typeorm";
import {Token} from "./entities/auth.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(Token)
        private tokenRepository: Repository<Token>
    ) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.userService.findByEmail(email);
        console.log(user.password)
        console.log(password)

        const res = await compare(password,user.password)

        if (user && res) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
    async create(token:string){
        await this.tokenRepository.save({access_token:token})
    }


    async login(user:User): Promise<{ access_token: string }> {
        const payload = { email: user.mail, userId: user.id };
        console.log(payload)

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async register(user: CreateUserDto) {
        console.log(user)
        const _user = await this.userService.emailExist(user.mail);
        if(!_user){
            throw new NotAcceptableException("User Already exists")
        }
        user.password = await hash(user.password, 10);
        const newUser = await this.userService.create(user);
        return {message:"User Registered Successfully",newUser
        }
    }
    async delete(token: string) {
        return this.tokenRepository.delete({access_token:token})
    }
    async refresh_token(token:string){
        const _token = await this.tokenRepository.findOne({where: {access_token: token}})
        if(!_token) throw new NotAcceptableException("token is invalid")
        const payload = this.jwtService.decode(token)
        // console.log(payload)
        // @ts-ignore
        const {email,userId, ...other} = payload
        // console.log(email,userId)
        if(!email || !userId) throw new NotAcceptableException("token is invalid")
        const new_token = await this.jwtService.signAsync( { email: email, userId: userId })

        await this.tokenRepository.update({id:_token.id}, {access_token:new_token})
        return {
            access_token: new_token,
        };
    }
}
