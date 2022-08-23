import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { DatabaseModule } from './database.module';
import { RegistersModule } from './modules/registers/registers.module';
import { EstoquesModule } from './modules/estoques/estoques.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProdutosModule, DatabaseModule, RegistersModule, EstoquesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
