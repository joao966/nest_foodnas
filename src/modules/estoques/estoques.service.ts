import { Inject, Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoques } from './entities/estoque.entity';

@Injectable()
export class EstoquesService {

  constructor(
    @Inject('ESTOQUE_REPOSITORY')
    private estoqueRepository: typeof Estoques
  ) {}

  async create(createProdutoDto: any) {
    return await this.estoqueRepository.create(createProdutoDto);
  }

  async findAll(): Promise<any>  {
    const response = await this.estoqueRepository.findAll<Estoques>();
    
    return response;
  }


  findOne(id: number) {
    return `This action returns a #${id} estoque`;
  }

  update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    return `This action updates a #${id} estoque`;
  }

  remove(id: number) {
    return `This action removes a #${id} estoque`;
  }
}
