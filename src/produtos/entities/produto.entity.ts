import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Table
export class produto extends Model<CreateProdutoDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;
  
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  valor: number;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantidade: number;
  
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