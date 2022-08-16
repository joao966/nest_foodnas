import { Injectable, Inject } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { produto } from './entities/produto.entity'
import { typeListProduto } from '../../types/produto'

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: typeof produto
  ) {}


  async create(createProdutoDto: CreateProdutoDto) {
    return await this.produtoRepository.create(createProdutoDto);
  }

  async findAll(): Promise<typeListProduto>  {
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
