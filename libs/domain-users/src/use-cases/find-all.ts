import { Injectable } from '@nestjs/common';
import { UserRepository } from 'dataSource/data-source';
import { FindResponseDto } from '../dto/find-response.dto';
import { UseCase } from 'shared/shared';

@Injectable()
export class FindAllUseCase implements UseCase<void, FindResponseDto[]> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<FindResponseDto[]> {
    return await this.userRepository.findAll();
  }
}