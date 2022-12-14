import { Inject, Injectable } from '@nestjs/common';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoques } from './entities/estoque.entity';
import { Produtos } from '@Modules/produtos/entities/produto.entity';

@Injectable()
export class EstoquesService {
  constructor(
    @Inject('ESTOQUE_REPOSITORY')
    private estoqueRepository: typeof Estoques,
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: typeof Produtos
  ) { }

  async create(createEstoqueDto: any) {
    const { codigoBarra } = createEstoqueDto;
    const product = await this.produtoRepository.findOne<any>({ where: { codigoBarra } });
    const response = await this.estoqueRepository.create({...createEstoqueDto, produtoId: product.id });
    const updateEstoqueOnPorudct = {
      nome: product.nome,
      valor: product.valor,
      ml: product.ml,
      tipo: product.tipo,
      estoqueId: response.id
    }
    await this.produtoRepository.update(updateEstoqueOnPorudct, { where: { codigoBarra } });
    return response;
  }

  async findAll(): Promise<any> {
    const response = await this.estoqueRepository.findAll<Estoques>();
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} estoque`;
  }

  update(codigoBarra: string, updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueRepository.update(updateEstoqueDto, { where: { codigoBarra } });
  }

  remove(id: number) {
    return `This action removes a #${id} estoque`;
  }
}
