import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import {
  CadastroUseCase,
  LoginUseCase,
  CadastroRequestDto,
  LoginRequestDto,
} from 'domainAuth/domain-auth';
import { Public } from 'shared/shared';

@Controller('auth-resource')
export class ResourceAuthController {
  constructor(
    private readonly cadastroUsecase: CadastroUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Public()
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
