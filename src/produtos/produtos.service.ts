import { Injectable, Inject } from '@nestjs/common';
import { typeList } from 'src/types/typesGlobals';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { produto } from './entities/produto.entity'

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: typeof produto
  ) {}


  async create(createProdutoDto: CreateProdutoDto) {
    return await this.produtoRepository.create(createProdutoDto);
  }

  async findAll(): Promise<typeList>  {
    const response = await this.produtoRepository.findAll<produto>();
    
    return {
      message: "success",
      count: response.length,
      info: response
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
