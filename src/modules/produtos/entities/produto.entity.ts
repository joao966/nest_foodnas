import { Estoques } from '@Modules/estoques/entities/estoque.entity';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Table({tableName: 'produtos'})
export class Produtos extends Model<CreateProdutoDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigoBarra: string;
  
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
  @Column
  estoqueId: number;
 
  @BelongsTo(() => Estoques)
  estoque: Estoques
}