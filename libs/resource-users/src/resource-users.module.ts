import { Module } from '@nestjs/common';
import { ResourceUsersService } from './resource-users.service';

@Module({
  providers: [ResourceUsersService],
  exports: [ResourceUsersService],
})
export class ResourceUsersModule {}
