import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDTO } from './dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @HttpCode(201)
  create(@Body() loginDTO: LoginDTO): string {
    return this.loginService.create(loginDTO);
  }
}
