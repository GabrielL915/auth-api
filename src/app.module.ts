import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ResourceAuthModule } from 'resourceAuth/resource-auth';
import { ResourceUsersModule } from 'resourceUsers/resource-users';
import { KnexModule } from 'nest-knexjs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    ResourceAuthModule,
    ResourceUsersModule,
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'pguser',
          password: 'pgpassword',
          database: 'nestjs',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
