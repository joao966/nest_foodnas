import { Table, Column, Model, DataType, ForeignKey, HasOne } from 'sequelize-typescript';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { Produtos } from '../../produtos/entities/produto.entity';

@Table({tableName: 'estoques'})
export class Estoques extends Model<CreateEstoqueDto> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidade: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigoBarra: string;

  @ForeignKey(() => Produtos)
  @Column
  produtoId: number;

  @HasOne(() => Produtos)
  produto: Produtos;
}