 import { Controller, Post, Body, } from '@nestjs/common';
 import { CadastroUseCase } from 'domainAuth/domain-auth';
 import { LoginUseCase } from 'domainAuth/domain-auth';


@Controller('resource-auth')
export class ResourceAuthController {
  constructor(private readonly cadastroUsecase: CadastroUseCase,
    private readonly loginUseCase: LoginUseCase) {}

  @Post()
  create(@Body() createResourceAuthDto: any) {
    return this.cadastroUsecase.execute(createResourceAuthDto);
  }
} 