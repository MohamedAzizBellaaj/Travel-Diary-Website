import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {AuthService} from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,"local"){
    constructor(private authService:AuthService ) {
        super({
            usernameField:"mail",

        });
    }


    async validate(mail: string, password: string):Promise<any>{
        console.log("i m here")
        const user = await this.authService.validateUser(mail, password)
        if(!user){
            throw new UnauthorizedException()
        }
        return user;

    }


}