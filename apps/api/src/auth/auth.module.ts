import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
import {Token} from "./entities/auth.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
      UsersModule,JwtModule.register({
      global:true,
    secret: "int_to_win",
    signOptions: {
      expiresIn: 3600,
    }
  }),
  PassportModule.register({defaultStrategy: 'jwt'}),],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]

})
export class AuthModule {}
