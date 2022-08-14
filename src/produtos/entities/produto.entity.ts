import { Table, Column, Model } from 'sequelize-typescript';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Table
export class produto extends Model<CreateProdutoDto> {
  @Column
  nome: string;
  
  @Column
  valor: number;
  
  @Column
  quantidade: number;
  
  @Column
  ml: number;
  
  @Column
  tipo: string;
}