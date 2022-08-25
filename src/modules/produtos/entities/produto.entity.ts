import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { estoques } from '../../estoques/entities/estoque.entity';


@Table
export class produto extends Model<CreateProdutoDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;
  
  @Column({
    type: DataType.DECIMAL(10,2),
    allowNull: false,
  })
  valor: number;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ml: number;
  
  @Column({
    type: DataType.STRING,
    values: ['unidade', 'caixa'],
    allowNull: false,
  })
  tipo: string;

  @ForeignKey(() => estoques)
  @Column
  codigo_barra: string;

  // @BelongsTo(() => estoques)
  // codigo_barra: estoques;
}