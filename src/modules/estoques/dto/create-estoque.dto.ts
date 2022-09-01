import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateEstoqueDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    description: 'Quantidade de produtos.',
  })
  quantidade: number;

  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: 'Codigo de barra de identificação do produto.',
  })
  codigoBarra: string;
}
