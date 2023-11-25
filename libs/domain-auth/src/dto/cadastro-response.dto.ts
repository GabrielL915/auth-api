import { PartialType } from '@nestjs/mapped-types';
import { CadastroRequestDto } from './cadastro-request.dto';
import { IsString } from 'class-validator';

export class CadastroResponseDto extends PartialType(CadastroRequestDto) {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsString({ message: 'Email must be a string' })
  email: string;

  @IsString({ message: 'Age must be a number' })
  age: number;
}
