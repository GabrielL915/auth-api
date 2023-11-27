import { Injectable } from '@nestjs/common';
import { UserRepository } from 'dataSource/data-source';
import { FindResponseDto } from '../dto/find-response.dto';
import { UseCase } from 'shared/shared';

@Injectable()
export class FindByIdUseCase implements UseCase<string, FindResponseDto> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<FindResponseDto> {
    return await this.userRepository.findOne(id);
  }

}