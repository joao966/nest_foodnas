import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { EstoquesController } from './estoques.controller';
import { estoquesProviders } from './estoques.providers';

@Module({
  controllers: [EstoquesController],
  providers: [EstoquesService, ...estoquesProviders]
})
export class EstoquesModule {}
