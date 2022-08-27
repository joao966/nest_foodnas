import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { Estoques } from '../../estoques/entities/estoque.entity';

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

  @ForeignKey(() => Estoques)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  estoquesId: number;
  
  @BelongsTo(() => Estoques)
  estoques: Estoques
}