import { GoogleLoginAuthOutputDto } from './../dtos/google-login-auth.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async googleLogin(req): Promise<GoogleLoginAuthOutputDto | string> {
    if (!req.user) {
      return 'No user from google';
    }

    const { accessToken } = req.user;
    return {
      accessToken,
    };
  }
}
