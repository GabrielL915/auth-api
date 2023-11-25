import { Injectable } from '@nestjs/common';
import { CadastroRequestDto } from '../dto/cadastro-request.dto';
import { CadastroResponseDto } from '../dto/cadastro-response.dto';
import { UseCase } from 'shared/shared';
import { UserRepository } from 'dataSource/data-source';
@Injectable()
export class CadastroUseCase
  implements UseCase<CadastroRequestDto, CadastroResponseDto>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: CadastroRequestDto): Promise<CadastroResponseDto> {
    const user = await this.userRepository.createOne(request);
    return user;
  }
}
