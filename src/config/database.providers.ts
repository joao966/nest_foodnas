import { Sequelize } from 'sequelize-typescript';
import { Produtos } from '../modules/produtos/entities/produto.entity';
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
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialectOptions: {
          ssl: process.env.DB_SSL
      },
      });
      sequelize.addModels([Produtos, registers, Estoques]);
      await sequelize.sync({
        // force: true,
      });
      return sequelize;
    },
  },
];