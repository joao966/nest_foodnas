import { Estoques } from '@Modules/estoques/entities/estoque.entity';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, Default, HasOne } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Table({tableName: 'produtos'})
export class Produtos extends Model<CreateProdutoDto> {
  @ForeignKey(() => Estoques)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigo_barra: string;
  
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

  // @ForeignKey(() => Estoques)
  // @Column
  // estoqueId: number;

  // @HasOne(() => Estoques)
  // produtoId: Estoques;

  @BelongsTo(() => Estoques, 'estoqueId')
  estoque: Estoques
}