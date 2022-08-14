import { produto } from "src/produtos/entities/produto.entity";
import { registers } from "src/registers/entities/register.entity";

export interface typeList {
  message: string,
  count: number,
  info: produto[]
}

export interface typeListRegister {
  message: string,
  count: number,
  info: registers[]
}

