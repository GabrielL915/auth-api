import { Create, Update, Delete, FindAll, FindOne } from 'shared/shared';
import { User } from "domainUsers/domain-users";
import { CadastroRequestDto } from 'domainAuth/domain-auth';

export abstract class UserRepository
  implements
    Create<CadastroRequestDto, User>,
    Update<any, 'id', User>,
    Delete<any, 'id', string>,
    FindAll<User>,
    FindOne<any, 'id', User>
{
    abstract createOne(input: CadastroRequestDto): Promise<User>;
    abstract updateOne(id: string, input: any): Promise<User>;
    abstract deleteOne(id: string): Promise<string>;
    abstract findAll(): Promise<User[]>;
    abstract findOne(id: string): Promise<User>;
}
