import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { produto } from '../../produtos/entities/produto.entity';


@Table
export class estoques extends Model<CreateEstoqueDto> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidade_total_caixa: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  quantidade_total_unidade: boolean;
  
  @Column
  codigo_barra: string;

  // @HasMany(() => produto)
  // codigoBarra: produto[]
}