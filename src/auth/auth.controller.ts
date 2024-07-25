import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() request: any
  ) {
    return await this.authService.login(request); 
  }
}
