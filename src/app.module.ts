import { Module } from '@nestjs/common';
import { ResourceAuthModule } from 'resourceAuth/resource-auth';
import { ResourceUsersModule } from 'resourceUsers/resource-users';
import { KnexModule } from 'nestjs-knex';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
