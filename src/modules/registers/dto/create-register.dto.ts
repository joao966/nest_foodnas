import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateRegistersDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: number;
}
