import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('estoques')
@Controller('estoques')
export class EstoquesController {
  constructor(private readonly estoquesService: EstoquesService) {}

  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoquesService.create(createEstoqueDto);
  }

  @Get()
  findAll() {
    return this.estoquesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoquesService.findOne(+id);
  }

  @Patch(':codigoBarra')
  update(@Param('codigoBarra') codigoBarra: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoquesService.update(codigoBarra, updateEstoqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoquesService.remove(+id);
  }
}
