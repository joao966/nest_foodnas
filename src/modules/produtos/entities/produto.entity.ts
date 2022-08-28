import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Table({tableName: 'produtos'})
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
}