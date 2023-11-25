import { Injectable } from '@nestjs/common';
import { CadastroRequestDto } from '../dto/cadastro-request.dto';
import { CadastroResponseDto } from '../dto/cadastro-response.dto';
import { UseCase } from 'shared/shared';
@Injectable()
export class CadastroUseCase
  implements UseCase<CadastroRequestDto, CadastroResponseDto>
{
  async execute(request: CadastroRequestDto): Promise<CadastroResponseDto> {
    return {
      name: request.name,
      email: request.email,
      age: request.age,
    };
  }
}
