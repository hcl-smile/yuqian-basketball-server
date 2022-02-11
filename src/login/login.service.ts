import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto';

@Injectable()
export class LoginService {
  create(loginDTO: LoginDTO): string {
    console.log(loginDTO);
    return 'create user';
  }
}
