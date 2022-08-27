import { IsNotEmpty } from "class-validator";

export class UpdateEstoqueDto {
  @IsNotEmpty()
  quantidade_total_caixa: number;

  @IsNotEmpty()
  quantidade_total_unidade: boolean;

  @IsNotEmpty()
  codigo_barra: string;
}
