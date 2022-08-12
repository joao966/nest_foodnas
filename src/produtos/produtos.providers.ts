import { produto } from './entities/produto.entity';

export const produtosProviders = [
  {
    provide: 'PRODUTO_REPOSITORY',
    useValue: produto,
  },
];