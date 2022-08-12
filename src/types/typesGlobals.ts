import { produto } from "src/produtos/entities/produto.entity";

export interface typeList {
  message: string,
  count: number,
  info: produto[]
}
