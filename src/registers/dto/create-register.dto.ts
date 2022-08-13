import { IsNotEmpty } from 'class-validator';

export class CreateRegistersDto {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: number;
};
