import { IsEnum, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

enum Tipo {
  unidade = 'unidade',
  caixa = 'caixa',
}

export class CreateProdutoDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: 'Codigo de barra do produto, unitario ou caixa',
  })
  codigo_barra: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: 'Nome do produto.',
  })
  nome: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '7.98',
    description: 'Valor do produto. (usar ponto)',
  })
  @Expose()
  valor: number;

  @IsNotEmpty()
  @ApiProperty({
    example: '1000',
    description: 'ML do produto. (Quantidade em ml)',
  })
  ml: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 'unidade',
    description: `Tipo do produto, 'unidade' ou 'caixa'`,
  })
  @IsEnum(Tipo, {
    message: 'Tipo só aceita unidade ou caixa',
  })
  tipo: string;
}
