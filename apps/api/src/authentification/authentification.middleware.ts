import {Injectable, InternalServerErrorException, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {NextFunction} from 'express';
import {verify} from 'jsonwebtoken';
import {UsersService} from 'src/users/users.service';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class AuthentificationMiddleware implements NestMiddleware {
  constructor(
      private readonly userService: UsersService,
      private readonly authService: AuthService,
  ) {}

  async use(req: Request , res: Response, next: NextFunction) {
    try {
      const token = req.headers['auth-user'];
      console.log(token)
      if(!token) return next(new UnauthorizedException("auth-user header is missing."));
      console.log("token is ready")
      if(!await this.authService.validateToken(token)) return next(new UnauthorizedException("Invalid token."));
      console.log("token is found")
      const decoded = verify(token, process.env.JWT_SECRET, {"algorithms": ["HS256"]})
      console.log(decoded)
      if(!decoded) return next(new UnauthorizedException("Invalid token."));
      console.log("userId",decoded["userId"])
      req["user"] = await this.userService.findOne(decoded["userId"]);
      console.log("next next")
      next()
    } catch (err) {
      next(new InternalServerErrorException("Error occured."))
    }
  }
}