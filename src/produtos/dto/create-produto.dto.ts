import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

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
  tipo: string;
}
