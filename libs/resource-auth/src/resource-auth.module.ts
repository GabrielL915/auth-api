import { Module } from '@nestjs/common';
import { ResourceAuthController } from './resource-auth.controller';
import { CadastroUseCase } from 'domainAuth/domain-auth';
import { LoginUseCase } from 'domainAuth/domain-auth';
@Module({
  controllers: [ResourceAuthController],
  providers: [CadastroUseCase, LoginUseCase],
  exports: [],
})
export class ResourceAuthModule {}
