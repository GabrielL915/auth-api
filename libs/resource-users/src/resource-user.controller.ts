import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  FindAllUseCase,
  FindByIdUseCase,
  FindResponseDto,
} from 'domainUsers/domain-users';
import { AccessTokenGuard } from 'shared/shared';

@Controller('users')
export class ResourceUsersController {
  constructor(
    private readonly findAllUseCase: FindAllUseCase,
    private readonly findByUseCase: FindByIdUseCase,
  ) {}

  @UseGuards(AccessTokenGuard)
  @Get('findAll')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<FindResponseDto[]> {
    return await this.findAllUseCase.execute();
  }

  @UseGuards(AccessTokenGuard)
  @Get('findOne')
  @HttpCode(HttpStatus.OK)
  async findById(@Req() req: Request): Promise<FindResponseDto> {
    const id = req['user'].sub;
    return await this.findByUseCase.execute(id);
  }
}
