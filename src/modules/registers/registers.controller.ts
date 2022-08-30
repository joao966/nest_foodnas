import { Controller, Get, Post, Body, Patch, Param, Delete, Ip, Req } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { CreateRegistersDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { getClientIp } from '@supercharge/request-ip'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('registers')
@Controller('registers')
export class RegistersController {
  constructor(private readonly registersService: RegistersService) {}

  @Post()
  create(@Body() createRegisterDto: CreateRegistersDto, @Req() request: any, @Ip() ip: any) {
    const ipSuperchange = getClientIp(request)
    console.log('ip: ', ip);
    console.log(ipSuperchange)
    return this.registersService.create(createRegisterDto);
  }

  @Get()
  findAll() {
    return this.registersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registersService.findOne(+id);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registersService.update(email, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registersService.remove(+id);
  }
}
