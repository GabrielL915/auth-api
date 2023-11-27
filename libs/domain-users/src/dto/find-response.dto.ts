import { IsNumber, IsString } from "class-validator";

export class FindResponseDto {
  id?: string;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsString({ message: 'Email must be a string' })
  email: string;

  @IsNumber()
  age: number;

  @IsString({ message: 'Password must be a string' })
  password: string;

  createdAt?: Date;
}
