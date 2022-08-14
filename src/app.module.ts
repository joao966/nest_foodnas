import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { DatabaseModule } from './database.module';
import { RegistersModule } from './registers/registers.module';

@Module({
  imports: [ProdutosModule, DatabaseModule, RegistersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
