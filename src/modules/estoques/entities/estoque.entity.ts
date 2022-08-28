import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { produto } from '../../produtos/entities/produto.entity';


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
}