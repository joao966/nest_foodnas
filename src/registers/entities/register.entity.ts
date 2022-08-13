import { Table, Column, Model } from 'sequelize-typescript';
import { CreateRegistersDto } from '../dto/create-register.dto';

@Table
export class registers extends Model<CreateRegistersDto> {
  @Column
  email: string;
  
  @Column
  password: string;
};
