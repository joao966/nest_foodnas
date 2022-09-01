import { Injectable, Inject } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produtos } from './entities/produto.entity'
import { typeListProduto } from '../../types/produto'

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: typeof Produtos
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return await this.produtoRepository.create(createProdutoDto);
  }

  async findAll(): Promise<typeListProduto>  {
    const response = await this.produtoRepository.findAll<Produtos>();
    return {
      message: "success",
      count: response.length,
      info: response
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(codigoBarra: string, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoRepository.update(updateProdutoDto, { where: { codigoBarra }});
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
