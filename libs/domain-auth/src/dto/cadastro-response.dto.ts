import { PartialType } from '@nestjs/mapped-types';
import { CadastroRequestDto } from './cadastro-request.dto';
import { IsNumber, IsString } from 'class-validator';

export class CadastroResponseDto extends PartialType(CadastroRequestDto) {

  id?: string;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsString({ message: 'Email must be a string' })
  email: string;

  @IsNumber()
  age: number;
}
