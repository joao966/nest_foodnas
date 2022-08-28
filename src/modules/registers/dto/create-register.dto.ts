import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateRegistersDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'nome',
    description: 'Nome de usuário.',
  })
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'email@email.com',
    description: 'Email válido.',
  })
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  @ApiProperty({
    example: '******',
    description: 'Senha com mais de 5 caracteres.',
  })
  password: number;
}
