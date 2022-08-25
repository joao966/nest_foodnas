import { estoques } from './entities/estoque.entity';

export const estoquesProviders = [
  {
    provide: 'ESTOQUE_REPOSITORY',
    useValue: estoques,
  },
];