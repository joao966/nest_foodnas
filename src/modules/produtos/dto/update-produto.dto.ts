import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  codigoBarra?: string;
  nome?: string;
  valor?: number;
  quantidade?: number;
  ml?: number;
  tipo?: string;
}
