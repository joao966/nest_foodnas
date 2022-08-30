import { Produtos } from "src/modules/produtos/entities/produto.entity";

export interface typeListProduto {
  message: string,
  count: number,
  info: Produtos[]
}
