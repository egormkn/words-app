import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  private readonly logger = new Logger(GoogleStrategy.name);

  constructor(private readonly authService: AuthService, readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
      scope: configService.get<string>('GOOGLE_SCOPE', '').split(','),
    });
  }

  // async validate(accessToken: string, refreshToken: string, profile: any): Promise<UserInterface> {
  //   this.logger.verbose(`Access token: ${accessToken}`);
  //   this.logger.verbose(`Refresh token: ${refreshToken}`);
  //   const { id, ...data } = profile;
  //   const info: Partial<UserInterface> = {
  //     name: profile.displayName,
  //   };
  //   return this.authService.authenticate({
  //     type: this.name,
  //     id,
  //     info,
  //     data: {
  //       ...data,
  //       accessToken,
  //       refreshToken,
  //     },
  //   });
  // }
}