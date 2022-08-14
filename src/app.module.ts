import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { DatabaseModule } from './database.module';
import { RegistersModule } from './modules/registers/registers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProdutosModule, DatabaseModule, RegistersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
