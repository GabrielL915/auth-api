import { Module } from '@nestjs/common';
import { ResourceUsersController } from './resource-user.controller';
import { FindAllUseCase, FindByIdUseCase } from 'domainUsers/domain-users';
import { UserRepository, UserRepositoryImpl } from 'dataSource/data-source';

@Module({
  controllers: [ResourceUsersController],
  providers: [
    FindAllUseCase,
    FindByIdUseCase,
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
  exports: [],
})
export class ResourceUsersModule {}
