import { Injectable, Inject } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { produto } from './entities/produto.entity'

interface typeList {
  message: string,
  info: Promise<produto[]>,
  count: number
}

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: typeof produto
  ) {}


  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  async findAll(): Promise<any>  {
    const response = await this.produtoRepository.findAll<produto>();
    
    return {
      message: "success",
      info: response,
      count: (await response).length
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
