import { UserRepository } from "./user-repository";
import { User } from "domainUsers/domain-users";
import { CadastroRequestDto } from 'domainAuth/domain-auth';
import { InjectKnex, Knex } from 'nestjs-knex';

export class UserRepositoryImpl implements UserRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createOne(input: CadastroRequestDto): Promise<User> {
    const [user] = await this.knex('users').insert(input).returning('*');
    return user;
  }

  async updateOne(id: string, input: any): Promise<User> {
    const [user] = await this.knex('users').update(input).where({ id }).returning('*');
    return user;
  }

  async deleteOne(id: string): Promise<string> {
    await this.knex('users').delete().where({ id });
    return id;
  }

  async findAll(): Promise<User[]> {
    const users = await this.knex('users').select('*');
    return users;
  }

  async findOne(id: string): Promise<User> {
    const [user] = await this.knex('users').select('*').where({ id });
    return user;
  }
}