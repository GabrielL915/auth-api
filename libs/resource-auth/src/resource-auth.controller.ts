import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {
  CadastroUseCase,
  LoginUseCase,
  CadastroRequestDto,
  LoginRequestDto,
} from 'domainAuth/domain-auth';
import { Public, AccessTokenGuard } from 'shared/shared';

@Controller('auth-resource')
export class ResourceAuthController {
  constructor(
    private readonly cadastroUsecase: CadastroUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Public()
  @UseGuards(AccessTokenGuard)
  @Post('cadastro')
  cadastro(@Body() input: CadastroRequestDto) {
    return this.cadastroUsecase.execute(input);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() input: LoginRequestDto) {
    return this.loginUseCase.execute(input);
  }
}
