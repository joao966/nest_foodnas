import { produto } from "src/modules/produtos/entities/produto.entity";
import { registers } from "src/modules/registers/entities/register.entity";

export interface typeListProduto {
  message: string,
  count: number,
  info: produto[]
}

export interface typeListRegister {
  message: string,
  count: number,
  info: registers[]
}

