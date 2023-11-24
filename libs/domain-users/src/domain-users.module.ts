import { Module } from '@nestjs/common';
import { DomainUsersService } from './domain-users.service';

@Module({
  providers: [DomainUsersService],
  exports: [DomainUsersService],
})
export class DomainUsersModule {}
