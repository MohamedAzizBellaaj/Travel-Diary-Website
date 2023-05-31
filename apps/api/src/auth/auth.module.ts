import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Token} from "./entities/auth.entity";
import {LocalStrategy} from "./local.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
      UsersModule,JwtModule.register({
      global:true,
    secret: "int_to_win",
    signOptions: {
      expiresIn: "10s",
    }
  }),UsersModule,
  PassportModule
    ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy],
  exports:[AuthService]

})
export class AuthModule {}
