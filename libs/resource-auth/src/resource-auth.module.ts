import { Module } from '@nestjs/common';
import { ResourceAuthController } from './resource-auth.controller';
import { JwtModule } from '@nestjs/jwt';
import {
  CadastroUseCase,
  LoginUseCase,
  AccessTokenStrategy,
  RefreshTokenStrategy,
} from 'domainAuth/domain-auth';
import { UserRepository, UserRepositoryImpl } from 'dataSource/data-source';

@Module({
  imports: [JwtModule.register({})],
  controllers: [ResourceAuthController],
  providers: [
    CadastroUseCase,
    LoginUseCase,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
  exports: [],
})
export class ResourceAuthModule {}
