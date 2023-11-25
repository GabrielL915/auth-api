import { Module } from '@nestjs/common';
import { ResourceAuthController } from './resource-auth.controller';
import { JwtModule } from '@nestjs/jwt';
import {
  CadastroUseCase,
  LoginUseCase,
  AccessTokenStrategy,
  RefreshTokenStrategy,
} from 'domainAuth/domain-auth';
@Module({
  imports: [JwtModule.register({})],
  controllers: [ResourceAuthController],
  providers: [CadastroUseCase, LoginUseCase, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [],
})
export class ResourceAuthModule {}
