import {Body, Controller, Get, Post, Req, UnauthorizedException} from '@nestjs/common';
import {AuthService} from './auth.service';
import {User} from "../users/entities/user.entity";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {verify} from "jsonwebtoken";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,private userService: UsersService) {}

    @Post('login')
    async login(
        @Body() body: { mail: string; password: string },
    ): Promise<{}> {
        const { mail, password } = body;

        const user = await this.authService.validateUser(mail,password  );

        if (!user) {
            return { message: 'Invalid credentials' };
        }
        const token = await this.authService.login(user);
        await this.authService.create(token.access_token)
        return token;
    }
    @Post('register')
    async register(
        @Body() body: { createUserDto:CreateUserDto },
    ): Promise<{}>{
        console.log(body)
        //@ts-ignore
        return await this.authService.register(body);
    }

    @Post('logout')
    async logout(@Req() req) {
        const token = req.headers['auth-user'];
        console.log(token)
        const res = await this.authService.delete(token)
        return res.affected == 1
    }

    @Post('refresh_token')
    async refresh_token(@Req() req) {
        const token = req.headers['auth-user'];
        console.log(token)
        return this.authService.refresh_token(token)
    }



}