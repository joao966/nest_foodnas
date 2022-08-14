import { Controller, Get, Post, Body, Patch, Param, Delete, Ip, Req } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { CreateRegistersDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { getClientIp } from '@supercharge/request-ip'

@Controller('registers')
export class RegistersController {
  constructor(private readonly registersService: RegistersService) {}

  @Post()
  create(@Body() createRegisterDto: CreateRegistersDto, @Req() request: any, @Ip() ip: any) {
    const ipSuperchange = getClientIp(request)
    console.log(ip)
    return {ipSuperchange, ip};
  }

  @Get()
  findAll() {
    return this.registersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registersService.update(+id, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registersService.remove(+id);
  }
}
