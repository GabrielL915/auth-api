import { Injectable } from '@nestjs/common';
import { LoginRequestDto } from '../dto/login-request.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { UseCase, validateUser, generateToken } from 'shared/shared';
import { UserRepository } from 'dataSource/data-source';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoginUseCase
  implements UseCase<LoginRequestDto, LoginResponseDto>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async execute(input: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await validateUser(
      this.userRepository,
      input.email,
      input.password,
    );
    const paylaod = { email: user.email, sub: user.id };
    const tokens = generateToken(this.jwtService, this.configService, paylaod.sub, paylaod.email);
    return tokens;
  }
}
