import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { EstoquesController } from './estoques.controller';
import { estoquesProviders } from './estoques.providers';
import { produtosProviders } from '../produtos/produtos.providers';


@Module({
  controllers: [EstoquesController],
  providers: [EstoquesService, ...estoquesProviders, ...produtosProviders]
})
export class EstoquesModule {}
