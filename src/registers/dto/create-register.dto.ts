import { IsNotEmpty } from 'class-validator';

export class CreateRegistersDto {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: number;
};
