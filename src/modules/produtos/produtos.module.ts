import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { produtosProviders } from './produtos.providers';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, ...produtosProviders]
})
export class ProdutosModule {}
