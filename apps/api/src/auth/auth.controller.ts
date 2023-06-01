import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() body: { mail: string; password: string },
    @Req() req,
  ): Promise<{}> {
    const token = await this.authService.login(req.user);
    await this.authService.create(token.access_token);
    return token;
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<{}> {
    // @ts-ignore
    return await this.authService.register(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Req() req) {
    const token = req.headers['auth-user'];
    const res = await this.authService.delete(token);
    return res.affected == 1;
  }

  @Post('refresh_token')
  async refresh_token(@Req() req) {
    const token = req.headers['auth-user'];
    return this.authService.refresh_token(token);
  }

  @UseGuards(AuthGuard)
  @Get('test')
  hi_there(@Request() req) {
    return req.user;
  }
}
