import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateEstoqueDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    description: 'Quantidade de produtos.',
  })
  quantidade_total_caixa: number;

  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: '',
  })
  quantidade_total_unidade: boolean;

  // @IsNotEmpty()
  // @ApiProperty({
  //   example: '',
  //   description: 'Codigo de barra de identificação do produto.',
  // })
  // codigo_barra: string;
}
