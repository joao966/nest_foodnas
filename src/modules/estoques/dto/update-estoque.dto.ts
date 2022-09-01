import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
  quantidade_total_caixa?: number;
  quantidade_total_unidade?: boolean;
  codigoBarra?: string;
}
