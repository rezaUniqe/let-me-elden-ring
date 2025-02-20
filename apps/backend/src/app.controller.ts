import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Res,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Request as RequestType, Response as ResponseType } from 'express';
import { LoginUserDTO } from './user/dto/loginUserDTO';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Res() res: ResponseType, @Body() body: LoginUserDTO) {
    console.log(body);
    const token = await this.authService.login(body);
    if (token) {
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000,
      });
      return res.json({ message: 'Logged in successfully' });
    } else {
      return res.status(422).json({ message: 'Logged failed' });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: RequestType) {
    return req.user;
  }
}
