import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { Request as RequestType } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  private static extractJwt(req: RequestType): string | null {
    if (
      req.cookies &&
      'user_token' in req.cookies &&
      (req.cookies.user_token as string).length > 0
    ) {
      return req.cookies.user_token as string;
    } else {
      return null;
    }
  }

  validate(payload: any) {
    return payload;
  }
}
