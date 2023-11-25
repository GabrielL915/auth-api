import { IsString } from 'class-validator';

export class LoginResponseDto {
  @IsString({ message: 'Access token must be a string' })
  access_token: string;

  @IsString({ message: 'Refresh token must be a string' })
  refresh_token: string;
}
