import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export async function generateToken(
  jwtService: JwtService,
  configService: ConfigService,
  id: string,
  email: string,
) {
  const [access_token, refresh_token] = await Promise.all([
    jwtService.signAsync(
      { sub: id, email },
      { secret: configService.get<string>('ACCESS_KEY'), expiresIn: '4d' },
    ),
    jwtService.signAsync(
      { sub: id, email },
      { secret: configService.get<string>('REFRESH_KEY'), expiresIn: '7d' },
    ),
  ]);
  return { access_token: access_token, refresh_token: refresh_token };
}
