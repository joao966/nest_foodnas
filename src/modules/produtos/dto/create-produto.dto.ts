import { IsEnum, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

enum Tipo {
  unidade = 'unidade',
  caixa = 'caixa',
}

export class CreateProdutoDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @Expose()
  valor: number;

  @IsNotEmpty()
  quantidade: number;

  @IsNotEmpty()
  ml: number;

  @IsNotEmpty()
  @IsEnum(Tipo, {
    message: 'Tipo must be either unidade or caixa',
  })
  tipo: string;
}
