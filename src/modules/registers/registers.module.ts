import { Module } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { RegistersController } from './registers.controller';
import { registersProviders } from './registers.provider';

@Module({
  controllers: [RegistersController],
  providers: [RegistersService, ...registersProviders]
})
export class RegistersModule {}
