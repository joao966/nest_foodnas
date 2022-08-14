import { Sequelize } from 'sequelize-typescript';
import { produto } from '../produtos/entities/produto.entity';
import { registers } from '../registers/entities/register.entity';
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
      sequelize.addModels([produto, registers]);
      await sequelize.sync();
      return sequelize;
    },
  },
];