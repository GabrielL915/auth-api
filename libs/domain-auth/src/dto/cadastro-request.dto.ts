import { IsNumber, IsString, MinLength } from 'class-validator';

export class CadastroRequestDto {
  @IsString({ message: 'Name must be a string'})
  name: string;

  @IsString({ message: 'Email must be a string'})
  email: string;

  @IsString({ message: 'Password must be a string'})
  @MinLength(8, { message: 'Password must be at least 8 characters long'})
  password: string;

  @IsNumber()
  age: number;
}
