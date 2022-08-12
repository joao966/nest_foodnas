import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class produto extends Model {
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