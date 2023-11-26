import { Injectable } from '@nestjs/common';
import { CadastroRequestDto } from '../dto/cadastro-request.dto';
import { CadastroResponseDto } from '../dto/cadastro-response.dto';
import { UseCase, hashPassword } from 'shared/shared';
import { UserRepository } from 'dataSource/data-source';

@Injectable()
export class CadastroUseCase
  implements UseCase<CadastroRequestDto, CadastroResponseDto>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CadastroRequestDto): Promise<CadastroResponseDto> {
    const hashedPassword = await hashPassword(input.password);
    const user = await this.userRepository.createOne({
      ...input,
      password: hashedPassword,
    });
    return user;
  }
}
