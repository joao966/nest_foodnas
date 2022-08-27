import { Sequelize } from 'sequelize-typescript';
import { produto } from '../modules/produtos/entities/produto.entity';
import { registers } from '../modules/registers/entities/register.entity';
import { Estoques } from '../modules/estoques/entities/estoque.entity';
import 'dotenv/config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: process.env.DB_SSL
          }
        }
      });
      sequelize.addModels([produto, registers, Estoques]);
      await sequelize.sync({
        force: true,
      });
      return sequelize;
    },
  },
];