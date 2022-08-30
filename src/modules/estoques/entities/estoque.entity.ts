import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne, PrimaryKey } from 'sequelize-typescript';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { Produtos } from '../../produtos/entities/produto.entity';


@Table({tableName: 'estoques'})
export class Estoques extends Model<CreateEstoqueDto> {
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

  @ForeignKey(() => Produtos)
  @Column
  produtoId: number

  // @BelongsTo(() => Produtos)
  // estoqueId: Produtos

  @HasOne(() => Produtos, 'estoqueId')
  produto: Produtos;
}