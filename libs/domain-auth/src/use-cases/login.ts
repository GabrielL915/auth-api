import { Injectable } from '@nestjs/common';
import { LoginRequestDto } from '../dto/login-request.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { UseCase } from 'shared/shared';

@Injectable()
export class LoginUseCase implements UseCase<LoginRequestDto, LoginResponseDto> {

    async execute(input: LoginRequestDto): Promise<LoginResponseDto> {
        console.log(input)
        return {
            access_token: 'access_token',
            refresh_token: 'refresh_token',
        }
    }
}