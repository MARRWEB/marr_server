import { GoogleLoginAuthOutputDto } from './../dtos/google-login-auth.dto';
import { AuthService } from './../services/auth.service';
import { Controller, Req } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(): Promise<void> {
    // redirect google login page
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(
    @Req() req: Request,
  ): Promise<GoogleLoginAuthOutputDto | string> {
    return this.authService.googleLogin(req);
  }
}
