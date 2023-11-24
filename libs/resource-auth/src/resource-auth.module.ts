import { Module } from '@nestjs/common';
import { ResourceAuthService } from './resource-auth.service';

@Module({
  providers: [ResourceAuthService],
  exports: [ResourceAuthService],
})
export class ResourceAuthModule {}
