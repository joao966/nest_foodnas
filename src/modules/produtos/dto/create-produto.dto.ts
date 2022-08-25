import { IsEnum, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

enum Tipo {
  unidade = 'unidade',
  caixa = 'caixa',
}

export class CreateProdutoDto {
  @IsNotEmpty()
  codigo_barra: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @Expose()
  valor: number;

  @IsNotEmpty()
  ml: number;

  @IsNotEmpty()
  @IsEnum(Tipo, {
    message: 'Tipo must be either unidade or caixa',
  })
  tipo: string;
}
